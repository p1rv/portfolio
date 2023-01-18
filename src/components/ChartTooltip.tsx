import { Legend, Tooltip } from "recharts";

const tooltipKeyDict = {
  temp_max: {
    label: "Max. Temp.",
    unit: "°C",
  },
  temp_min: {
    label: "Min. Temp.",
    unit: "°C",
  },
  precip_sum: {
    label: "Precipitation",
    unit: " mm",
  },
  snow: {
    label: "Snowfall",
    unit: " mm",
  },
  rain: {
    label: "Rain",
    unit: " mm",
  },
  showers: {
    label: "Showers",
    unit: " mm",
  },
  wind_speed: {
    label: "Wind speed",
    unit: " km/h",
  },
  wind_gusts: {
    label: "Wind gusts",
    unit: " km/h",
  },
};

export const ChartTooltip: () => JSX.Element = () => {
  return (
    <>
      <Tooltip
        wrapperClassName=""
        labelFormatter={(day) => "Date: " + day}
        separator=": "
        formatter={(i, d: keyof typeof tooltipKeyDict) => {
          return [i + tooltipKeyDict[d].unit, tooltipKeyDict[d].label];
        }}
      />
      <Legend
        formatter={(i: keyof typeof tooltipKeyDict) => {
          return tooltipKeyDict[i].label;
        }}
      />
    </>
  );
};
