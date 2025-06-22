package models

import (
	tModel "github.com/arbellaio/tools/arbella/models"
)

type Inventory struct {
	tModel.Audit
	tModel.BusinessAudit

	ProductId string
	InStock   float32
	Allocated float32
	Available float32

	// Raise notification when minimum stock is reached
	MinimumStockLevel float32

	// Raise notification when maximum stock is reached
	MaximumStockLevel float32
}
