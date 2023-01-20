import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Breadcrumb } from "./components/Breadcrumb";
import { Header } from "./components/Header";
import { routes } from "./components/routes";
import { LanguageProvider } from "./context/LanguageProvider";

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
    <LanguageProvider>
      <div className="app text-theme-0 h-screen w-screen flex flex-col items-center backdrop-blur-sm">
        <Header />
        <Breadcrumb />
        <Routes>{assignedRoutes}</Routes>
      </div>
    </LanguageProvider>
  );
}

export default App;
