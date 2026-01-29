package app

import (
	"context"
	"tinylog/backend/storage"

	"github.com/wailsapp/wails/v3/pkg/application"
)

type App struct {
	Storage *storage.Storage
}

func (b *App) ServiceStartup(ctx context.Context, options application.ServiceOptions) error {
	b.Storage = storage.NewStorage("tinylog")

	return nil
}
