import { useContext, useEffect, useState } from "react";
import { CartesianGrid, ComposedChart, XAxis } from "recharts";
import { IForecastState } from "../store";
import { ChartPrecip } from "./ChartPrecip";
import { ChartTemps } from "./ChartTemps";
import { ChartTooltip } from "./ChartTooltip";
import { ChartWinds } from "./ChartWinds";
import { ForecastContext } from "../context/ForecastProvider";
import { getDayName } from "../utils/forecast";
import { DefaultForecastChart } from "./DefaultForecastChart";

interface IChartWrapperProps {
  data: IForecastState;
  source: "OpenMeteo" | "StormGlass" | "VisualCrossing";
}

export const ChartWrapper: React.FC<IChartWrapperProps> = ({ data: { isLoading, error, data }, source }) => {
  const { show } = useContext(ForecastContext);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const recalculateScreenSize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
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

  const getDefaultContent = (loading: boolean, length: boolean, hasError: boolean) => {
    if (loading) {
      return (
        <div className="after:content-[' '] after:w-16 after:h-16 after:rounded-full after:border-8 after:border-theme-3 after:border-l-transparent after:block after:animate-spin after:transition-all after:duration-200"></div>
      );
    }
    if (hasError) {
      return <div>Error during data retrieval, please try again later...</div>;
    }
    if (!length) {
      return <div>Search for a location</div>;
    }
  };

  if (isLoading || data.length === 0 || error) {
    const content = getDefaultContent(!!isLoading, !!data.length, !!error);
    return (
      <DefaultForecastChart
        width={width}
        height={height}
      >
        {content}
      </DefaultForecastChart>
    );
  }
  return (
    <ComposedChart
      width={width * 0.64}
      height={height * 0.4}
      data={data}
      className="py-2"
    >
      <XAxis
        dataKey={"time"}
        interval={0}
        tickFormatter={formatDateTick}
        padding={show.includes("Precipitation") ? undefined : { right: 40, left: 40 }}
      />
      <CartesianGrid
        stroke="#ddd"
        horizontal={false}
      />
      {ChartTooltip()}
      {show.includes("Precipitation") &&
        ChartPrecip(
          data.map(({ precip_sum }) => precip_sum),
          source === "StormGlass"
        )}
      {show.includes("Temperature") &&
        ChartTemps(
          data.map(({ temp_min }) => temp_min),
          data.map(({ temp_max }) => temp_max)
        )}
      {show.includes("Wind") && ChartWinds(data.map(({ wind_gusts }) => wind_gusts))}
    </ComposedChart>
  );
};
