package database

import (
	"fmt"

	"github.com/arbellaio/tools/logger"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"moul.io/zapgorm2"
)

// create postgres database with gorm
func CreateGormPostgresDatabase(database, host, user, password, port, sslmode, timeZone string) *gorm.DB {
	connection := fmt.Sprintf("host=%s user=%s password=%s  port=%s sslmode=%s TimeZone=%s", host, user, password, port, sslmode, timeZone)
	logger.Logger.Informationf("connection string %s", connection)

	db, err := gorm.Open(postgres.Open(connection), &gorm.Config{})
	if err != nil {
		logger.Logger.Errorf("error connecting to postgres: %v", err)
		panic("error connecting to postgres")
	}
	logger.Logger.Information("creating database")

	db = db.Exec("CREATE DATABASE " + database)
	if db.Error != nil {
		logger.Logger.Warn("database already exist")
	}
	connection = connection + " database=" + database

	gormZaplogger := zapgorm2.New(logger.Logger.ZapLogger)
	gormZaplogger.SetAsDefault()

	db, err = gorm.Open(postgres.Open(connection), &gorm.Config{
		Logger: gormZaplogger,
	})

	if err != nil {
		logger.Logger.Errorf("error occurred connecting to database %v", err)
		panic(err)
	}
	logger.Logger.Information("connected to database")
	return db
}
