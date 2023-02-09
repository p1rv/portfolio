import classNames from "classnames";
import { useRef } from "react";
import { routes } from "../routes";
import { useRouter } from "../hooks/useRouter";
import { SearchIcon } from "../svg/SearchIcon";
import { WeatherChartSVG } from "../svg/WeatherChart";
import { useIsIntersecting } from "../hooks/useIsIntersecting";

export const WeatherDemo: React.FC = () => {
  const { navigate } = useRouter();

  const divRef = useRef<HTMLDivElement | null>(null);

  const { isIntersecting, wasIntersected } = useIsIntersecting(divRef, 0.35);

  const mainClasses = classNames(
    "ease-in",
    "h-max",
    "w-[45vw] md:w-[80vw]",
    "absolute",
    "top-32 md:top-[18rem]",
    "right-0 md:right-[-50vw]",
    "bg-nightsky",
    "rounded-xl",
    "flex",
    "flex-col",
    "items-center",
    "text-gray-700",
    "shadow-black-24-1/3",
    "hover:shadow-black-24-1/2",
    "group",
    "transition-opacity",
    "z-10",
    {
      "md:animate-[weatherPeek_3s]": isIntersecting,
      "animate-[slideInRight_1s]": !wasIntersected && sessionStorage.getItem("home") !== "loaded",
    }
  );

  const overlayClasses = classNames(
    "absolute",
    "inset-0",
    "bg-theme-0",
    "rounded-xl",
    "opacity-0",
    "cursor-pointer",
    "group-hover:opacity-10",
    "transition-all",
    { "md:animate-[topLeftClick_3s_ease]": isIntersecting }
  );

  return (
    <div
      className={mainClasses}
      ref={divRef}
    >
      <div
        className={overlayClasses}
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
      <div className="w-4/5 h-2/3 md:h-[40%] bg-gray-100 rounded-lg my-4">
        <div className="p-2 text-sm w-full">New York, NY - 2PM EDT</div>
        <div className="w-[96%] m-[2%] md:m-auto h-[60%] md:h-max rounded-lg">
          <WeatherChartSVG />
        </div>
        <div className="w-full text-right text-xs px-2 pb-2">source: one.weather</div>
      </div>
    </div>
  );
};
