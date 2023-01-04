import { useEffect, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { Breadcrumb } from "./components/Breadcrumb";
import { Header } from "./components/Header";
import { routes } from "./components/routes";

function App() {
  const assignedRoutes = Object.values(routes).map(({ path, Component }) => (
    <Route
      key={path}
      path={path}
      element={<Component />}
    />
  ));

  return (
    <div className="app text-theme-0 h-screen w-screen flex flex-col items-center">
      <Header />
      <Breadcrumb />
      <Routes>{assignedRoutes}</Routes>
    </div>
  );
}

export default App;
