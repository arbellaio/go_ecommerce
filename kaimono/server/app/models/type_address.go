package models

type AddressType byte

const (
	UserAddress AddressType = iota + 1
	BranchAddress
	BusinessAddress
)

func (addressType AddressType) String() string {
	switch addressType {
	case UserAddress:
		return "UserAddress"
	case BranchAddress:
		return "BranchAddress"
	case BusinessAddress:
		return "BusinessAddress"
	default:
		return "Undetermined AddressType"
	}
}
