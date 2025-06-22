package models

import tModel "github.com/arbellaio/tools/arbella/models"

const UserRoles = "user_roles"

type UserRole struct {
	tModel.BusinessAudit
	tModel.Audit

	UserId   string
	RoleId   string
	RoleName string
}
