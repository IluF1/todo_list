package api

import (
	"net/http"

	"example.com/m/internal/handlers"
)

type api struct {
	addr string
	r    http.ServeMux
}

func New(addr string, r http.ServeMux) *api {
	return &api{addr: addr, r: r}
}

func (api *api) Endpoints() {
	api.r.HandleFunc("/api/todo", handlers.Todo)
	api.r.HandleFunc("/api/auth", handlers.Auth)
}

func (api *api) ListenAndServe() error {
	return http.ListenAndServe(api.addr, &api.r)
}