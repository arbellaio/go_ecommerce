package database

import (
	"time"

	"github.com/arbellaio/kaimono/app/models"
	tModels "github.com/arbellaio/tools/arbella/models"
	"github.com/arbellaio/tools/logger"
)

func SeedingData() {
	AddingUserRoles()
}

func AddingUserRoles() {
	roles := []models.Role{
		{
			Name: "Admin",
			Audit: tModels.Audit{
				Id:        "1",
				CreatedBy: "1",
				UpdatedBy: "1",
				IsDeleted: false,
				EventTime: time.Now().UTC(),
				CreatedAt: time.Now(),
				UpdatedAt: time.Now(),
			},
		},
		{
			Name: "Merchant",
			Audit: tModels.Audit{
				Id:        "2",
				CreatedBy: "1",
				UpdatedBy: "1",
				IsDeleted: false,
				EventTime: time.Now().UTC(),
				CreatedAt: time.Now(),
				UpdatedAt: time.Now(),
			},
		},
		{
			Name: "Employee",
			Audit: tModels.Audit{
				Id:        "3",
				CreatedBy: "1",
				UpdatedBy: "1",
				IsDeleted: false,
				EventTime: time.Now().UTC(),
				CreatedAt: time.Now(),
				UpdatedAt: time.Now(),
			},
		},
		{
			Name: "Shopper",
			Audit: tModels.Audit{
				Id:        "4",
				CreatedBy: "1",
				UpdatedBy: "1",
				IsDeleted: false,
				EventTime: time.Now().UTC(),
				CreatedAt: time.Now(),
				UpdatedAt: time.Now(),
			},
		},
	}
	logger.Logger.Informationf("adding roles to application %#v", roles)
	DB.Create(roles)
}
