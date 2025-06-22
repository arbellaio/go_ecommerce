package models

import (
		 tModel "github.com/arbellaio/tools/arbella/models"

)

type CartItem struct {
	tModel.Audit
	tModel.BusinessAudit

	Quantity int

	//Property is in minimum currency value so we add it in as string for eg: "100" cents to 1 usd
	Price              string
	ProductId          string
	CartItemAttributes []CartItemAttribute
	CartId             string
}
