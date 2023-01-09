import classNames from "classnames";
import { useContext } from "react";
import { MouseOverContext } from "./MouseOverContextProvider";
import { routes } from "./routes";
import { useRouter } from "./useRouter";

export const WeatherDemo: React.FC = () => {
  const { navigate } = useRouter();
  const { mouseOver } = useContext(MouseOverContext);
  const mainClasses = classNames(
    "animate-[slideIn3_2.5s]",
    "ease-slide-in-3",
    "h-96",
    "w-[45vw]",
    "absolute",
    "top-32",
    "right-0",
    "bg-theme-0",
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
        className="absolute inset-0 bg-theme-4 rounded-lg opacity-0 cursor-pointer group-hover:opacity-30 transition-all"
        onClick={() => navigate(routes.weather.path)}
      />
      <div className="w-full flex flex-row items-center justify-center mt-4 mb-2">
        <div className="flex items-center justify-center bg-gray-200 py-2 px-4 rounded-tl-full rounded-bl-full border-[1px] border-r-0 border-gray-400">
          S
        </div>
        <div className="flex items-center justify-start py-2 px-4 rounded-tr-full rounded-br-full border-[1px] w-1/2 border-gray-400 text-gray-300">
          Search...
        </div>
      </div>
      <div className="w-4/5 h-2/3 bg-gray-100 rounded-lg my-4">
        <div className="p-2 text-sm w-full">New York, NY - 2PM EDT</div>
        <div className="w-[96%] m-[2%] h-2/3 bg-white rounded-lg"></div>
        <div className="w-full text-right text-xs px-2">
          source: one.weather
        </div>
      </div>
    </div>
  );
};
