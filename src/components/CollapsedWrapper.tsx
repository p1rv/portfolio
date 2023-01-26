import { useContext } from "react";
import { useSelector } from "react-redux";
import { ILanguageObject, LanguageContext } from "../context/LanguageProvider";
import { IForecast, IRootState } from "../store";
import { ChartWrapper } from "./ChartWrapper";

const getAvg = (numbers: number[]) => {
  const sum = numbers.reduce((acc, value) => acc + value);
  return Math.round((10 * sum) / numbers.length) / 10;
};

const sourceMessage: ILanguageObject = {
  PL: "źródła: wszyscy dostępni dostawcy",
  EN: "sources: all available providers",
};

export const CollapsedWrapper: React.FC = () => {
  const { openMeteo, visualCrossing, weatherBit, stormGlass } = useSelector((state: IRootState) => state);
  const sourcesList = [openMeteo, visualCrossing, weatherBit, stormGlass].sort(
    ({ data: dataA }, { data: dataB }) => dataB.length - dataA.length
  );
  const { language } = useContext(LanguageContext);

  const parsedSources = sourcesList
    .map((source) => source.data.map((day, i) => Object.fromEntries(Object.entries(day).map(([key, value]) => [key, [value]]))))
    .reduce((acc, currentSource) => {
      const addedSource = acc.map((day, dayIndex) =>
        Object.fromEntries(
          Object.entries(day).map(([key, value]) => {
            return currentSource[dayIndex] ? [key, [...value, ...currentSource[dayIndex][key]]] : [key, value];
          })
        )
      );
      return addedSource;
    })
    .map((day) =>
      Object.fromEntries(Object.entries(day).map(([key, value]) => (key === "time" ? [key, value[0]] : [key, getAvg(value)])))
    ) as IForecast[];

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
