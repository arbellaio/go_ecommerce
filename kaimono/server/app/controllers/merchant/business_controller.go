package controllers

import (
	"github.com/arbellaio/kaimono/app/models"
	"github.com/arbellaio/kaimono/app/services"
	tModels "github.com/arbellaio/tools/arbella/models"
	"github.com/arbellaio/tools/logger"
	"github.com/gofiber/fiber/v2"
)

func GetBusinessById(ctx *fiber.Ctx) error {
	id := ctx.Params("id")
	var business models.Business
	err := services.GetBusinessById(id, &business)
	if err != nil {
		logger.Logger.Errorf("business with id %d is not found error: %v", id, err)
	}

	return ctx.Status(200).JSON(tModels.Response{
		"message": "business found",
		"data":    business,
	})
}

func UpdateBusinessDetails(ctx *fiber.Ctx) {

}
