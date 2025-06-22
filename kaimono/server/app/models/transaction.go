package models

import tModel "github.com/arbellaio/tools/arbella/models"


type Transaction struct {
	tModel.Audit
	tModel.BusinessAudit

	Status          string
	Amount          string
	OrderNumber     string
	TransactionType TransactionType
}
