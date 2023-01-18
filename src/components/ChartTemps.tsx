import { useContext } from "react";
import { Line, ReferenceLine, YAxis } from "recharts";

export const ChartTemps: (min: number[], max: number[]) => JSX.Element = (min, max) => {
  const [chartMin, chartMax] = [Math.floor(min.sort((a, b) => a - b)[0] / 2) * 2 - 2, Math.ceil(max.sort((a, b) => b - a)[0] / 2) * 2 + 2];
  const ticks = [];
  for (let i = chartMin; i < chartMax + 2; i += 2) {
    ticks.push(i);
  }
  return (
    <>
      <YAxis
        domain={[chartMin, chartMax]}
        ticks={ticks}
        yAxisId="temp"
        label={{ value: "Temp", angle: -90, position: "insideLeft", offset: 20 }}
      />
      <Line
        type="monotone"
        dataKey={"temp_max"}
        stroke="#ff7070"
        strokeWidth={2.5}
        dot={false}
        yAxisId="temp"
      />
      <Line
        type="monotone"
        dataKey={"temp_min"}
        stroke="#90b0ff"
        strokeWidth={2.5}
        dot={false}
        yAxisId="temp"
      />
      <ReferenceLine
        y={0}
        stroke="red"
        strokeWidth={0.4}
        yAxisId="temp"
      />
    </>
  );
};
