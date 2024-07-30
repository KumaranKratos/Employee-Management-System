import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./Router";
import styles from "./index.module.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
