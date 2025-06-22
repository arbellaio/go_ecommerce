package models

import tModel "github.com/arbellaio/tools/arbella/models"

type Role struct {
	tModel.Audit
	tModel.BusinessAudit

	Name string
}
