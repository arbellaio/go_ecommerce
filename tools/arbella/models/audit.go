package models

import (
	"time"
)

// arbella.io internal model business audit struct
type BusinessAudit struct {
	BranchId   string
	BusinessId string
}

// arbella.io internal model audit struct
type Audit struct {
	Id        string    `gorm:"primarykey" json:"id"`
	CreatedBy string    `json:"created_by"`
	UpdatedBy string    `json:"updated_by"`
	IsDeleted bool      `json:"is_deleted"`
	EventTime time.Time `json:"event_time"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

type Response map[string]interface{}
