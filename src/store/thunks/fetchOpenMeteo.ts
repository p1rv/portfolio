import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import localforage from "localforage";
import { ICoordinates, IForecast, IOpenMeteoDailyKeys, IOpenMeteoData } from "../types";

const forecastParameters = [
  "temperature_2m_max",
  "temperature_2m_min",
  "precipitation_sum",
  "rain_sum",
  "showers_sum",
  "snowfall_sum",
  "windspeed_10m_max",
  "windgusts_10m_max",
  "winddirection_10m_dominant",
].join(",");

const buildURL = ({ lat, lon }: ICoordinates) =>
  `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=${forecastParameters}&timezone=auto`;

const translateOpenMeteoKeys = (key: string): keyof IForecast => {
  switch (key) {
    case "temperature_2m_min":
      return "temp_min";
    case "temperature_2m_max":
      return "temp_max";
    case "precipitation_sum":
      return "precip_sum";
    case "rain_sum":
      return "rain";
    case "showers_sum":
      return "showers";
    case "snowfall_sum":
      return "snow";
    case "windspeed_10m_max":
      return "wind_speed";
    case "windgusts_10m_max":
      return "wind_gusts";
    case "winddirection_10m_dominant":
      return "wind_dir";
    case "time":
      return "time";
    default:
      return "time";
  }
};

export const fetchOpenMeteo = createAsyncThunk<IForecast[], ICoordinates>("openMeteo/get", async ({ lat, lon }) => {
  const {
    data: { daily },
  }: { data: IOpenMeteoData } = await axios.get(buildURL({ lat, lon }));
  const keys = Object.keys(daily) as IOpenMeteoDailyKeys;
  const forecast = daily.time
    .map((_, index) => Object.fromEntries(keys.map((key) => [translateOpenMeteoKeys(key), daily[key][index]])) as unknown as IForecast)
    .map((day) => ({ ...day, precip_sum: day.rain + day.showers + day.snow }));
  const expires = new Date().getTime() + 86400000;
  localforage.setItem(`om${lat.toPrecision(5)}${lon.toPrecision(5)}`, {
    forecast,
    expires,
  });

  return forecast;
});

export type IFetchOpenMeteo = typeof fetchOpenMeteo;
