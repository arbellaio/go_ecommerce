package logger

import (
	"os"

	"go.uber.org/zap"
	"go.uber.org/zap/zapcore"
)

// creating new zap logger instance
func newLogging() Log {
	log := new()
	log.ZapLogger.Sugar().Info("Starting Logger")
	return log
}

func new() Log {
	// Set up log rotation configuration
	encoderCfg := zapcore.EncoderConfig{
		MessageKey:   "msg",
		LevelKey:     "level",
		EncodeLevel:  zapcore.LowercaseLevelEncoder,
		TimeKey:      "time",
		EncodeTime:   zapcore.ISO8601TimeEncoder,
		CallerKey:    "caller",
		EncodeCaller: zapcore.FullCallerEncoder,
	}
	core := zapcore.NewCore(
		zapcore.NewJSONEncoder(encoderCfg),
		zapcore.NewMultiWriteSyncer(zapcore.AddSync(os.Stdout), zapcore.AddSync(newRotateWriter("../logs", "app.log"))),
		zap.NewAtomicLevelAt(zap.DebugLevel),
	)

	logger := zap.New(core)
	// Example log statements
	// logger.Info("Logging initialized", zap.String("service", "example"))

	// Need to close the logger at the end
	defer logger.Sync()
	arbellaLogger := Log{ZapLogger: logger}
	return arbellaLogger
}

// Logs message as Information Level
func (log *Log) Informationf(format string, args ...interface{}) {
	Logger.ZapLogger.Sugar().Infof(format, args)
}

func (log *Log) Information(format string) {
	Logger.ZapLogger.Sugar().Info(format)
}

func (log *Log) Debug(format string) {
	Logger.ZapLogger.Sugar().Debug(format)
}

func (log *Log) Debugf(format string, args ...interface{}) {
	Logger.ZapLogger.Sugar().Debugf(format, args)
}

func (log *Log) Error(format string) {
	Logger.ZapLogger.Sugar().Error(format)
}

func (log *Log) Errorf(format string, args ...interface{}) {
	Logger.ZapLogger.Sugar().Errorf(format, args)
}

func (log *Log) Warn(format string) {
	Logger.ZapLogger.Sugar().Error(format)
}

func (log *Log) Warnf(format string, args ...interface{}) {
	Logger.ZapLogger.Sugar().Errorf(format, args)
}

func (log *Log) Fatal(format string) {
	Logger.ZapLogger.Sugar().Fatal(format)
}

func (log *Log) Fatalf(format string, args ...interface{}) {
	Logger.ZapLogger.Sugar().Fatalf(format, args)
}

func (log *Log) Panic(format string) {
	Logger.ZapLogger.Sugar().Panic(format)
}

func (log *Log) Panicf(format string, args ...interface{}) {
	Logger.ZapLogger.Sugar().Panicf(format, args)
}
