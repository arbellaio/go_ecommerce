package web

import (
	"net/http"

	"github.com/arbellaio/tools/arbella/models"
)

// creating new server mux
func NewWebApp() *models.WebApp {
	mux := http.NewServeMux()
	web := models.WebApp{
		DefaultApp: mux,
	}
	return &web
}
