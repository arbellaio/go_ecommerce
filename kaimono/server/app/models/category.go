package models

import (
				 tModel "github.com/arbellaio/tools/arbella/models"

)

type Category struct {
	tModel.Audit
	tModel.BusinessAudit

	Name        string
	Description string
	Products    []Product
}
