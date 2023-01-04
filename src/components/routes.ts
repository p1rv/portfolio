import { Contact } from "./Contact";
import { Home } from "./Home";
import { React } from "./React";
import { Weather } from "./Weather";

export const routes = {
  home: { name: "Home", path: "/", Component: Home },
  react: { name: "React", path: "/react", Component: React },
  weather: { name: "Weather", path: "/weather", Component: Weather },
  contact: { name: "Contact", path: "/contact", Component: Contact },
};
