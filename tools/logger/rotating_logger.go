package logger

import (
	"os"
	"time"
)

// Custom RotateWriter to handle log rotation every hour
type RotateWriter struct {
	dir      string
	filename string
	file     *os.File
}

func newRotateWriter(dir, filename string) *RotateWriter {
	return &RotateWriter{dir: dir, filename: filename}
}

func (w *RotateWriter) Write(p []byte) (n int, err error) {
	if w.file == nil {
		if err := w.rotate(); err != nil {
			return 0, err
		}
	}
	return w.file.Write(p)
}

func (w *RotateWriter) rotate() error {
	if w.file != nil {
		if err := w.file.Close(); err != nil {
			return err
		}
	}

	// Get current time to determine log file name
	now := time.Now()
	filename := now.Format("2006-01-02_15.log")
	filePath := "../" + w.dir + "/" + filename

	// Open the file
	file, err := os.OpenFile(filePath, os.O_CREATE|os.O_APPEND|os.O_WRONLY, 0644)
	if err != nil {
		return err
	}

	w.file = file
	return nil
}
