import { Bar, YAxis } from "recharts";

export const ChartPrecip: (precip: number[], preferExploded: boolean) => JSX.Element = (precip, preferExploded = true) => {
  const chartMax = Math.ceil(precip.sort((a, b) => b - a)[0] / 10) * 10 * 2;
  const ticks = [];
  for (let i = 0; i < chartMax + 10; i += 10) {
    ticks.push(i);
  }

  const bars = preferExploded ? (
    <>
      <Bar
        dataKey="snow"
        fill="#00a8e8"
        yAxisId="precip"
        stackId="precip"
      />
      <Bar
        dataKey="rain"
        fill="#007ea7"
        yAxisId="precip"
        stackId="precip"
      />
      <Bar
        dataKey="showers"
        fill="#003459"
        yAxisId="precip"
        stackId="precip"
      />
    </>
  ) : (
    <Bar
      dataKey="precip_sum"
      fill="#007ea7"
      yAxisId="precip"
      stackId="precip"
    />
  );

  return (
    <>
      <YAxis
        domain={[0, chartMax]}
        ticks={ticks}
        yAxisId="precip"
        orientation="right"
        label={{ value: "Precipitation [mm]", angle: 90, position: "insideRight", offset: 15 }}
      />
      {bars}
    </>
  );
};
