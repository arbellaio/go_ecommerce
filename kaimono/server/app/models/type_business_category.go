package models

type BusinessCategoryType byte

const (
	Restaurants BusinessCategoryType = iota + 1
	Groceries
	Electronics
	Clothes
)

func (businessCategoryType BusinessCategoryType) String() string {
	switch businessCategoryType {
	case Restaurants:
		return "Restaurants"
	case Groceries:
		return "Groceries"
	case Electronics:
		return "Electronics"
	case Clothes:
		return "Clothes"
	default:
		return "Undetermined BusinessCategoryType"
	}
}
