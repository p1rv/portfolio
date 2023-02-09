import { ContactIcon } from "./svg/ContactIcon";
import { HomeIcon } from "./svg/HomeIcon";
import { ReactIcon } from "./svg/ReactIcon";
import { WeatherIcon } from "./svg/WeatherIcon";
import { lazy } from "react";
import { ILanguageObject } from "./context/LanguageProvider";
import { AboutIcon } from "./svg/AboutIcon";
const Home = lazy(() => import("./components/Home"));
const React = lazy(() => import("./components/React"));
const Weather = lazy(() => import("./components/Weather"));
const About = lazy(() => import("./components/About"));

const routeNames: { [key: string]: ILanguageObject } = {
  home: { EN: "Home", PL: "Strona główna" },
  react: { EN: "React", PL: "React" },
  weather: { EN: "Weather", PL: "Pogoda" },
  about: { EN: "About", PL: "Info" },
};

export const routes = {
  home: { name: routeNames.home, path: "/", Component: Home, icon: HomeIcon, extendPath: false },
  react: { name: routeNames.react, path: "/react", extendPath: true, Component: React, icon: ReactIcon },
  weather: {
    name: routeNames.weather,
    path: "/weather",
    Component: Weather,
    icon: WeatherIcon,
    extendPath: false,
  },
  about: {
    name: routeNames.about,
    path: "/about",
    Component: About,
    icon: AboutIcon,
    extendPath: false,
  },
};
