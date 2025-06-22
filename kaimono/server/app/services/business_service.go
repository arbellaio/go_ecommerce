package services

import (
	"github.com/arbellaio/kaimono/app/database"
	"github.com/arbellaio/kaimono/app/models"
)

func GetBusinessById(id string, business *models.Business) error {
	result := database.DB.Table(models.Businesses).Where("id = ?", id).First(&business)
	return result.Error
}
