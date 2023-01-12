import {
  createAsyncThunk,
  SerializedError,
  ThunkAction,
} from "@reduxjs/toolkit";
import axios from "axios";
import localforage from "localforage";
import { IRootState } from "..";
import {
  ICoordinates,
  IOpenMeteoDailyKeys,
  IOpenMeteoData,
  IOpenMeteoParsed,
} from "../types";

const forecastParameters = [
  "temperature_2m_max",
  "temperature_2m_min",
  "precipitation_sum",
  "rain_sum",
  "showers_sum",
  "snowfall_sum",
  "precipitation_hours",
  "windspeed_10m_max",
  "windgusts_10m_max",
  "winddirection_10m_dominant",
].join(",");

const buildURL = (lat: number, lon: number) =>
  `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=${forecastParameters}&timezone=auto`;

export const fetchOpenMeteo = createAsyncThunk<IOpenMeteoParsed, ICoordinates>(
  "openMeteo/get",
  async ({ lat, lon }) => {
    const {
      data: { daily },
    }: { data: IOpenMeteoData } = await axios.get(buildURL(lat, lon));
    const keys = Object.keys(daily) as IOpenMeteoDailyKeys;
    const parsedData = Object.fromEntries(
      daily.time.map((time, index) => [
        time,
        Object.fromEntries(keys.map((key) => [key, daily[key][index]])),
      ])
    ) as unknown as IOpenMeteoParsed;

    const expires = new Date().getTime() + 86400000;
    localforage.setItem(`om${lat.toPrecision(5)}${lon.toPrecision(5)}`, {
      ...parsedData,
      expires,
    });

    return parsedData;
  }
);

export type IFetchOpenMeteo = typeof fetchOpenMeteo;
