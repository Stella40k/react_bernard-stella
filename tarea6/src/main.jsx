import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./app.jsx";
import SimpleForm from "./pages/SimpleForm";
import MultipleCustomHook from "./pages/MultipleCustomHook";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
