import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { StarryBackgroundWrapper } from "./components/StarryBackgroundWrapper";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { LoadingFallback } from "./components/LoadingFallback";
import App from "./App";

createRoot(document.querySelector("#root") as HTMLDivElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <StarryBackgroundWrapper>
        <HashRouter>
          <App />
        </HashRouter>
      </StarryBackgroundWrapper>
    </Provider>
  </React.StrictMode>
);
