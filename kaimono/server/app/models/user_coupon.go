package models

import tModel "github.com/arbellaio/tools/arbella/models"

type UserCoupon struct {
	tModel.Audit
	tModel.BusinessAudit

	CouponId string
	UserId   string
}
