package password

import (
	"github.com/arbellaio/tools/logger"
	"golang.org/x/crypto/bcrypt"
)

func HashAndSaltPassword(password string) string {
	passwordSlice := []byte(password)

	// Use GenerateFromPassword to hash & salt pwd
	// MinCost is just an integer constant provided by the bcrypt
	// package along with DefaultCost & MaxCost.
	// The cost can be any value you want provided it isn't lower
	// than the MinCost (4)
	hash, err := bcrypt.GenerateFromPassword(passwordSlice, bcrypt.MinCost)
	if err != nil {
		logger.Logger.Errorf("error hashing password %v", err)
	}
	// GenerateFromPassword returns a byte slice so we need to
	// convert the bytes to a string and return it
	return string(hash)
}

func ComparePassword(hashedPassword, password string) bool {

	// Since we'll be getting the hashed password from the DB it
	// will be a string so we'll need to convert it to a byte slice
	passwordSlice := []byte(password)
	hashPasswordSlice := []byte(hashedPassword)
	err := bcrypt.CompareHashAndPassword(hashPasswordSlice, passwordSlice)
	if err != nil {
		logger.Logger.Errorf("wrong password %v", err)
		return false
	}
	return true
}
