package models

type ProductUnitType byte

const (
	Kg ProductUnitType = iota + 1
	Litre
	Pieces
)

func (productUnitType ProductUnitType) String() string {
	switch productUnitType {
	case Kg:
		return "Kg"
	case Litre:
		return "Litre"
	case Pieces:
		return "Pieces"
	default:
		return "Undetermined ProductUnitType"
	}
}
