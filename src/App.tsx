import { Suspense, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./components/routes";
import { LanguageProvider } from "./context/LanguageProvider";
import { Breadcrumb } from "./components/Breadcrumb";
import { Header } from "./components/Header";
import { LoadingFallback } from "./components/LoadingFallback";

const App: React.FC = memo(() => {
  const assignedRoutes = Object.values(routes).map(({ path, Component }) => (
    <Route
      key={path}
      path={path}
      element={<Component />}
    />
  ));
  console.log("app rerender");

  return (
    <div className="app text-theme-0 h-screen w-screen flex flex-col items-center backdrop-blur-sm">
      <LanguageProvider>
        <Header />
        <Breadcrumb />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>{assignedRoutes}</Routes>
        </Suspense>
      </LanguageProvider>
    </div>
  );
});

export default App;
