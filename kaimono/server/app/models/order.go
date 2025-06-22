package models

import (
	"time"

	tModel "github.com/arbellaio/tools/arbella/models"
)

type Order struct {
	tModel.Audit
	tModel.BusinessAudit

	CartId          string
	UserName        string
	UserPhoneNumber string
	OrderCompleted  bool
	OrderDate       time.Time
	OrderItems      []OrderItem
	OrderNumber     string
	AccountCode     string

	//Property is in minimum currency value so we add it in as string for eg: "100" cents to 1 usd - Order Cost Without Discount
	OrderCost string

	//Property is in minimum currency value so we add it in as string for eg: "100" cents to 1 usd - Order Cost With Discount
	OrderTotal string

	//Property is in minimum currency value so we add it in as string for eg: "100" cents to 1 usd
	DeliveryCharges  string
	IsKiosk          bool
	IsPaid           bool
	Notes            string
	BillingAddress1  string
	BillingAddress2  string
	BillingPostCode  string
	BillingTown      string
	DeliveryAddress1 string
	DeliveryAddress2 string
	DeliveryPostCode string
	DeliveryTown     string
	BranchName       string

	//Property is in minimum currency value so we add it in as string for eg: "100" cents to 1 usd
	Discount        string
	OrderStatusType OrderStatusType
	TableNumber     int
	OrderType       OrderType
	UserEmail       string

	OrderStatusName string
	OrderTypeName   string
}
