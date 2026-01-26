package storage

import (
	"encoding/json"
	"errors"
	"sync"
)

type SourcesStorage struct {
	storage Storage
	mu      sync.Mutex

	sources []SourceConfig
	loaded  bool
}

type SourceConfig struct {
	Name    string
	Path    string
	UseSSH  bool
	SSHUser string
	SSHHost string
	SSHPort string
}

var (
	SourceExistsErr   = errors.New("Source with this name already exists")
	SourceNotFoundErr = errors.New("Source with this name does not exists")
)

func NewSourcesStorage(appName string) *SourcesStorage {
	return &SourcesStorage{
		storage: NewStorage("sources.json", appName),
		sources: make([]SourceConfig, 0, 100),
	}
}

func (ds *SourcesStorage) WithSources(fn func([]SourceConfig)) error {
	ds.mu.Lock()
	defer ds.mu.Unlock()

	if err := ds.checkLoaded(); err != nil {
		return nil
	}

	fn(ds.sources)
	return nil
}

func (ds *SourcesStorage) Save(source SourceConfig) error {
	ds.mu.Lock()
	defer ds.mu.Unlock()

	if err := ds.checkLoaded(); err != nil {
		return err
	}

	for _, d := range ds.sources {
		if d.Name == source.Name {
			return SourceExistsErr
		}
	}

	ds.sources = append(ds.sources, source)
	return ds.save()
}

func (ds *SourcesStorage) Update(source SourceConfig) error {
	ds.mu.Lock()
	defer ds.mu.Unlock()

	if err := ds.checkLoaded(); err != nil {
		return err
	}

	for i, d := range ds.sources {
		if d.Name == source.Name {
			ds.sources[i] = source
			return ds.save()
		}
	}

	return SourceNotFoundErr
}

func (ds *SourcesStorage) Delete(name string) error {
	ds.mu.Lock()
	defer ds.mu.Unlock()

	if err := ds.checkLoaded(); err != nil {
		return err
	}

	for i, d := range ds.sources {
		if d.Name == name {
			copy(ds.sources[i:], ds.sources[i+1:])
			ds.sources[len(ds.sources)-1] = SourceConfig{}
			ds.sources = ds.sources[:len(ds.sources)-1]
			return ds.save()
		}
	}

	return SourceNotFoundErr
}

func (ds *SourcesStorage) save() error {
	b, err := json.Marshal(ds.sources)
	if err != nil {
		return err
	}

	return ds.storage.Store(b)
}

func (ds *SourcesStorage) checkLoaded() error {
	if ds.loaded {
		return nil
	}

	data, err := ds.storage.Load()
	if err != nil {
		return err
	}

	if len(data) == 0 {
		ds.loaded = true
		return nil
	}

	if err := json.Unmarshal(data, &ds.sources); err != nil {
		return err
	}

	ds.loaded = true
	return nil
}
