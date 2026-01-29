package storage

import (
	"context"
	"database/sql"
	"os"
	"path/filepath"

	_ "github.com/mattn/go-sqlite3"
)

type Storage struct {
	appName string

	DB *sql.DB
}

func NewStorage(appName string) *Storage {
	return &Storage{appName: appName}
}

func (s *Storage) Init(ctx context.Context) error {
	home, _ := os.UserHomeDir()
	path := filepath.Join(home, s.appName, "store.db")
	db, err := sql.Open("sqlite3", path)
	if err != nil {
		return err
	}

	s.DB = db

	err = s.migrate(ctx)
	if err != nil {
		return err
	}

	return nil
}

func (s *Storage) migrate(ctx context.Context) error {
	_, err := s.DB.QueryContext(ctx, `
		CREATE TABLE IF NOT EXISTS connections (
	        id SERIAL PRIMARY KEY,
	        type TEXT NOT NULL,
	        auth_type TEXT NOT NULL,
	        name TEXT,
	        host TEXT,
			port TEXT,
			user TEXT,
			password TEXT,
			passphrase TEXT
	    );

		CREATE TABLE IF NOT EXISTS sources (
	        id SERIAL PRIMARY KEY,
	        path TEXT NOT NULL,
	        label TEXT NOT NULL,
			connection_id INTEGER NOT NULL
			FOREIGN KEY(connection_id) REFERENCES connections(id) ON UPDATE CASCADE
	    );
	`)

	return err
}

func (s *Storage) Query(ctx context.Context, query string, args ...any) (*sql.Rows, error) {
	return s.DB.QueryContext(ctx, query, args)
}

func (s *Storage) QueryRow(ctx context.Context, query string, args ...any) *sql.Row {
	return s.DB.QueryRowContext(ctx, query, args)
}

func (s *Storage) Exec(ctx context.Context, query string, args ...any) (sql.Result, error) {
	return s.DB.ExecContext(ctx, query, args)
}
