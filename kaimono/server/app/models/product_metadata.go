package models

import (
	tModel "github.com/arbellaio/tools/arbella/models"
)

type ProductMetadata struct {
	tModel.Audit
	tModel.BusinessAudit

	Tag       string
	ImagePath string
	ProductId string
}
