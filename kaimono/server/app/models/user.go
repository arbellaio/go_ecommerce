package models

import tModel "github.com/arbellaio/tools/arbella/models"

const Users = "users"

type User struct {
	tModel.BusinessAudit
	tModel.Audit

	FirstName   string
	LastName    string
	Email       string
	Password    string
	PhoneNumber string
	IsVerified  bool
	DeviceOs    string
	DeviceId    string
	Token       string
	Address1    string
	Address2    string
	Postcode    string
	City        string
	Country     string
}
