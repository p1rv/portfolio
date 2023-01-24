import { lazy, Suspense, useContext, useEffect, useState } from "react";
import { CartesianGrid, Tooltip, XAxis } from "recharts";
const LazyChart = lazy(() => import("./LazyChart"));
import { IForecastState } from "../store";
import { ChartPrecip } from "./ChartPrecip";
import { ChartTemps } from "./ChartTemps";
import { ChartWinds } from "./ChartWinds";
import { ForecastContext } from "../context/ForecastProvider";
import { getDayName } from "../utils/forecast";
import { tooltipFormatter } from "../utils/formatChartTooltip";
import { LoadingFallback } from "./LoadingFallback";
import { ILanguageObject, LanguageContext } from "../context/LanguageProvider";

interface IChartWrapperProps {
  data: IForecastState;
  source: "OpenMeteo" | "StormGlass" | "VisualCrossing";
}

const errorMessage: ILanguageObject = {
  EN: "Error during data retrieval, please try again later...",
  PL: "Błąd podczas pobierania danych, spróbuj ponownie...",
};

export const ChartWrapper: React.FC<IChartWrapperProps> = ({ data: { isLoading, error, data }, source }) => {
  const { show } = useContext(ForecastContext);
  const [width, setWidth] = useState(window.innerWidth * 0.64);
  const [height, setHeight] = useState(window.innerHeight * 0.4);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const recalculateScreenSize = () => {
      setWidth(window.innerWidth * 0.64);
      setHeight(window.innerHeight * 0.4);
    };
    window.addEventListener("resize", recalculateScreenSize);
    return () => window.removeEventListener("resize", recalculateScreenSize);
  }, []);

  const formatDateTick = (day: string) => {
    const fullDate = new Date(day);
    try {
      return getDayName(fullDate.getDay()) + ", " + fullDate.getDate() + "." + (fullDate.getMonth() + 1).toString().padStart(2, "0");
    } catch {
      return "auto";
    }
  };

  const getDefaultContent = () => {
    if (isLoading) {
      return (
        <div className="after:content-[' '] after:w-16 after:h-16 after:rounded-full after:border-8 after:border-theme-3 after:border-l-transparent after:block after:animate-spin after:transition-all after:duration-200" />
      );
    }
    if (error) {
      return <div>{errorMessage[language]}</div>;
    }
  };

  if (isLoading || data.length === 0 || error) {
    const content = getDefaultContent();
    return (
      <div
        className="flex justify-center items-center rounded-[30px]"
        style={{
          width,
          height,
        }}
      >
        {content}
      </div>
    );
  }
  return (
    <Suspense
      fallback={
        <LoadingFallback
          weather
          width={width}
          height={height}
        />
      }
    >
      <LazyChart
        width={width}
        height={height}
        data={data}
        className="py-2"
      >
        <XAxis
          dataKey={"time"}
          interval={0}
          tickFormatter={formatDateTick}
          padding={show.includes("precip") ? undefined : { right: 40, left: 40 }}
        />
        <CartesianGrid
          stroke="#ddd"
          horizontal={false}
        />
        <Tooltip
          wrapperClassName=""
          labelFormatter={(day) => "Date: " + day}
          separator=": "
          formatter={(i, d) => tooltipFormatter(i, d)}
        />
        {show.includes("precip") &&
          ChartPrecip(
            language,
            data.map(({ precip_sum }) => precip_sum),
            source === "StormGlass"
          )}
        {show.includes("temp") &&
          ChartTemps(
            language,
            data.map(({ temp_min }) => temp_min),
            data.map(({ temp_max }) => temp_max)
          )}
        {show.includes("wind") &&
          ChartWinds(
            language,
            data.map(({ wind_gusts }) => wind_gusts)
          )}
      </LazyChart>
    </Suspense>
  );
};
