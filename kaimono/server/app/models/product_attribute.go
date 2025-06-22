package models

import (
	tModel "github.com/arbellaio/tools/arbella/models"
)

type ProductAttribute struct {
	tModel.Audit
	tModel.BusinessAudit

	AttributeName string
	//Property is in minimum currency value so we add it in as string for eg: "100" cents to 1 usd
	AttributePrice       string
	AttributeDescription string
	AttributeImagePath   string
	AttributeTypeName    string
	AttributeTypeId      string
	ProductName          string
	ProductId            string
	IsPreSelected        bool
	IsCategoryType       string
}
