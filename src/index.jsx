import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

console.log("🔄 React is Attempting to Mount!");

// Check if script is even running
document.body.innerHTML += "<p style='color: red;'>🛠️ Debug: `index.jsx` is executing</p>";

const rootElement = document.getElementById("root");

if (!rootElement) {
  document.body.innerHTML += "<h1 style='color: red;'>❌ Error: Root element not found</h1>";
  console.error("❌ No root element found!");
} else {
  console.log("✅ React Mounted Successfully!");
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
