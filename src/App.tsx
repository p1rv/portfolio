import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./utils/routes";
import { LanguageProvider } from "./context/LanguageProvider";
import { Breadcrumb } from "./components/Breadcrumb";
import { Header } from "./components/Header";
import { LoadingFallback } from "./components/LoadingFallback";
import { LanguageSelector } from "./components/LanguageSelector";
import { Footer } from "./components/Footer";

const App: React.FC = () => {
  const assignedRoutes = Object.values(routes).map(({ path, Component, extendPath }) => (
    <Route
      key={path}
      path={extendPath ? `${path}/*` : path}
      element={<Component />}
    />
  ));

  return (
    <div className="app text-theme-0 h-screen w-screen flex flex-col items-center justify-between overflow-x-hidden relative">
      <LanguageProvider>
        <div className="flex flex-col items-center w-screen">
          <LanguageSelector />
          <Header />
          <Breadcrumb />
          <Suspense fallback={<LoadingFallback />}>
            <Routes>{assignedRoutes}</Routes>
          </Suspense>
        </div>
        <Footer />
      </LanguageProvider>
    </div>
  );
};

export default App;
