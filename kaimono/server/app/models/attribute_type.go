package models

import (
	 tModel "github.com/arbellaio/tools/arbella/models"
)

type AttributeType struct {
	tModel.Audit
	tModel.BusinessAudit

	Name             string
	IsPriced         bool
	SelectionCount   int
	AttributeOrderId int
}
