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
export interface IOpenMeteoDaily {
  precipitation_hours: number[];
  precipitation_sum: number[];
  rain_sum: number[];
  showers_sum: number[];
  snowfall_sum: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  time: string[];
  winddirection_10_dominant: number[];
  windgusts_10_max: number[];
  windspeed_10_max: number[];
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
  data: IOpenMeteoParsed;
  isLoading: boolean;
  error: null | SerializedError;
}
