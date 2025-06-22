package config

import (
	"fmt"

	"github.com/fsnotify/fsnotify"
	"github.com/spf13/viper"
)

// * picks up configuration file in following format || "../", "env", ".env" ||
func ViperEnvConfiguration(configPath string, configType string, configName string) (*viper.Viper, error) {
	viper.AddConfigPath(configPath)
	viper.SetConfigType(configType)
	viper.SetConfigName(configName)
	viper.WatchConfig()
	viper.OnConfigChange(func(e fsnotify.Event) {
		fmt.Println("Config file changed:", e.Name)
	})
	err := viper.ReadInConfig()
	return viper.GetViper(), err
}

func GetString(parameter string) string {
	return viper.GetString(parameter)
}
