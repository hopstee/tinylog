package storage

import (
	"os"
	"path"

	"github.com/adrg/xdg"
)

type Storage interface {
	Load() ([]byte, error)
	Store([]byte) error
}

type fileStorage struct {
	ConfigPath string
}

func NewStorage(filename string, appName string) *fileStorage {
	return &fileStorage{
		ConfigPath: path.Join(xdg.DataHome, appName, filename),
	}
}

func (s *fileStorage) Load() ([]byte, error) {
	d, err := os.ReadFile(s.ConfigPath)
	if err != nil {
		return nil, err
	}
	return d, nil
}

func (s *fileStorage) Store(data []byte) error {
	err := os.WriteFile(s.ConfigPath, data, os.FileMode(os.O_CREATE|os.O_WRONLY))
	if err != nil {
		return err
	}
	return nil
}
