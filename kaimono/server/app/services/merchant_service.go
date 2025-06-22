package services

import (
	"github.com/arbellaio/kaimono/app/database"
	"github.com/arbellaio/kaimono/app/models"
)

func RegisterBusiness(user *models.User, business *models.Business, branch *models.Branch, userRole *models.UserRole) {
	database.DB.Save(user)
	database.DB.Save(business)
	database.DB.Save(branch)
	database.DB.Save(userRole)
}

func GetUserByEmail(email string, user *models.User) error {
	result := database.DB.Table(models.Users).Where("email = ?", email).First(&user)
	return result.Error
}
