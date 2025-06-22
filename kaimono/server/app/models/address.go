package models

import tModel "github.com/arbellaio/tools/arbella/models"

type Address struct {
	tModel.BusinessAudit
	tModel.Audit

	Address1 string
	Address2 string
	Address3 string
	PostCode string
	City     string
	State    string
	Country  string

	AddressType AddressType
	UserId      string `json:"user_id" validate:"required"`
}
