package storage

import (
	"context"
	"database/sql"
)

type Connection struct {
	ID         int64  `json:"id,omitempty"`
	Type       string `json:"type"`
	AuthType   string `json:"auth_type"`
	Name       string `json:"name"`
	Host       string `json:"host"`
	Port       string `json:"port"`
	User       string `json:"user"`
	Password   string `json:"password,omitempty"`
	Passphrase string `json:"passphrase,omitempty"`
}

func (s *Storage) Connections(ctx context.Context) (*sql.Rows, error) {
	return s.Query(ctx, `
		SELECT *
		FROM connections
	`)
}

func (s *Storage) Connection(ctx context.Context, id int64) *sql.Row {
	return s.QueryRow(ctx, `
		SELECT *
		FROM connections
		WHERE id = $1
	`, id)
}

func (s *Storage) ConnectionsWithSources(ctx context.Context) (*sql.Rows, error) {
	return s.Query(ctx, `
		SELECT *
		FROM connections
		INNER JOIN sources ON connections.id = sources.connection_id
		GROUP BY connections.id
	`)
}

func (s *Storage) ConnectionWithSources(ctx context.Context, id int64) *sql.Row {
	return s.QueryRow(ctx, `
		SELECT *
		FROM connections
		INNER JOIN sources ON connections.id = sources.connection_id
		WHERE id = ?
	`, id)
}

func (s *Storage) SaveConnection(ctx context.Context, connection Connection) (sql.Result, error) {
	return s.Exec(ctx, `
		INSERT INTO connections (type, auth_type, name, host, port, user, password, passphrase)
		VALUES (?, ?, ?, ?, ?, ?, ?)
	`,
		connection.Type,
		connection.AuthType,
		connection.Name,
		connection.Host,
		connection.Port,
		connection.User,
		connection.Password,
		connection.Passphrase,
	)
}

func (s *Storage) UpdateConnection(ctx context.Context, connection Connection) (sql.Result, error) {
	return s.Exec(ctx, `
		UPDATE connections
		SET
			type = ?,
			auth_type = ?,
			name = ?,
			host = ?,
			port = ?,
			user = ?,
			password = ?,
			passphrase = ?
		)
		WHERE id = ?

	`,
		connection.Type,
		connection.AuthType,
		connection.Name,
		connection.Host,
		connection.Port,
		connection.User,
		connection.Password,
		connection.Passphrase,
		connection.ID,
	)
}

func (s *Storage) DeleteConnection(ctx context.Context, id int64) (sql.Result, error) {
	return s.Exec(ctx, `
		DELETE FROM connections
		WHERE id = ?

	`, id)
}
