import { useContext } from "react";
import { useSelector } from "react-redux";
import { ILanguageObject, LanguageContext } from "../context/LanguageProvider";
import { IForecast, IRootState } from "../store";
import { ChartWrapper } from "./ChartWrapper";

const sourceMessage: ILanguageObject = {
  PL: "źródła: wszyscy dostępni dostawcy",
  EN: "sources: all available providers",
};

const getAvg = (key: string, values: IForecast[keyof IForecast][]) => {
  if (key === "time" || key === "code") return values[0];
  return (
    Math.round(
      ((values as IForecast[keyof Omit<IForecast, "time" | "code">][]).reduce((acc: number, current: number) => acc + current) * 10) /
        values.length
    ) / 10
  );
};

export const CollapsedWrapper: React.FC = () => {
  const { openMeteo, visualCrossing, weatherBit, stormGlass } = useSelector((state: IRootState) => state);
  const sourcesList = [openMeteo, visualCrossing, weatherBit, stormGlass]
    .filter(({ error, data }) => !error && data.length > 0)
    .sort((a, b) => b.data.length - a.data.length);
  const { language } = useContext(LanguageContext);

  const parsedSources = sourcesList
    .reduce(
      (acc, { data }) =>
        acc.map((day, dayIndex) => {
          if (!data[dayIndex]) return day;
          return Object.fromEntries(
            Object.entries(data[dayIndex]).map(([key, value]) => {
              return [key, [...(day[key as keyof IForecast] || []), value]];
            })
          ) as { [key in keyof IForecast]: any[] };
        }),
      new Array(sourcesList[0].data.length).fill(null).map(() => ({} as { [key in keyof IForecast]: any[] }))
    )
    .map((day) => Object.fromEntries(Object.entries(day).map(([key, values]) => [key, getAvg(key, values)])) as unknown as IForecast);

  return (
    <div className="w-full bg-theme-0 mt-4 rounded-[30px] text-theme-4 py-[1vh] sm:rounded-[20px]">
      <ChartWrapper
        data={{
          data: parsedSources,
          isLoading: sourcesList.some(({ isLoading }) => isLoading),
          error: sourcesList.some(({ error }) => error) ? sourcesList.find(({ error }) => error)!.error : null,
        }}
        source="collapsed"
      />
      <div className="w-full text-right pr-4">
        <span className="text-xs">{sourceMessage[language]}</span>
      </div>
    </div>
  );
};
