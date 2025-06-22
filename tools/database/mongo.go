package database

import (
	"context"

	"github.com/arbellaio/tools/logger"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func ConnectMongoDb(mongoDBUri string, logger *logger.Log) (*mongo.Client, error) {
	client, err := mongo.Connect(context.TODO(), options.Client().ApplyURI(mongoDBUri))
	if err != nil {
		logger.Errorf("error connecting to mongodb %v", err)
		return nil, err
	}
	defer func() {
		if err := client.Disconnect(context.TODO()); err != nil {
			logger.Errorf("error disconnecting mongodb %v", err)
		}
	}()
	return client, nil
}
