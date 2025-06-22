package models

type Jwt struct {
	Key      string
	Issuer   string
	Audience string
}
