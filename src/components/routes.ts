import { ContactIcon } from "../svg/ContactIcon";
import { HomeIcon } from "../svg/HomeIcon";
import { ReactIcon } from "../svg/ReactIcon";
import { WeatherIcon } from "../svg/WeatherIcon";
import { Contact } from "./Contact";
import { Home } from "./Home";
import { React } from "./React";
import { Weather } from "./Weather";

export const routes = {
  home: { name: "Home", path: "/", Component: Home, icon: HomeIcon },
  react: { name: "React", path: "/react", Component: React, icon: ReactIcon },
  weather: {
    name: "Weather",
    path: "/weather",
    Component: Weather,
    icon: WeatherIcon,
  },
  contact: {
    name: "Contact",
    path: "/contact",
    Component: Contact,
    icon: ContactIcon,
  },
};
