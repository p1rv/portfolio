import { Suspense, memo, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { LanguageProvider } from "./context/LanguageProvider";
import { Breadcrumb } from "./components/Breadcrumb";
import { Header } from "./components/Header";
import { LoadingFallback } from "./components/LoadingFallback";
import { LanguageSelector } from "./components/LanguageSelector";
import { useScrollHistory } from "./hooks/useScrollHistory";

const App: React.FC = memo(() => {
  const assignedRoutes = Object.values(routes).map(({ path, Component, extendPath }) => (
    <Route
      key={path}
      path={extendPath ? `${path}/*` : path}
      element={<Component />}
    />
  ));

  const divRef = useRef<HTMLDivElement | null>(null);

  const { direction } = useScrollHistory(divRef);

  return (
    <div
      className="app text-theme-0 h-screen w-screen flex flex-col items-center overflow-x-auto relative"
      ref={divRef}
    >
      <LanguageProvider>
        <LanguageSelector />
        <Header scrollDirection={direction} />
        <Breadcrumb />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>{assignedRoutes}</Routes>
        </Suspense>
      </LanguageProvider>
    </div>
  );
});

export default App;
