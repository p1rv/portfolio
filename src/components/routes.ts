import { ContactIcon } from "../svg/ContactIcon";
import { HomeIcon } from "../svg/HomeIcon";
import { ReactIcon } from "../svg/ReactIcon";
import { WeatherIcon } from "../svg/WeatherIcon";
import { lazy } from "react";
const Home = lazy(() => import("./Home"));
const React = lazy(() => import("./React"));
const Weather = lazy(() => import("./Weather"));
const Contact = lazy(() => import("./Contact"));

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
