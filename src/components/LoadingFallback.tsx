import classNames from "classnames";
import logo from "../svg/fav.svg";

interface ILoadingFallbackProps {
  className?: string;
  weather?: boolean;
}

export const LoadingFallback: React.FC<ILoadingFallbackProps> = ({ className, weather }) => {
  const classes = classNames(
    "flex",
    "items-center",
    "justify-center",
    { "backdrop-blur-[4px] absolute inset-0": !className && !weather },
    className
  );
  if (weather) {
    return (
      <div
        id="weather-fallback"
        className="w-full mt-4 rounded-[30px] h-[450px]"
      />
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
