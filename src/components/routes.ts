import { ContactIcon } from "../svg/ContactIcon";
import { HomeIcon } from "../svg/HomeIcon";
import { ReactIcon } from "../svg/ReactIcon";
import { WeatherIcon } from "../svg/WeatherIcon";
import { lazy } from "react";
import { ILanguageObject } from "../context/LanguageProvider";
import { AboutIcon } from "../svg/AboutIcon";
const Home = lazy(() => import("./Home"));
const React = lazy(() => import("./React"));
const Weather = lazy(() => import("./Weather"));
const About = lazy(() => import("./About"));

const routeNames: { [key: string]: ILanguageObject } = {
  home: { EN: "Home", PL: "Strona główna" },
  react: { EN: "React", PL: "React" },
  weather: { EN: "Weather", PL: "Pogoda" },
  about: { EN: "About", PL: "Info" },
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
  about: {
    name: routeNames.about,
    path: "/about",
    Component: About,
    icon: AboutIcon,
  },
};
