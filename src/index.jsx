import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

console.log("🛠️ Debug: `index.jsx` is running...");

document.body.innerHTML += "<h1 style='color: blue;'>🛠️ Debug: `index.jsx` executed</h1>";

const rootElement = document.getElementById("root");

if (!rootElement) {
  document.body.innerHTML += "<h1 style='color: red;'>❌ Error: Root element not found</h1>";
  console.error("❌ No root element found!");
} else {
  console.log("✅ React is mounting...");
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
