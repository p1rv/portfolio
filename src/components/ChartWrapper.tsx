import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CartesianGrid, ComposedChart, XAxis } from "recharts";
import { IRootState } from "../store";
import { ChartPrecip } from "./ChartPrecip";
import { ChartTemps } from "./ChartTemps";
import { ChartTooltip } from "./ChartTooltip";
import { ChartWinds } from "./ChartWinds";
import { ForecastContext } from "./ForecastProvider";

const getDayName = (day: number) => {
  switch (day) {
    case 0:
      return "Sun";
    case 1:
      return "Mon";
    case 2:
      return "Tue";
    case 3:
      return "Wed";
    case 4:
      return "Thu";
    case 5:
      return "Fri";
    case 6:
      return "Sat";
  }
};

export const ChartWrapper: React.FC = () => {
  const { isLoading, error, data } = useSelector((state: IRootState) => state.openMeteo);
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-5/6 bg-theme-0 mt-4 rounded-[30px] text-theme-4 flex flex-col items-center justify-center py-[2vh]">
      <ComposedChart
        width={width * 0.64}
        height={height * 0.4}
        data={data}
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
        {show.includes("Precipitation") && ChartPrecip(data.map(({ precip_sum }) => precip_sum))}
        {show.includes("Temperature") &&
          ChartTemps(
            data.map(({ temp_min }) => temp_min),
            data.map(({ temp_max }) => temp_max)
          )}
        {show.includes("Wind") && ChartWinds(data.map(({ wind_gusts }) => wind_gusts))}
      </ComposedChart>
    </div>
  );
};
