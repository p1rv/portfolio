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
      />
      <Bar
        dataKey="snow"
        className="fill-theme-1"
        yAxisId="precip"
        stackId="precip"
      />
      <Bar
        dataKey="rain"
        className="fill-theme-2"
        yAxisId="precip"
        stackId="precip"
      />
      <Bar
        dataKey="showers"
        className="fill-theme-3"
        yAxisId="precip"
        stackId="precip"
      />
    </>
  );
};
