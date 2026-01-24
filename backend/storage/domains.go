package storage

import (
	"encoding/json"
	"errors"
	"sync"
)

type DomainsStorage struct {
	storage Storage
	mu      sync.Mutex

	domains []DomainConfig
	loaded  bool
}

type DomainConfig struct {
	Name     string
	Address  string
	Port     string
	Interval string
	Status   string
	PingPath string
	Message  string
}

var (
	DomainExistsErr   = errors.New("Domain with this name already exists")
	DomainNotFoundErr = errors.New("Domain with this name does not exists")
)

func NewDomains(appName string) *DomainsStorage {
	return &DomainsStorage{
		storage: NewStorage("domains.json", appName),
		domains: make([]DomainConfig, 0, 100),
	}
}

func (ds *DomainsStorage) WithDomains(fn func([]DomainConfig)) error {
	ds.mu.Lock()
	defer ds.mu.Unlock()

	if err := ds.checkLoaded(); err != nil {
		return nil
	}

	fn(ds.domains)
	return nil
}

func (ds *DomainsStorage) Save(domain DomainConfig) error {
	ds.mu.Lock()
	defer ds.mu.Unlock()

	if err := ds.checkLoaded(); err != nil {
		return err
	}

	for _, d := range ds.domains {
		if d.Name == domain.Name {
			return DomainExistsErr
		}
	}

	ds.domains = append(ds.domains, domain)
	return ds.save()
}

func (ds *DomainsStorage) Update(domain DomainConfig) error {
	ds.mu.Lock()
	defer ds.mu.Unlock()

	if err := ds.checkLoaded(); err != nil {
		return err
	}

	for i, d := range ds.domains {
		if d.Name == domain.Name {
			ds.domains[i] = domain
			return ds.save()
		}
	}

	return DomainNotFoundErr
}

func (ds *DomainsStorage) Delete(name string) error {
	ds.mu.Lock()
	defer ds.mu.Unlock()

	if err := ds.checkLoaded(); err != nil {
		return err
	}

	for i, d := range ds.domains {
		if d.Name == name {
			copy(ds.domains[i:], ds.domains[i+1:])
			ds.domains[len(ds.domains)-1] = DomainConfig{}
			ds.domains = ds.domains[:len(ds.domains)-1]
			return ds.save()
		}
	}

	return DomainNotFoundErr
}

func (ds *DomainsStorage) save() error {
	b, err := json.Marshal(ds.domains)
	if err != nil {
		return err
	}

	return ds.storage.Store(b)
}

func (ds *DomainsStorage) checkLoaded() error {
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

	if err := json.Unmarshal(data, &ds.domains); err != nil {
		return err
	}

	ds.loaded = true
	return nil
}
