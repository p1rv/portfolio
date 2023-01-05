import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { StarryBackgroundWrapper } from "./components/StarryBackgroundWrapper";
import { BrowserRouter } from "react-router-dom";

createRoot(document.querySelector("#root") as HTMLDivElement).render(
  <React.StrictMode>
    <StarryBackgroundWrapper>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StarryBackgroundWrapper>
  </React.StrictMode>
);
