package models

type OrderType byte

const (
	EatIn OrderType = iota + 1
	TakeAway
	DeliveryOrder
	PurchaseOrder
	SalesOrder
)

func (orderType OrderType) String() string {
	switch orderType {
	case EatIn:
		return "Eat In"
	case TakeAway:
		return "Take Away"
	case DeliveryOrder:
		return "Delivery Order"
	case PurchaseOrder:
		return "Purchase Order"
	case SalesOrder:
		return "Sales Order"
	default:
		return "Undetermined OrderType"
	}
}
