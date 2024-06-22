import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Router } from "./utils/router/router";
import "./assets/styles/index.scss";
import { Header } from "./components/layout/header/header.tsx";
import { Provider } from 'react-redux';
import { ReactStore } from './components/store/reactStore.ts'

document.body.style.backgroundColor = "#ffff ";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={ReactStore}>
    <Header />
    <RouterProvider router={Router} />
  </Provider>
);
