package database

import (
	"github.com/arbellaio/kaimono/app/models"
	"github.com/arbellaio/tools/config"
	"github.com/arbellaio/tools/database"
	"github.com/arbellaio/tools/logger"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect(logger *logger.Log) {
	db := database.CreateGormPostgresDatabase(config.GetString("DB_NAME"), config.GetString("DB_HOST"), config.GetString("DB_USER"), config.GetString("DB_PASSWORD"), config.GetString("DB_PORT"), config.GetString("DB_SSLMODE"), config.GetString("DB_TIMEZONE"))
	DB = db
	DB.AutoMigrate(&models.Business{}, &models.Branch{}, &models.User{}, &models.UserRole{}, &models.Role{},
		&models.Address{}, &models.AttributeType{}, &models.Cart{}, &models.CartItem{}, &models.CartItemAttribute{},
		&models.Category{}, &models.Coupon{}, &models.Device{}, &models.Inventory{}, &models.Order{}, &models.OrderItem{},
		&models.OrderItemAttribute{}, &models.Product{}, &models.ProductAttribute{}, &models.ProductMetadata{},
		&models.Theme{}, &models.Transaction{}, &models.UserCoupon{}, &models.UserPermission{}, &models.Wishlist{},
		&models.WishlistItem{}, &models.WishlistItemAttribute{}, &models.Permission{})
	// SeedingData()
}
