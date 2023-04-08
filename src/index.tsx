import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "animate.css";

import App from "./App";
import "./styles.css";
import "./styles.scss";

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
