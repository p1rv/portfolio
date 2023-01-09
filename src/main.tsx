import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { StarryBackgroundWrapper } from "./components/StarryBackgroundWrapper";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

createRoot(document.querySelector("#root") as HTMLDivElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <StarryBackgroundWrapper>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StarryBackgroundWrapper>
    </Provider>
  </React.StrictMode>
);
