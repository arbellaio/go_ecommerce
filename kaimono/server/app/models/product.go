package models

import (
	tModel "github.com/arbellaio/tools/arbella/models"
)

type Product struct {
	tModel.BusinessAudit
	tModel.Audit

	SkuCode     string
	BarCode     string
	Name        string
	Description string

	//Property is in minimum currency value so we add it in as string for eg: "100" cents to 1 usd
	SellPrice string

	//Property is in minimum currency value so we add it in as string for eg: "100" cents to 1 usd
	SalePrice string

	//Property is in minimum currency value so we add it in as string for eg: "100" cents to 1 usd
	PurchasedPrice string

	//Property is in minimum currency value so we add it in as string for eg: "100" cents to 1 usd
	Tax string

	BundleProductId string
	IsAvailable     bool
	IsDelivery      bool
	IsCollected     bool
	IsInStore       bool

	ProductUnitType ProductUnitType

	CategoryId string
}
