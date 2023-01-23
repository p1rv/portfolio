import classNames from "classnames";
import logo from "../svg/fav.svg";

interface ILoadingFallbackProps {
  className?: string;
  weather?: boolean;
  width?: number;
  height?: number;
}

export const LoadingFallback: React.FC<ILoadingFallbackProps> = ({ className, weather, width, height }) => {
  const classes = classNames(
    "flex",
    "items-center",
    "justify-center",
    {
      "absolute inset-0": !className && !weather,
      "relative mt-4 rounded-[30px] overflow-hidden": weather,
    },
    className
  );
  if (weather) {
    return (
      <div
        className={classes}
        style={{ width, height }}
      >
        <p>Loading one incredibly slow charting library...</p>
        <div id="weather-fallback" />
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
