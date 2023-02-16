import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import localforage from "localforage";
import { ICoordinates, IForecast, IVisualCrossingData } from "../types";

const params = ["datetime", "tempmax", "tempmin", "precip", "snow", "windgust", "windspeed", "winddir", "icon"].join(",");

const buildURL = ({ lat, lon }: ICoordinates) =>
  `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}?unitGroup=metric&contentType=json&key=${
    import.meta.env.VITE_VISUALCROSSING_KEY
  }&elements=${params}&include=days,fcst`;

const translateVisualCrossingKeys = (key: string): keyof IForecast => {
  switch (key) {
    case "tempmin":
      return "temp_min";
    case "tempmax":
      return "temp_max";
    case "precip":
      return "precip_sum";
    case "snow":
      return "snow";
    case "windspeed":
      return "wind_speed";
    case "windgust":
      return "wind_gusts";
    case "winddir":
      return "wind_dir";
    case "datetime":
      return "time";
    case "icon":
      return "code";
    default:
      return "wind_dir";
  }
};

export const fetchVisualCrossing = createAsyncThunk<IForecast[], ICoordinates>("visualCrossing/get", async ({ lat, lon }) => {
  const {
    data: { days },
  }: { data: IVisualCrossingData } = await axios.get(buildURL({ lat, lon }));

  const forecast = days
    .map(
      (day) =>
        Object.fromEntries(Object.entries(day).map(([key, value]) => [translateVisualCrossingKeys(key), value])) as Omit<
          IForecast,
          "rain" | "showers"
        >
    )
    .map((day) => {
      const precip_sum = day["precip_sum"] > day["snow"] ? day["precip_sum"] : day["snow"];
      const rain = Math.round((precip_sum - day["snow"]) * 10) / 10;
      const showers = 0;
      return { ...day, rain, showers, precip_sum } as IForecast;
    });

  const expires = new Date().getTime() + 86400000;

  localforage.setItem(`vc${lat.toPrecision(5)}${lon.toPrecision(5)}`, {
    forecast,
    expires,
  });

  return forecast;
});
