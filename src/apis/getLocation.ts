import axios from "axios";
import { ILocationState } from "../store";

export const getLocation = async (
  searchTerm: string
): Promise<ILocationState | null> => {
  const { data } = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${decodeURI(
      searchTerm.replace(/\/|\?|\&/g, "")
    )}&key=${import.meta.env.VITE_GEOCODING_KEY}`
  );
  if (data.results.length === 0) return null;
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
};
