import { ReactState } from "../components/ReactState";
import { ReactStartCRA } from "../components/ReactStartCRA";
import { ReactStartVite } from "../components/ReactStartVite";
import { ILanguageObject } from "../context/LanguageProvider";
import { ReactObjectState } from "../components/ReactObjectState";
import { ReactArrayState } from "../components/ReactArrayState";
import { ReactBYB } from "../components/ReactBYB";

const routeNames: { [key: string]: ILanguageObject } = {
  byb: { EN: "Before you begin...", PL: "Zanim przejdziesz dalej..." },
  vite: { EN: "Vite", PL: "Vite" },
  cra: { EN: "create-react-app", PL: "create-react-app" },
  state: { EN: "State overview", PL: "Ogólny schemat działania stanu" },
  stateObject: { EN: "Object as state", PL: "Stan będący obiektem" },
  stateArray: { EN: "Array as state", PL: "Stan będący tablicą" },
};

export const reactRoutes = {
  byb: { name: routeNames.byb, path: "", Component: ReactBYB, parent: "" },
  vite: { name: routeNames.vite, path: "environment-vite", Component: ReactStartVite, parent: "env" },
  cra: { name: routeNames.cra, path: "environment-cra", Component: ReactStartCRA, parent: "env" },
  state: { name: routeNames.state, path: "state-overview", Component: ReactState, parent: "state" },
  stateObject: {
    name: routeNames.stateObject,
    path: "state-object",
    Component: ReactObjectState,
    parent: "state",
  },
  stateArray: {
    name: routeNames.stateArray,
    path: "state-array",
    Component: ReactArrayState,
    parent: "state",
  },
};
