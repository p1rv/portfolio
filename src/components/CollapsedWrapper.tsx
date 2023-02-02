import { useContext } from "react";
import { useSelector } from "react-redux";
import { ILanguageObject, LanguageContext } from "../context/LanguageProvider";
import { IForecast, IRootState } from "../store";
import { ChartWrapper } from "./ChartWrapper";

const sourceMessage: ILanguageObject = {
  PL: "źródła: wszyscy dostępni dostawcy",
  EN: "sources: all available providers",
};

export const CollapsedWrapper: React.FC = () => {
  const { openMeteo, visualCrossing, weatherBit, stormGlass } = useSelector((state: IRootState) => state);
  const sourcesList = [openMeteo, visualCrossing, weatherBit, stormGlass]
    .filter(({ error, data }) => !error && data.length > 0)
    .sort((a, b) => b.data.length - a.data.length);
  const { language } = useContext(LanguageContext);

  const parsedSources = sourcesList.reduce(
    (acc, { data }) =>
      acc.map((day, dayIndex) => {
        if (!data[dayIndex]) return day;
        return Object.fromEntries(
          Object.entries(data[dayIndex]).map(([key, value]) => {
            if (key === "time") return [key, value];
            return [key, Math.round(((day[key as keyof Omit<IForecast, "time">] || 0) + value / sourcesList.length) * 10) / 10];
          })
        ) as IForecast;
      }),
    new Array(sourcesList[0].data.length).fill(null).map(() => ({} as IForecast))
  );

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
