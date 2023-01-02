import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { StarryBackgroundWrapper } from "./StarryBackgroundWrapper";

createRoot(document.querySelector("#root") as HTMLDivElement).render(
  <React.StrictMode>
    <StarryBackgroundWrapper>
      <App />
    </StarryBackgroundWrapper>
  </React.StrictMode>
);
