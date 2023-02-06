import { ILanguageObject } from "../context/LanguageProvider";
import { IForecast } from "../store";

type ITooltipKeyDict = {
  [key in keyof Omit<IForecast, "wind_dir" | "time" | "code">]: { label: ILanguageObject; unit: string };
};

const tooltipKeyDict: ITooltipKeyDict = {
  temp_max: {
    label: { EN: "Max. Temp.", PL: "Maks. Temp." },
    unit: "°C",
  },
  temp_min: {
    label: { EN: "Min. Temp.", PL: "Min. Temp." },
    unit: "°C",
  },
  precip_sum: {
    label: { EN: "Precipitation", PL: "Opady" },
    unit: " mm",
  },
  snow: {
    label: { EN: "Snowfall", PL: "Śnieg" },
    unit: " mm",
  },
  rain: {
    label: { EN: "Rain", PL: "Deszcz" },
    unit: " mm",
  },
  showers: {
    label: { EN: "Showers", PL: "Przelotne opady" },
    unit: " mm",
  },
  wind_speed: {
    label: { EN: "Wind speed", PL: "Wiatr" },
    unit: " km/h",
  },
  wind_gusts: {
    label: { EN: "Wind gusts", PL: "Porywy wiatru" },
    unit: " km/h",
  },
};

export const tooltipFormatter = (
  i: string | number | (string | number)[],
  d: string | number | symbol,
  language: keyof ILanguageObject
) => {
  return [i + tooltipKeyDict[d as keyof typeof tooltipKeyDict].unit, tooltipKeyDict[d as keyof typeof tooltipKeyDict].label[language]];
};
