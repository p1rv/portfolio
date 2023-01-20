import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import localforage from "localforage";
import { ICoordinates, IForecast, IStormGlassDaily, IStormGlassData, IStormGlassDay, IStormGlassHours, Entries } from "../types";

const forecastParameters = ["airTemperature", "precipitation", "windSpeed", "gust", "windDirection"].join(",");

const buildURL = (lat: number, lon: number) =>
  `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lon}&params=${forecastParameters}&source=sg`;

export const fetchStormGlass = createAsyncThunk<IForecast[], ICoordinates>("stormGlass/get", async ({ lat, lon }) => {
  const {
    data: { hours },
  }: { data: IStormGlassData } = await axios.get(buildURL(lat, lon), { headers: { Authorization: import.meta.env.VITE_STORMGLASS_KEY } });

  const daily = {} as IStormGlassDaily;
  hours.forEach((entry) => {
    const dateObj = new Date(entry.time);
    const date = `${dateObj.getFullYear()}-${(dateObj.getMonth() + 1).toString().padStart(2, "0")}-${dateObj.getDate()}`;
    const hoursEntries = Object.entries(entry) as Entries<IStormGlassHours>;
    if (!daily.hasOwnProperty(date)) {
      daily[date] = {} as IStormGlassDay;
      hoursEntries.forEach(([key, value]) => {
        if (key === "time") return;
        daily[date][key] = [value.sg];
      });
      return;
    }
    hoursEntries.forEach(([key, value]) => {
      if (key === "time") return;
      daily[date][key].push(value.sg);
    });
  });
  const forecast = Object.entries(daily).map(([date, values]) => {
    return {
      temp_max: Math.round(Math.max(...values.airTemperature) * 10) / 10,
      temp_min: Math.round(Math.min(...values.airTemperature) * 10) / 10,
      wind_gusts: Math.round(Math.max(...values.gust) * 36) / 10,
      wind_speed: Math.round(((values.windSpeed.reduce((acc, current) => acc + current) * 3.6) / values.windSpeed.length) * 10) / 10,
      wind_dir: Math.round(values.windDirection.reduce((acc, current) => acc + current) / values.windDirection.length),
      precip_sum: Math.round(values.precipitation.reduce((acc, current) => acc + current) * 10) / 10,
      snow: 0,
      showers: 0,
      rain: 0,
      time: date,
    };
  });
  const expires = new Date().getTime() + 86400000;
  localforage.setItem(`sg${lat.toPrecision(5)}${lon.toPrecision(5)}`, {
    forecast,
    expires,
  });

  return forecast;
});

export type IFetchStormGlass = typeof fetchStormGlass;
