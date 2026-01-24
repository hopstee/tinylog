package storage

import (
	"encoding/json"
	"sync"
	"testing"
)

// ---------- mock fileStorage ----------

type mockFileStorage struct {
	mu   sync.Mutex
	data []byte
}

func (m *mockFileStorage) Load() ([]byte, error) {
	m.mu.Lock()
	defer m.mu.Unlock()

	if m.data == nil {
		return []byte{}, nil
	}
	out := make([]byte, len(m.data))
	copy(out, m.data)
	return out, nil
}

func (m *mockFileStorage) Store(b []byte) error {
	m.mu.Lock()
	defer m.mu.Unlock()

	m.data = make([]byte, len(b))
	copy(m.data, b)
	return nil
}

// ---------- helpers ----------

func newTestStorage() *DomainsStorage {
	ds := &DomainsStorage{
		storage: &mockFileStorage{},
		domains: make([]DomainConfig, 0, 10),
	}
	return ds
}

func testDomain(name string) DomainConfig {
	return DomainConfig{
		Name:     name,
		Address:  "127.0.0.1",
		Port:     "80",
		Interval: "1m",
		Status:   "up",
		PingPath: "/ping",
		Message:  "ok",
	}
}

// ---------- tests ----------

func TestSaveAndLoad(t *testing.T) {
	ds := newTestStorage()

	d := testDomain("example.com")

	if err := ds.Save(d); err != nil {
		t.Fatalf("save failed: %v", err)
	}

	var got []DomainConfig
	err := ds.WithDomains(func(domains []DomainConfig) {
		got = append(got, domains...)
	})

	if err != nil {
		t.Fatalf("withDomains failed: %v", err)
	}

	if len(got) != 1 {
		t.Fatalf("expected 1 domain, got %d", len(got))
	}

	if got[0].Name != d.Name {
		t.Fatalf("expected %s, got %s", d.Name, got[0].Name)
	}
}

func TestDuplicateSave(t *testing.T) {
	ds := newTestStorage()
	d := testDomain("dup.com")

	if err := ds.Save(d); err != nil {
		t.Fatal(err)
	}

	if err := ds.Save(d); err != DomainExistsErr {
		t.Fatalf("expected DomainExistsErr, got %v", err)
	}
}

func TestUpdate(t *testing.T) {
	ds := newTestStorage()
	d := testDomain("update.com")

	if err := ds.Save(d); err != nil {
		t.Fatal(err)
	}

	d.Status = "down"
	if err := ds.Update(d); err != nil {
		t.Fatalf("update failed: %v", err)
	}

	var got DomainConfig
	_ = ds.WithDomains(func(domains []DomainConfig) {
		got = domains[0]
	})

	if got.Status != "down" {
		t.Fatalf("expected status 'down', got %s", got.Status)
	}
}

func TestUpdateNotFound(t *testing.T) {
	ds := newTestStorage()

	err := ds.Update(testDomain("missing.com"))
	if err != DomainNotFoundErr {
		t.Fatalf("expected DomainNotFoundErr, got %v", err)
	}
}

func TestDelete(t *testing.T) {
	ds := newTestStorage()
	d1 := testDomain("a.com")
	d2 := testDomain("b.com")

	_ = ds.Save(d1)
	_ = ds.Save(d2)

	if err := ds.Delete("a.com"); err != nil {
		t.Fatalf("delete failed: %v", err)
	}

	var got []DomainConfig
	_ = ds.WithDomains(func(domains []DomainConfig) {
		got = append(got, domains...)
	})

	if len(got) != 1 {
		t.Fatalf("expected 1 domain, got %d", len(got))
	}

	if got[0].Name != "b.com" {
		t.Fatalf("expected b.com, got %s", got[0].Name)
	}
}

func TestDeleteNotFound(t *testing.T) {
	ds := newTestStorage()

	err := ds.Delete("nope.com")
	if err != DomainNotFoundErr {
		t.Fatalf("expected DomainNotFoundErr, got %v", err)
	}
}

func TestPersistence(t *testing.T) {
	storage := &mockFileStorage{}

	ds1 := &DomainsStorage{
		storage: storage,
		domains: make([]DomainConfig, 0),
	}

	_ = ds1.Save(testDomain("persist.com"))

	// новый инстанс с тем же storage
	ds2 := &DomainsStorage{
		storage: storage,
		domains: make([]DomainConfig, 0),
	}

	var got []DomainConfig
	err := ds2.WithDomains(func(domains []DomainConfig) {
		got = append(got, domains...)
	})

	if err != nil {
		t.Fatal(err)
	}

	if len(got) != 1 || got[0].Name != "persist.com" {
		t.Fatalf("persistence failed, got %+v", got)
	}
}

func TestStoredJSONValid(t *testing.T) {
	ds := newTestStorage()

	_ = ds.Save(testDomain("json.com"))

	raw, _ := ds.storage.Load()

	var decoded []DomainConfig
	if err := json.Unmarshal(raw, &decoded); err != nil {
		t.Fatalf("stored json invalid: %v", err)
	}
}
