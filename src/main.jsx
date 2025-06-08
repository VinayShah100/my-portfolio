import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom"; // 👈 change this line

createRoot(document.getElementById("root")).render(
  <HashRouter>  {/* 👈 wrap with HashRouter instead of BrowserRouter */}
    <StrictMode>
      <App />
    </StrictMode>
  </HashRouter>
);
