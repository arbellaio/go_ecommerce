package routes

import (
	admin "github.com/arbellaio/kaimono/app/controllers/admin"
	merchant "github.com/arbellaio/kaimono/app/controllers/merchant"
	tModels "github.com/arbellaio/tools/arbella/models"
	"github.com/arbellaio/tools/logger"
)

// setting up routes for controllers
func SetupRoutes(web *tModels.WebApp, logger *logger.Log) {

	app := web.FiberApp

	api := app.Group("api/")

	//** Version 1 **//
	v1 := api.Group("v1/")

	//** Admin APIs List **//
	adminOffice := v1.Group("admin/")
	//  business profile update route
	adminOffice.Get("business", admin.GetBusiness)
	adminOffice.Delete("business", admin.DeleteBusiness)

	//** Office APIs List **//
	merchantOffice := v1.Group("office/")
	// business and merchant register route
	merchantOffice.Post("register", merchant.Register)
	// merchant login route
	merchantOffice.Post("login", merchant.Login)

	

}
