import ReactDOM from 'react-dom/client'
import React from "react";
import { RouterProvider } from 'react-router-dom'
import { Router } from './utils/router/router'
import './assets/styles/index.css'
import { Header } from "./components/layout/header/header.tsx";


document.body.style.backgroundColor = '#242424'
ReactDOM.createRoot(document.getElementById('root')!).render(
        <React.StrictMode>
            <Header/>
            <RouterProvider router = {Router}/>
        </React.StrictMode>
)
