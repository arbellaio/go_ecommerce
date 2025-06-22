package models

type Config struct {
	Database     string
	Port         string
	AllowedHosts string `default:"*"`
	Jwt          Jwt
}
