import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n/i18n.ts";
import App from "./App.tsx";
import "./style/index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
