import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./components/routes";
import { LanguageProvider } from "./context/LanguageProvider";
import { Breadcrumb } from "./components/Breadcrumb";
import { Header } from "./components/Header";

function App() {
  const assignedRoutes = Object.values(routes).map(({ path, Component }) => (
    <Route
      key={path}
      path={path}
      element={
        <Suspense fallback={<div>Loading...</div>}>
          <Component />
        </Suspense>
      }
    />
  ));

  return (
    <div className="app text-theme-0 h-screen w-screen flex flex-col items-center backdrop-blur-sm">
      <LanguageProvider>
        <Header />
        <Breadcrumb />
        <Routes>{assignedRoutes}</Routes>
      </LanguageProvider>
    </div>
  );
}

export default App;
