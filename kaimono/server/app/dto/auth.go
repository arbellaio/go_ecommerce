package dto

import (
	"time"

		tModels "github.com/arbellaio/tools/arbella/models"
	"github.com/arbellaio/kaimono/app/models"
	"github.com/google/uuid"
)

type Login struct {
	Email    string `json:"email" validate:"email, required"`
	Password string `json:"password" validate:"password, required"`
}

type Register struct {
	Name            string `json:"name" validate:"required"`
	Email           string `json:"email" validate:"required,email"`
	Password        string `json:"password" validate:"required"`
	ConfirmPassword string `json:"confirm_password" validate:"required"`
	PhoneNumber     string `json:"phone_number" validate:"required"`
	BusinessName    string `json:"business_name" validate:"required"`
	BranchName      string `json:"branch_name" validate:"required"`
	HashedPassword  string
	FirstName       string
	LastName        string
	UserId          string `json:"user_id" validate:"required"`
	BranchId        string `json:"branch_id" validate:"required"`
	BusinessId      string `json:"business_id" validate:"required"`
}

func (register *Register) MapRegisterDtoToUserAndBusiness() (models.User, models.Business, models.Branch, models.UserRole) {
	user := models.User{
		Audit: tModels.Audit{
			Id:        register.UserId,
			CreatedBy: register.UserId,
			UpdatedBy: register.UserId,
			EventTime: time.Now(),
		},
		BusinessAudit: tModels.BusinessAudit{
			BusinessId: register.BusinessId,
			BranchId:   register.BranchId,
		},
		FirstName:   register.FirstName,
		LastName:    register.LastName,
		Email:       register.Email,
		Password:    register.HashedPassword,
		PhoneNumber: register.PhoneNumber,
	}

	business := models.Business{
		Audit: tModels.Audit{
			Id:        register.BusinessId,
			CreatedBy: register.UserId,
			UpdatedBy: register.UserId,
			EventTime: time.Now(),
		},
		BusinessAudit: tModels.BusinessAudit{
			BusinessId: register.BusinessId,
			BranchId:   register.BranchId,
		},
		Name:  register.Name,
		Email: register.Email,
	}

	branch := models.Branch{
		Audit: tModels.Audit{
			Id:        register.BranchId,
			CreatedBy: register.UserId,
			UpdatedBy: register.UserId,
			EventTime: time.Now(),
		},

		BusinessAudit: tModels.BusinessAudit{
			BusinessId: register.BusinessId,
			BranchId:   register.BranchId,
		},
		Name:             register.BranchName,
		BranchStatusType: models.WaitingApproval,
	}

	userRole := models.UserRole{
		Audit: tModels.Audit{
			Id:        uuid.NewString(),
			CreatedBy: register.UserId,
			UpdatedBy: register.UserId,
			EventTime: time.Now(),
		},
		BusinessAudit: tModels.BusinessAudit{
			BusinessId: register.BusinessId,
			BranchId:   register.BranchId,
		},
		RoleName: models.Merchant.RoleName(),
		RoleId:   string(models.Merchant),
		UserId:   user.Id,
	}

	return user, business, branch, userRole
}

type AuthResponse struct {
	Business Business
	Branch   Branch
	User     User
}

func (auth *AuthResponse) MapAuthModelsToDto(business models.Business, branch models.Branch, user models.User, userRole models.UserRole) {
	auth.User = User{
		FirstName:   user.FirstName,
		LastName:    user.LastName,
		Email:       user.Email,
		PhoneNumber: user.PhoneNumber,
		IsVerified:  user.IsVerified,
		Token:       user.Token,
		UserRoleId:  userRole.RoleId,
		UserRole:    userRole.RoleName,
	}

	auth.Branch = Branch{
		Id:       branch.Id,
		Name:     branch.Name,
		IsMain:   branch.IsMain,
		Town:     branch.Town,
		City:     branch.City,
		PostCode: branch.PostCode,
	}

	auth.Business = Business{
		Id:          business.Id,
		Name:        business.Name,
		Email:       business.Email,
		PhoneNumber: business.PhoneNumber,
		City:        business.City,
		Country:     business.Country,
		PostCode:    business.PostCode,
	}
}
