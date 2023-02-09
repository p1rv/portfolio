import "prismjs/themes/prism-tomorrow.min.css";
import { Route, Routes } from "react-router-dom";
import { ReactFirstApp } from "./ReactFirstApp";
import { ReactStartCRA } from "./ReactStartCRA";
import { ReactStartVite } from "./ReactStartVite";

export const ReactExamples: React.FC = () => {
  return (
    <div className="flex-[2_2_0%] flex items-center justify-center">
      <Routes>
        <Route
          path={"build-vite"}
          element={<ReactStartVite />}
        />
        <Route
          path={"build-cra"}
          element={<ReactStartCRA />}
        />
        <Route
          path={"first-app"}
          element={<ReactFirstApp />}
        />
      </Routes>
    </div>
  );
};
