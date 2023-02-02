import { memo, useContext } from "react";
import { LanguageContext } from "../context/LanguageProvider";
import { IForecast } from "../store";
import { tooltipKeyDict } from "../utils/tooltipKeyDict";

interface ITooltipWindow {
  data?: IForecast;
}

export const TooltipWindow: React.FC<ITooltipWindow> = memo(({ data }) => {
  const { language } = useContext(LanguageContext);

  if (!data) return null;

  const { time, ...rest } = data;
  const renderedLines = Object.entries(rest).map(([key, value]) => {
    if (value !== 0 || tooltipKeyDict[key as keyof Omit<IForecast, "time">].unit !== " mm")
      return (
        <div
          className="w-full flex justify-between"
          key={`tooltip-${key}`}
        >
          <span>{tooltipKeyDict[key as keyof Omit<IForecast, "time">].label[language]}: </span>
          <span>
            {value}
            {tooltipKeyDict[key as keyof Omit<IForecast, "time">].unit}
          </span>
        </div>
      );
  });

  return (
    <div className="flex flex-col bg-theme-4/90 p-4 text-theme-0 rounded-xl [&>div]:m-1">
      <div className="text-theme-1 flex justify-end">{time}</div>
      {renderedLines}
    </div>
  );
});
