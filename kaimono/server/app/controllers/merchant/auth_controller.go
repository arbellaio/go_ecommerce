package controllers

import (
	"github.com/arbellaio/kaimono/app/constants"
	"github.com/arbellaio/kaimono/app/dto"
	"github.com/arbellaio/kaimono/app/models"
	"github.com/arbellaio/kaimono/app/services"
	"github.com/arbellaio/tools/arbella/mail"
	tModels "github.com/arbellaio/tools/arbella/models"
	"github.com/arbellaio/tools/arbella/util"
	"github.com/arbellaio/tools/config"
	"github.com/arbellaio/tools/jwt"
	"github.com/arbellaio/tools/logger"
	"github.com/arbellaio/tools/password"
	"github.com/arbellaio/tools/validation"
	"github.com/gofiber/fiber/v2"
)

func Register(ctx *fiber.Ctx) error {
	var register dto.Register
	if err := ctx.BodyParser(&register); err != nil {
		logger.Logger.Errorf("%s error parsing registration dto %v", constants.PARSING_ERROR, err)
		return ctx.Status(500).JSON(tModels.Response{
			"message": "error occurred, contact support",
		})
	}

	logger.Logger.Informationf("%s register body parsed %v", constants.REGISTER_BODY_PARSED, register)

	if register.ConfirmPassword != register.Password {
		return ctx.Status(400).JSON(tModels.Response{
			"message": "both passwords do not match",
		})
	}
	err := validation.Validate.Struct(register)
	if err != nil {
		logger.Logger.Errorf("%s validation error occurred %v", constants.VALIDATION_ERROR, err.Error())
		return ctx.Status(400).JSON(tModels.Response{
			"message": `missing values error: {{err.Error()}}`,
		})
	}

	var user models.User
	err = services.GetUserByEmail(register.Email, &user)
	if err != nil {
		logger.Logger.Errorf("error occurred when getting user by email %v", err)
	}

	if user.Email == register.Email {
		logger.Logger.Informationf("%s user with email %v already exist", constants.ALREADY_EXISTS, user.Email)
		return ctx.Status(405).JSON(tModels.Response{
			"message": "user with this email already exists",
		})
	}
	register.FirstName, register.LastName = util.NameToFirstAndLastName(register.Name)
	register.HashedPassword = password.HashAndSaltPassword(register.Password)
	user, business, branch, userRole := register.MapRegisterDtoToUserAndBusiness()

	services.RegisterBusiness(&user, &business, &branch, &userRole)

	logger.Logger.Informationf("%s new business, branch and user is successfully registered for email: %v", constants.BUSINESS_REGISTERED, user.Email)
	go emailVerification(&user)

	return ctx.Status(201).JSON(tModels.Response{
		"data":    user,
		"message": "registration was successful, email is sent for verification",
	})
}

// Login Handler
func Login(ctx *fiber.Ctx) error {
	var login dto.Login
	if err := ctx.BodyParser(&login); err != nil {
		logger.Logger.Errorf("merchant_login_controller could not parse login dto error: %#v", err.Error())
		return ctx.Status(500).JSON(tModels.Response{
			"message": "error occurred, contact support",
		})
	}

	var user models.User
	var business models.Business
	var branch models.Branch
	var userRole models.UserRole

	err := services.GetUserByEmail(login.Email, &user)
	if err != nil {
		logger.Logger.Errorf("error fetching user %v", err.Error())
		return ctx.Status(404).JSON(tModels.Response{
			"message": `user not found`,
		})
	}

	//** authenticating user
	isVerified := password.ComparePassword(user.Password, login.Password)
	if !isVerified {
		return ctx.JSON(tModels.Response{
			"message": "authentication failed",
			"status":  401,
		})
	}

	//** generating token
	token, err := jwt.GenerateJwt(config.GetString("KAIMONO_ISSUER"), config.GetString("KAIMONO_SECRET"))
	if err != nil {
		logger.Logger.Errorf("error generating token %v", err.Error())
		return ctx.Status(500).JSON(tModels.Response{
			"message": "authentication failure, contact admin",
		})
	}

	user.Token = token

	err = services.GetBusinessById(user.BusinessId, &business)
	if err != nil {
		logger.Logger.Errorf("error fetching business %v", err.Error())
		return ctx.Status(404).JSON(tModels.Response{
			"message": "business not found",
		})
	}

	err = services.GetBranchById(user.BranchId, &branch)
	if err != nil {
		logger.Logger.Errorf("error fetching branch %v", err.Error())
		return ctx.Status(404).JSON(tModels.Response{
			"message": "branch not found",
		})
	}

	err = services.GetUserRoleById(user.Id, &userRole)
	if err != nil {
		logger.Logger.Errorf("error fetching user role %v", err.Error())
		return ctx.Status(404).JSON(tModels.Response{
			"message": "user role not found",
		})
	}

	auth := dto.AuthResponse{}

	//map user, business, branch to auth dto
	auth.MapAuthModelsToDto(business, branch, user, userRole)

	return ctx.Status(200).JSON(tModels.Response{
		"data":    auth,
		"message": "login successful",
	})
}

func emailVerification(user *models.User) {
	mailInformation := mail.MailInformation{
		Subject:      "Kaimono - Verify Your Account",
		From:         "hello.arbella@gmail.com",
		Password:     "tumrvwvdcsctjhps",
		TemplateName: "../app/templates/verify.html",
		Template: mail.MailTemplate{
			ReceiverName:  user.FirstName,
			ReceiverEmail: user.Email,
			UserId:        user.Id,
		},
		To:       []string{user.Email},
		SmtpHost: "smtp.gmail.com",
		SmtpPort: "587",
	}
	err := mailInformation.Send(&logger.Logger)
	if err != nil {
		logger.Logger.Errorf("MAIL_ERROR mail error occurred %v", err.Error())
	}
}
