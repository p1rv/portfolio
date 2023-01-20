import { SerializedError } from "@reduxjs/toolkit";

export type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export interface ICoordinates {
  lat: number;
  lon: number;
}
export interface ILocationData {
  address: string;
  coordinates: ICoordinates;
}

export interface ILocationState {
  data: ILocationData;
  error: null | SerializedError;
  isLoading: boolean;
}

export interface IForecast {
  precip_sum: number;
  rain: number;
  showers: number;
  snow: number;
  temp_max: number;
  temp_min: number;
  time: string;
  wind_dir: number;
  wind_gusts: number;
  wind_speed: number;
}

export const initialForecastState: IForecastState = {
  data: [],
  isLoading: false,
  error: null,
};

export interface IForecastState {
  data: IForecast[];
  isLoading: boolean;
  error: null | SerializedError;
}

export interface IOpenMeteoDaily {
  precipitation_sum: number[];
  rain_sum: number[];
  showers_sum: number[];
  snowfall_sum: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  time: string[];
  winddirection_10m_dominant: number[];
  windgusts_10m_max: number[];
  windspeed_10m_max: number[];
}

export type IOpenMeteoDailyKeys = Array<keyof IOpenMeteoDaily>;

export interface IOpenMeteoData {
  daily: IOpenMeteoDaily;
}

export interface IStormGlassRecordSG {
  sg: number;
}

export interface IStormGlassHours {
  airTemperature: IStormGlassRecordSG;
  gust: IStormGlassRecordSG;
  precipitation: IStormGlassRecordSG;
  windDirection: IStormGlassRecordSG;
  windSpeed: IStormGlassRecordSG;
  time: string;
}

export type IStormGlassDay = {
  [key in keyof Omit<IStormGlassHours, "time">]: number[];
};

export interface IStormGlassDaily {
  [key: string]: IStormGlassDay;
}

export interface IStormGlassData {
  hours: IStormGlassHours[];
}

export interface IVisualCrossingDay {
  datetime: string;
  tempmax: number;
  tempmin: number;
  precip: number;
  snow: number;
  windgust: number;
  windspeed: number;
  winddir: number;
}

export interface IVisualCrossingData {
  days: IVisualCrossingDay[];
}
