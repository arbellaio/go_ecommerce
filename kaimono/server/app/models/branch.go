package models

import (
	 tModel "github.com/arbellaio/tools/arbella/models"
)

const Branches = "branches"

type Branch struct {
	tModel.BusinessAudit
	tModel.Audit
	Name        string
	PhoneNumber string
	Email       string
	Code        string
	IsMain      bool
	Town        string
	City        string
	PostCode    string
	Address     string
	Country     string

	// for delivery order information
	IsDelivery bool

	//  delivery in KM
	DeliveryInKm float32

	//  for collection order information
	IsCollection bool

	//  for onsite order information
	IsOnSite bool

	//  typical duration for delivery order
	DeliveryDuration string

	//  typical duration for collection order
	CollectionDuration string

	//  typical duration for onsite order
	OnSiteDuration string

	// branch status type based on AccountStatusType { InActive, WaitingApproval, Active, Suspended, Blocked }
	BranchStatusType AccountStatusType
}
