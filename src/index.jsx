import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

console.log("🔄 React is Attempting to Mount!");

const rootElement = document.getElementById("root");

if (!rootElement) {
  document.body.innerHTML += "<h1 style='color: red;'>❌ Error: Root element not found</h1>";
  console.error("❌ No root element found!");
} else {
  console.log("✅ React Mounted Successfully!");
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<React.StrictMode><App /></React.StrictMode>);
  } catch (error) {
    console.error("❌ React Mounting Failed!", error);
    document.body.innerHTML += `<h1 style='color: red;'>❌ React Mounting Failed!</h1>`;
  }
}
