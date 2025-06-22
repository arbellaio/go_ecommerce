package controllers

import (
	"github.com/arbellaio/kaimono/app/dto"
	"github.com/arbellaio/tools/logger"
	"github.com/gofiber/fiber/v2"
)

func GetBusiness(ctx *fiber.Ctx) error {

	return nil
}

func DeleteBusiness(ctx *fiber.Ctx) error {
	var registerDto dto.Register
	if err := ctx.BodyParser(&registerDto); err != nil {
		logger.Logger.Errorf("error occurred while deleting business %v", err.Error())
	}

	// services.DeleteBusiness(registerDto.BusinessId);
	return nil
}
