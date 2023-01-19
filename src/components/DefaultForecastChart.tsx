import { PropsWithChildren } from "react";
import { CartesianGrid, ComposedChart, XAxis } from "recharts";
import { ChartPrecip } from "./ChartPrecip";
import { ChartTemps } from "./ChartTemps";
import { defaultData } from "./defaultForecastData";

interface IDefaultForecastChartProps {
  width: number;
  height: number;
}

export const DefaultForecastChart: React.FC<PropsWithChildren<IDefaultForecastChartProps>> = ({ width, height, children }) => {
  return (
    <div className="w-5/6 bg-theme-0 mt-4 rounded-[30px] text-theme-4 flex flex-col items-center justify-center py-[2vh] relative">
      <ComposedChart
        width={width * 0.64}
        height={height * 0.4}
        data={defaultData}
      >
        <XAxis
          dataKey={"time"}
          interval={0}
        />
        <CartesianGrid
          stroke="#ddd"
          horizontal={false}
        />
        {ChartPrecip(defaultData.map(({ precip_sum }) => precip_sum))}
        {ChartTemps(
          defaultData.map(({ temp_min }) => temp_min),
          defaultData.map(({ temp_max }) => temp_max)
        )}
      </ComposedChart>
      <div className="bg-theme-0/40 absolute inset-0 flex items-center justify-center rounded-[30px]">{children}</div>
    </div>
  );
};
