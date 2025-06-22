package models

type AccountStatusType byte

const (
	InActive AccountStatusType = iota + 1
	WaitingApproval
	Active
	Suspended
	Blocked
)

func (accountStatusType AccountStatusType) String() string {
	switch accountStatusType {
	case InActive:
		return "InActive"
	case WaitingApproval:
		return "WaitingApproval"
	case Active:
		return "Active"
	case Suspended:
		return "Suspended"
	case Blocked:
		return "Blocked"
	default:
		return "Undetermined AccountStatusType"
	}
}
