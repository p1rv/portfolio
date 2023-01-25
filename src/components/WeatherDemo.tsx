import classNames from "classnames";
import { useContext } from "react";
import { MouseOverContext } from "./MouseOverContextProvider";
import { routes } from "./routes";
import { useRouter } from "../hooks/useRouter";
import { SearchIcon } from "../svg/SearchIcon";
import { WeatherChartSVG } from "../svg/WeatherChart";

export const WeatherDemo: React.FC = () => {
  const { navigate } = useRouter();
  const { mouseOver } = useContext(MouseOverContext);
  const mainClasses = classNames(
    "animate-[slideIn3_2.5s]",
    "ease-slide-in-3",
    "h-96 sm:h-max",
    "w-[45vw] sm:w-[80vw]",
    "absolute",
    "top-32 sm:top-[16rem]",
    "right-0 sm:right-[-60vw] sm:hover:right-0 sm:transition-all sm:duration-200",
    "bg-nightsky",
    "rounded-xl",
    "flex",
    "flex-col",
    "items-center",
    "text-gray-700",
    "shadow-black-24-1/3",
    "group",
    "transition-opacity",
    { "opacity-40": mouseOver }
  );

  return (
    <div className={mainClasses}>
      <div
        className="absolute inset-0 bg-theme-0 rounded-lg opacity-0 cursor-pointer group-hover:opacity-10 transition-all"
        onClick={() => navigate(routes.weather.path)}
      />
      <div className="w-full flex flex-row items-center justify-center mt-4 mb-2">
        <div className="bg-theme-0/[7%] w-1/2 flex items-center justify-start py-2 px-4 rounded-tl-full rounded-bl-full text-gray-300">
          Search...
        </div>
        <div className="bg-theme-3 p-2 rounded-r-full cursor-pointer group hover:bg-theme-2 transition-colors duration-200 flex items-center">
          <SearchIcon className="w-6 h-6" />
        </div>
      </div>
      <div className="w-4/5 h-2/3 sm:h-[40%] bg-gray-100 rounded-lg my-4">
        <div className="p-2 text-sm w-full">New York, NY - 2PM EDT</div>
        <div className="w-[96%] m-[2%] sm:m-auto h-[60%] sm:h-max rounded-lg">
          <WeatherChartSVG />
        </div>
        <div className="w-full text-right text-xs px-2">source: one.weather</div>
      </div>
    </div>
  );
};
