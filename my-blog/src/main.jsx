import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/layout.css";
import "./index.css";
import App from "./App.jsx";
import { AppProviders } from "./providers/AppProviders.jsx";  // Add this line

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProviders> 
      <App />
    </AppProviders>
  </StrictMode>
);
