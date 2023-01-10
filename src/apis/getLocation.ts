import axios from "axios";

interface IGeocodingResponse {
  results: {
    formatted_address: string;
    geometry: {
      location: {
        lat: number;
        lng: number;
      };
    };
  }[];
}

export const getLocation = async (
  searchTerm: string
): Promise<IGeocodingResponse> => {
  const { data } = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
      searchTerm
    )}&key=${import.meta.env.VITE_GEOCODING_KEY}`
  );
  return data;
};
