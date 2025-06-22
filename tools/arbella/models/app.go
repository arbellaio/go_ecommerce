package models

import (
	"net/http"

	"github.com/gofiber/fiber/v2"
)

type WebApp struct {
	FiberApp   *fiber.App
	DefaultApp *http.ServeMux
}
