import classNames from "classnames";
import { useContext } from "react";
import { ILanguageObject, LanguageContext } from "../context/LanguageProvider";
import logo from "../svg/fav.svg";
import { WeatherChartSVG } from "../svg/WeatherChart";

interface ILoadingFallbackProps {
  className?: string;
  weather?: boolean;
  width?: number;
  height?: number;
}

const loadingMessage: ILanguageObject = {
  EN: "Loading one incredibly slow charting library...",
  PL: "Trwa ładowanie niesamowicie powolnej biblioteki rysującej wykresy...",
};

export const LoadingFallback: React.FC<ILoadingFallbackProps> = ({ className, weather, width, height }) => {
  const { language } = useContext(LanguageContext);
  const classes = classNames(
    "flex",
    "items-center",
    "justify-center",
    {
      "absolute inset-0": !className && !weather,
      "relative p-4 rounded-[30px] overflow-hidden bg-white/50": weather,
    },
    className
  );
  if (weather) {
    return (
      <div
        className={classes}
        style={{ width, height }}
      >
        {/* <p>{loadingMessage[language]}</p> */}

        <div
          id="weather-fallback"
          className="p-6"
        />
        <WeatherChartSVG mono />
      </div>
    );
  }
  return (
    <div className={classes}>
      <img
        src={logo}
        id="fallback-icon"
        alt="Logo"
      />
    </div>
  );
};