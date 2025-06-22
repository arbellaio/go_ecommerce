package services

import (
	"github.com/arbellaio/kaimono/app/database"
	"github.com/arbellaio/kaimono/app/models"
)

func GetBranchById(branchId string, branch *models.Branch) error {
	result := database.DB.Table(models.Branches).Where("id = ?", branchId).First(&branch)
	return result.Error
}
