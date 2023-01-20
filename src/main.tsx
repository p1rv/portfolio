import "./index.css";
import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { StarryBackgroundWrapper } from "./components/StarryBackgroundWrapper";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { LoadingFallback } from "./components/LoadingFallback";
const App = lazy(() => import("./App"));

createRoot(document.querySelector("#root") as HTMLDivElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <StarryBackgroundWrapper>
        <BrowserRouter>
          <Suspense fallback={<LoadingFallback />}>
            <App />
          </Suspense>
        </BrowserRouter>
      </StarryBackgroundWrapper>
    </Provider>
  </React.StrictMode>
);
