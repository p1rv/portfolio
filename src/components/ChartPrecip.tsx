import { Bar, YAxis } from "recharts";

export const ChartPrecip: (precip: number[]) => JSX.Element = (precip) => {
  const chartMax = Math.ceil(precip.sort((a, b) => b - a)[0] / 10) * 10 * 2;
  const ticks = [];
  for (let i = 0; i < chartMax + 10; i += 10) {
    ticks.push(i);
  }

  return (
    <>
      <YAxis
        domain={[0, chartMax]}
        ticks={ticks}
        yAxisId="precip"
        orientation="right"
        label={{ value: "Precipitation", angle: 90, position: "insideRight", offset: 15 }}
      />
      <Bar
        dataKey="snow"
        fill="#00a8e8"
        className="fill-theme-1"
        yAxisId="precip"
        stackId="precip"
      />
      <Bar
        dataKey="rain"
        fill="#007ea7"
        className="fill-theme-2"
        yAxisId="precip"
        stackId="precip"
      />
      <Bar
        dataKey="showers"
        fill="#003459"
        className="fill-theme-3"
        yAxisId="precip"
        stackId="precip"
      />
    </>
  );
};
