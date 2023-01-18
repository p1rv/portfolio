import { useSelector } from "react-redux";
import { Bar, CartesianGrid, ComposedChart, Line, ReferenceLine, Tooltip, XAxis, YAxis } from "recharts";
import { IRootState } from "../store";
import { ChartPrecip } from "./ChartPrecip";
import { ChartTemps } from "./ChartTemps";
import { ChartTooltip } from "./ChartTooltip";
import { ChartWinds } from "./ChartWinds";

export const ChartWrapper: React.FC = () => {
  const { isLoading, error, data } = useSelector((state: IRootState) => state.openMeteo);

  const formatDateTick = (day: string) => {
    const fullDate = new Date(day);
    try {
      return fullDate.getDate() + "." + (fullDate.getMonth() + 1).toString().padStart(2, "0");
    } catch {
      return "auto";
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-5/6 bg-theme-0 h-[400px] mt-4 rounded-[30px] text-theme-4 flex flex-col items-center">
      <ComposedChart
        width={800}
        height={400}
        data={data}
      >
        <XAxis
          dataKey={"time"}
          interval={0}
          tickFormatter={formatDateTick}
        />
        <CartesianGrid
          stroke="#ddd"
          horizontal={false}
        />
        {ChartTooltip()}
        {ChartPrecip(data.map(({ precip_sum }) => precip_sum))}
        {ChartTemps(
          data.map(({ temp_min }) => temp_min),
          data.map(({ temp_max }) => temp_max)
        )}
        {/* {ChartWinds(data.map(({ wind_gusts }) => wind_gusts))} */}
      </ComposedChart>
    </div>
  );
};
