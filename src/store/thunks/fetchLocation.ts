import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ILocationData } from "../types";

export const fetchLocation = createAsyncThunk<ILocationData, string>("location/get", async (searchTerm: string) => {
  const { data } = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${decodeURI(searchTerm.replace(/\/|\?|\&/g, ""))}&key=${
      import.meta.env.VITE_GEOCODING_KEY
    }`
  );
  const {
    results: [retrieved],
  } = data;
  const address = retrieved.formatted_address;
  const {
    geometry: {
      location: { lat, lng: lon },
    },
  } = retrieved;
  return { address, coordinates: { lat, lon } };
});

export type IGetLocation = typeof fetchLocation;
