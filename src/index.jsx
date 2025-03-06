import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");

if (!rootElement) {
  document.body.innerHTML = "<h1 style='color: red;'>Error: Root element not found</h1>";
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
