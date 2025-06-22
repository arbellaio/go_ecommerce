package models

type CouponType byte

const (
	DiscountCoupon CouponType = iota + 1
	FreeItemCoupon
)

func (couponType CouponType) String() string {
	switch couponType {
	case DiscountCoupon:
		return "Discount Coupon"
	case FreeItemCoupon:
		return "Free Item Coupon"
	default:
		return "Undetermined CouponType"
	}
}
