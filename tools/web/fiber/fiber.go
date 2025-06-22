package web

import (
	"github.com/arbellaio/tools/arbella/models"
	"github.com/arbellaio/tools/logger"
	"github.com/gofiber/contrib/fiberzap"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/monitor"
	"github.com/gofiber/fiber/v2/middleware/recover"
	"go.uber.org/zap"
)

// NewFiberApp arbella library to setup new fiber app along with logging and other metrics, cors with allowed urls eg: {"https:localhost:3000, https:igr.com"}"
func NewFiberApp(appName string, logger *logger.Log) *models.WebApp {

	// creates new fiber app instance
	app := fiber.New(fiber.Config{
		ServerHeader: "Fiber",
		AppName:      appName,
	})

	app.Use(useFiberZap(logger.ZapLogger))
	app.Use(recover.New())
	app.Get("/metrics", monitor.New(monitor.Config{Title: appName + ` Metrics`}))

	fiberApp := models.WebApp{FiberApp: app}
	return &fiberApp
}

// useFiberZap zap fiber logging middleware
func useFiberZap(logger *zap.Logger) func(*fiber.Ctx) error {
	handler := fiberzap.New(fiberzap.Config{
		Logger: logger,
	})
	return handler
}

func Cors(allowOrigins string, allowCredentials bool, allowHeaders string, allowMethods string) func(*fiber.Ctx) error {
	return cors.New(cors.Config{
		AllowCredentials: allowCredentials,
		AllowOrigins:     allowOrigins,
		AllowMethods:     allowMethods,
		AllowHeaders:     allowHeaders,
	})
}
