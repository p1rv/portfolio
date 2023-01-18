import { Line, YAxis } from "recharts";

export const ChartWinds: (gusts: number[]) => JSX.Element = (gusts) => {
  const chartMax = Math.ceil(gusts.sort((a, b) => b - a)[0] / 5) * 5 + 5;
  const ticks = [];
  for (let i = 0; i < chartMax + 10; i += 10) {
    ticks.push(i);
  }

  return (
    <>
      <YAxis
        domain={[0, chartMax]}
        ticks={ticks}
        yAxisId="wind"
        label={{ value: "Wind", angle: -90, position: "insideLeft", offset: 15 }}
      />
      <Line
        type="monotone"
        dataKey={"wind_speed"}
        stroke="#707070"
        strokeWidth={2.5}
        dot={false}
        yAxisId="wind"
      />
      <Line
        type="monotone"
        dataKey={"wind_gusts"}
        stroke="#303030"
        strokeWidth={2}
        dot={false}
        yAxisId="wind"
      />
    </>
  );
};
