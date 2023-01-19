import { ChartWrapper } from "./ChartWrapper";
import { SearchBar } from "./SearchBar";
import { useRouter } from "../hooks/useRouter";
import { fetchOpenMeteo } from "../store/thunks/fetchOpenMeteo";
import { setOpenMeteo } from "../store/slices/openMeteoSlice";
import localforage from "localforage";
import { IForecast, IRootState, useAppDispatch } from "../store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { WeatherFilters } from "./WeatherFilters";
import { ForecastProvider } from "./ForecastProvider";
import { createSearchParams } from "react-router-dom";

interface IForageForecast {
  expires: number;
  forecast: IForecast[];
}

export const Weather: React.FC = () => {
  const { query, navigate } = useRouter();

  const {
    data: {
      address,
      coordinates: { lat, lon },
    },
  } = useSelector((state: IRootState) => state.location);

  const dispatch = useAppDispatch();

  const updateForecast = async () => {
    if (address === "") return;
    const saved: IForageForecast | null = await localforage.getItem(`om${lat.toPrecision(5)}${lon.toPrecision(5)}`);
    if (!saved || saved.expires < new Date().getTime()) {
      dispatch(fetchOpenMeteo({ lat, lon }));
      return;
    }
    const { expires, forecast } = saved;
    dispatch(setOpenMeteo(forecast));
  };

  useEffect(() => {
    const addressQuery = query.get("address") || "";
    address !== addressQuery && navigate({ search: `?${createSearchParams({ address })}` });
    updateForecast();
  }, [address]);

  return (
    <ForecastProvider>
      <div className="flex flex-col w-4/5 items-center h-full">
        <div className="flex flex-row w-full items-center relative">
          <SearchBar />
          <WeatherFilters />
        </div>
        <ChartWrapper />
      </div>
    </ForecastProvider>
  );
};
