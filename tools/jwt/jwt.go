package jwt

import (
	"time"

	"github.com/golang-jwt/jwt"
)

func GenerateJwt(issuer string, secretKey string) (string, error) {
	claims := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.StandardClaims{
		Issuer:    issuer,
		ExpiresAt: time.Now().Add(time.Hour * 24).Unix(), // 1 day
	})

	return claims.SignedString([]byte(secretKey))
}

func ParseJwt(cookie, secretKey string) (string, error) {
	token, err := jwt.ParseWithClaims(cookie, &jwt.StandardClaims{}, func(token *jwt.Token) (interface{}, error) {
		return []byte(secretKey), nil
	})

	if err != nil || !token.Valid {
		return "", err
	}

	claims := token.Claims.(*jwt.StandardClaims)
	return claims.Issuer, nil
}
