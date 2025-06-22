package models

import (
	tModel "github.com/arbellaio/tools/arbella/models"
)

type Device struct {
	tModel.Audit
	tModel.BusinessAudit

	Name         string
	PairingCode  string
	SerialNumber string
	LocationId   string
	BranchCode   string
	IPAddress    string
}
