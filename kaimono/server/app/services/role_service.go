package services

import (
	"github.com/arbellaio/kaimono/app/database"
	"github.com/arbellaio/kaimono/app/models"
)

func GetUserRoleById(id string, userRole *models.UserRole) error {
	result := database.DB.Table(models.UserRoles).Where("user_id = ?", id).First(&userRole)
	return result.Error
}
