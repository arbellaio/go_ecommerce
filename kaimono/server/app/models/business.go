package models

import (
	 tModel "github.com/arbellaio/tools/arbella/models"
)

const Businesses = "businesses"

type Business struct {
	tModel.Audit
	tModel.BusinessAudit

	Name        string
	LogoPath    string
	Email       string
	PhoneNumber string
	Address     string
	PostCode    string
	City        string
	Country     string

	// business status type based on AccountStatusType { InActive, WaitingApproval, Active, Suspended, Blocked }
	BusinessStatusType AccountStatusType

	//Business can have multiple branches
	Branches []Branch
}
