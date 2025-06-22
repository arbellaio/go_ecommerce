package models

type UserRoleType byte

const (
	Admin UserRoleType = iota + 1
	Merchant
	Employee
	Shopper
)

func (userRoleType UserRoleType) RoleName() string {
	switch userRoleType {
	case Admin:
		return "Admin"
	case Merchant:
		return "Merchant"
	case Employee:
		return "Employee"
	case Shopper:
		return "Shopper"
	default:
		return "Undetermined User Role Type"
	}
}
