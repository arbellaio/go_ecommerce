package util

import (
	"errors"
	"log"
	"os"
)

func CreateDirectory(path string) {
	if _, err := os.Stat(path); errors.Is(err, os.ErrNotExist) {
		err := os.Mkdir(path, os.ModePerm)
		if err != nil {
			log.Fatalf("error while creating directory %v", err)
		}
	}
}
