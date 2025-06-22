package logger

import (
	"errors"
	"os"

	"go.uber.org/zap"
)

// Log struct should not be used for initializing
type Log struct {
	ZapLogger *zap.Logger
}

func InitializeLogger(path string) {
	logger := newLogging()
	Logger = logger
	createLogsDirectory(path)
}

var Logger = Log{}

func createLogsDirectory(path string) {
	if _, err := os.Stat(path); errors.Is(err, os.ErrNotExist) {
		err := os.Mkdir(path, os.ModePerm)
		if err != nil {
			Logger.Errorf("error while creating directory for logs %v", err)
		}
	}
}
