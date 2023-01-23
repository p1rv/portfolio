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

export const tooltipFormatter = (i: string | number | (string | number)[], d: string | number | symbol) => {
  return [i + tooltipKeyDict[d as keyof typeof tooltipKeyDict].unit, tooltipKeyDict[d as keyof typeof tooltipKeyDict].label];
};
