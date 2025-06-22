package models

import (
	 tModel "github.com/arbellaio/tools/arbella/models"
	
)

type CartItemAttribute struct {
	tModel.Audit
	tModel.BusinessAudit

	ProductOrderAttributeName     string
	ProductOrderAttributeQuantity int

	//Property is in minimum currency value so we add it in as string for eg: "100" cents to 1 usd
	ProductOrderAttributePrice string
	ProductAttributeId         string
	ProductAttributeTypeName   string
	ProductId                  string

	CartItemId string
}
