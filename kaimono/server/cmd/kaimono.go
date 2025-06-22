package main

import (
	"log"

	"github.com/arbellaio/kaimono/app/database"
	"github.com/arbellaio/kaimono/app/routes"
	"github.com/arbellaio/tools/config"
	"github.com/arbellaio/tools/logger"
	"github.com/arbellaio/tools/validation"
	web "github.com/arbellaio/tools/web/fiber"
)

func main() {
	// setup log
	logger.InitializeLogger("../logs")

	// setup configuration
	conf, err := config.ViperEnvConfiguration("../", "env", ".env")
	if err != nil {
		logger.Logger.Panicf("Could not load environment variables %v", err)
	}
	logger.Logger.Informationf("Loading environment variables eg: DB_DRIVER %v", conf.GetString("DB_DRIVER"))

	// setup database
	database.Connect(&logger.Logger)

	// setup fiber app
	server := web.NewFiberApp(conf.GetString("APP_NAME")+" v1.0.0", &logger.Logger)

	// setup routes
	routes.SetupRoutes(server, &logger.Logger)

	//  setup validation
	validation.InitializeValidation()

	//start listen on specific address
	err = server.FiberApp.Listen(conf.GetString("SERVER_ADDRESS"))
	if err != nil {
		log.Panicf("Could not start server %v", err)
	}
}
