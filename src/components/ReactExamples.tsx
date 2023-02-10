import "prismjs/themes/prism-tomorrow.min.css";
import { Route, Routes } from "react-router-dom";
import { ReactState } from "./ReactState";
import { ReactStartCRA } from "./ReactStartCRA";
import { ReactStartVite } from "./ReactStartVite";
import { reactRoutes } from "../utils/reactRoutes";

export const ReactExamples: React.FC = () => {
  const renderedRoutes = Object.values(reactRoutes).map(({ path, Component }) => (
    <Route
      key={path}
      path={path}
      element={<Component />}
    />
  ));

  return (
    <div className="flex-[3_3_0%] xl:flex-[2_2_0%] flex items-center justify-center">
      <Routes>{renderedRoutes}</Routes>
    </div>
  );
};
