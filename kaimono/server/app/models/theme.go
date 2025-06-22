package models

import tModel "github.com/arbellaio/tools/arbella/models"

type Theme struct {
	tModel.Audit
	tModel.BusinessAudit

	BackgroundColor string
	BusinessLogo    string
	NavigationColor string
}
