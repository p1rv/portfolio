import { ContactIcon } from "../svg/ContactIcon";
import { HomeIcon } from "../svg/HomeIcon";
import { ReactIcon } from "../svg/ReactIcon";
import { WeatherIcon } from "../svg/WeatherIcon";
import { lazy } from "react";
import { ILanguageObject } from "../context/LanguageProvider";
const Home = lazy(() => import("./Home"));
const React = lazy(() => import("./React"));
const Weather = lazy(() => import("./Weather"));
const Contact = lazy(() => import("./Contact"));

const routeNames: { [key: string]: ILanguageObject } = {
  home: { EN: "Home", PL: "Strona główna" },
  react: { EN: "React", PL: "React" },
  weather: { EN: "Weather", PL: "Pogoda" },
  contact: { EN: "Contact", PL: "Kontakt" },
};

export const routes = {
  home: { name: routeNames.home, path: "/", Component: Home, icon: HomeIcon },
  react: { name: routeNames.react, path: "/react", Component: React, icon: ReactIcon },
  weather: {
    name: routeNames.weather,
    path: "/weather",
    Component: Weather,
    icon: WeatherIcon,
  },
  contact: {
    name: routeNames.contact,
    path: "/contact",
    Component: Contact,
    icon: ContactIcon,
  },
};
