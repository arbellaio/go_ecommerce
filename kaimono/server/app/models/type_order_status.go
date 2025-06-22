package models

type OrderStatusType byte

const (
	Created OrderStatusType = iota + 1
	Processing
	Ready
	Delivered
	Completed
	Stopped
	Returned
)

func (orderStatusType OrderStatusType) String() string {
	switch orderStatusType {
	case Created:
		return "Order Created"
	case Processing:
		return "Order Processing"
	case Ready:
		return "Order Ready"
	case Delivered:
		return "Order Delivered"
	case Completed:
		return "Order Completed"
	case Stopped:
		return "Order Stopped"
	case Returned:
		return "Order Returned"
	default:
		return "Undetermined OrderStatusType"
	}
}
