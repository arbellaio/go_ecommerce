package models

import tModel "github.com/arbellaio/tools/arbella/models"


type UserPermission struct {
	tModel.Audit
	tModel.BusinessAudit

	UserId       string
	PermissionId string
}
