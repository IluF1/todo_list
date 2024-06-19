package main

import (
	"net/http"

	"example.com/m/internal/api"
)

func main() {
	api := api.New(":8080", *http.NewServeMux())
	api.Endpoints()
	api.ListenAndServe()
}