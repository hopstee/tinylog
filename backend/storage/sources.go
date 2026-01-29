package storage

import (
	"context"
	"database/sql"
)

type Source struct {
	ID           int64  `json:"id,omitempty"`
	Path         string `json:"path"`
	Label        string `json:"label"`
	ConnectionID int64  `json:"connection_id,omitempty"`
}

func (s *Storage) Sources(ctx context.Context) (*sql.Rows, error) {
	return s.Query(ctx, `
		SELECT *
		FROM sources
	`)
}

func (s *Storage) Source(ctx context.Context, id int64) *sql.Row {
	return s.QueryRow(ctx, `
		SELECT *
		FROM sources
		WHERE id = $1
	`, id)
}

func (s *Storage) SaveSource(ctx context.Context, source Source) (sql.Result, error) {
	return s.Exec(ctx, `
		INSERT INTO sources (path, label)
		VALUES (?, ?)
	`,
		source.Path,
		source.Label,
	)
}

func (s *Storage) UpdateSource(ctx context.Context, source Source) (sql.Result, error) {
	return s.Exec(ctx, `
		UPDATE sources
		SET
			path = ?,
			label = ?
		)
		WHERE id = ?

	`,
		source.Path,
		source.Label,
		source.ID,
	)
}

func (s *Storage) DeleteSource(ctx context.Context, id int64) (sql.Result, error) {
	return s.Exec(ctx, `
		DELETE FROM sources
		WHERE id = ?

	`, id)
}
