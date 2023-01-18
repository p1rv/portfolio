import { SerializedError } from "@reduxjs/toolkit";

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

export interface IOpenMeteoDay {
  precipitation_hours: number;
  precipitation_sum: number;
  rain_sum: number;
  showers_sum: number;
  snowfall_sum: number;
  temperature_2m_max: number;
  temperature_2m_min: number;
  time: string;
  winddirection_10_dominant: number;
  windgusts_10_max: number;
  windspeed_10_max: number;
}

export interface IOpenMeteoParsed {
  [time: string]: IOpenMeteoDay;
}

export interface IOpenMeteoState {
  data: IForecast[];
  isLoading: boolean;
  error: null | SerializedError;
}
