package models

import (
	tModel "github.com/arbellaio/tools/arbella/models"
)

type OrderItem struct {
	tModel.Audit
	tModel.BusinessAudit

	QuantityRequired  int
	QuantityProcessed int
	ProductId         string
	CategoryId        string
	CategoryName      string
	ProductName       string
	//Property is in minimum currency value so we add it in as string for eg: "100" cents to 1 usd
	TotalItemPrice string
	//Property is in minimum currency value so we add it in as string for eg: "100" cents to 1 usd
	SellPrice           string
	Notes               string
	OrderItemAttributes []OrderItemAttribute
	OrderId             string
}
