package models

type TransactionType byte

const (
	PendingPayment TransactionType = iota + 1
	Paid
	FullyRefunded
	PartialRefunded
	PaymentError
)

func (transactionType TransactionType) String() string {
	switch transactionType {
	case PendingPayment:
		return "Pending Payment"
	case Paid:
		return "Paid"
	case FullyRefunded:
		return "Fully Refunded"
	case PartialRefunded:
		return "Partial Refunded"
	case PaymentError:
		return "Payment Error"
	default:
		return "Undetermined TransactionType"
	}
}
