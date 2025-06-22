package models

import tModel "github.com/arbellaio/tools/arbella/models"

type Permission struct {
	tModel.Audit
	tModel.BusinessAudit
	Name string
}
