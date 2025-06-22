package dto

type Branch struct {
	Id       string
	Name     string
	Code     string
	IsMain   bool
	Town     string
	City     string
	PostCode string
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
	BranchStatusType byte
}
