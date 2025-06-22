package models

import (
					 tModel "github.com/arbellaio/tools/arbella/models"

)

type Coupon struct {
	tModel.Audit
	tModel.BusinessAudit

	Code        string
	Description string
	ProductId   string

	//Property is in minimum currency value so we add it in as string for eg: "100" cents to 1 usd
	DiscountPercentage string
}
