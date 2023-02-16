import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import localforage from "localforage";
import { ICoordinates, IForecast, IWeatherBitData } from "../types";

const buildURL = ({ lat, lon }: ICoordinates) =>
  `https://api.weatherbit.io/v2.0/forecast/daily?key=${import.meta.env.VITE_WEATHERBIT_KEY}&lat=${lat}&lon=${lon}`;

export const fetchWeatherBit = createAsyncThunk<IForecast[], ICoordinates>("weatherBit/get", async ({ lat, lon }) => {
  const {
    data: { data },
  }: { data: { data: IWeatherBitData[] } } = await axios.get(buildURL({ lat, lon }));

  const forecast: IForecast[] = data.map(
    ({ max_temp, min_temp, datetime, precip, snow, wind_gust_spd, wind_spd, wind_dir, weather: { code } }) => ({
      temp_max: max_temp,
      temp_min: min_temp,
      time: datetime,
      precip_sum: Math.round((precip + snow) * 10) / 10,
      snow: Math.round(snow * 10) / 10,
      rain: Math.round(precip * 10) / 10,
      showers: 0,
      wind_gusts: Math.round(wind_gust_spd * 36) / 10,
      wind_speed: Math.round(wind_spd * 36) / 10,
      wind_dir,
      code,
    })
  );

  const expires = new Date().getTime() + 86400000;

  localforage.setItem(`wb${lat.toPrecision(5)}${lon.toPrecision(5)}`, {
    forecast,
    expires,
  });

  return forecast;
});
