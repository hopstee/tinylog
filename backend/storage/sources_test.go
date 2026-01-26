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

func newTestStorage() *SourcesStorage {
	ds := &SourcesStorage{
		storage: &mockFileStorage{},
		sources: make([]SourceConfig, 0, 10),
	}
	return ds
}

func testSource(name string) SourceConfig {
	return SourceConfig{
		Name:    name,
		Path:    "/etc/nginx/error.log",
		UseSSH:  true,
		SSHUser: "root",
		SSHHost: "127.0.0.1",
		SSHPort: "20",
	}
}

// ---------- tests ----------

func TestSaveAndLoad(t *testing.T) {
	ds := newTestStorage()

	d := testSource("example.com")

	if err := ds.Save(d); err != nil {
		t.Fatalf("save failed: %v", err)
	}

	var got []SourceConfig
	err := ds.WithSources(func(sources []SourceConfig) {
		got = append(got, sources...)
	})

	if err != nil {
		t.Fatalf("WithSources failed: %v", err)
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
	d := testSource("dup.com")

	if err := ds.Save(d); err != nil {
		t.Fatal(err)
	}

	if err := ds.Save(d); err != SourceExistsErr {
		t.Fatalf("expected SourceExistsErr, got %v", err)
	}
}

func TestUpdateNotFound(t *testing.T) {
	ds := newTestStorage()

	err := ds.Update(testSource("missing.com"))
	if err != SourceNotFoundErr {
		t.Fatalf("expected SourceNotFoundErr, got %v", err)
	}
}

func TestDelete(t *testing.T) {
	ds := newTestStorage()
	d1 := testSource("a.com")
	d2 := testSource("b.com")

	_ = ds.Save(d1)
	_ = ds.Save(d2)

	if err := ds.Delete("a.com"); err != nil {
		t.Fatalf("delete failed: %v", err)
	}

	var got []SourceConfig
	_ = ds.WithSources(func(sources []SourceConfig) {
		got = append(got, sources...)
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
	if err != SourceNotFoundErr {
		t.Fatalf("expected SourceNotFoundErr, got %v", err)
	}
}

func TestPersistence(t *testing.T) {
	storage := &mockFileStorage{}

	ds1 := &SourcesStorage{
		storage: storage,
		sources: make([]SourceConfig, 0),
	}

	_ = ds1.Save(testSource("persist.com"))

	ds2 := &SourcesStorage{
		storage: storage,
		sources: make([]SourceConfig, 0),
	}

	var got []SourceConfig
	err := ds2.WithSources(func(sources []SourceConfig) {
		got = append(got, sources...)
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

	_ = ds.Save(testSource("json.com"))

	raw, _ := ds.storage.Load()

	var decoded []SourceConfig
	if err := json.Unmarshal(raw, &decoded); err != nil {
		t.Fatalf("stored json invalid: %v", err)
	}
}
