package models

import tModel "github.com/arbellaio/tools/arbella/models"

type Wishlist struct {
	tModel.Audit
	tModel.BusinessAudit

	//Property is in minimum currency value so we add it in as string for eg: "100" cents to 1 usd
	Discount string

	//Property is in minimum currency value so we add it in as string for eg: "100" cents to 1 usd
	InvoiceTotal string

	WishlistItems []WishlistItem
}
