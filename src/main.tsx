import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/styles/globals.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
