import { ChartWrapper } from "./ChartWrapper";
import { SearchBar } from "./SearchBar";
import { useRouter } from "../hooks/useRouter";
import { fetchOpenMeteo } from "../store/thunks/fetchOpenMeteo";
import localforage from "localforage";
import { IForecast, IRootState, useAppDispatch, setOpenMeteo } from "../store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { WeatherFilters } from "./WeatherFilters";
import { ForecastProvider } from "./ForecastProvider";
import { createSearchParams } from "react-router-dom";
import { fetchStormGlass } from "../store/thunks/fetchStormGlass";
import { setStormGlass } from "../store/slices/stormGlassSlice";

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
    const savedOM: IForageForecast | null = await localforage.getItem(`om${lat.toPrecision(5)}${lon.toPrecision(5)}`);
    if (!savedOM || savedOM.expires < new Date().getTime()) {
      dispatch(fetchOpenMeteo({ lat, lon }));
      return;
    }
    const savedSG: IForageForecast | null = await localforage.getItem(`sg${lat.toPrecision(5)}${lon.toPrecision(5)}`);
    if (!savedSG || savedSG.expires < new Date().getTime()) {
      dispatch(fetchStormGlass({ lat, lon }));
      return;
    }
    const { forecast: fOM } = savedOM;
    dispatch(setOpenMeteo(fOM));
    const { forecast: fSG } = savedSG;
    dispatch(setStormGlass(fSG));
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
        <div className="w-full bg-theme-0 mt-4 rounded-[30px] text-theme-4 flex flex-col items-center justify-center py-[1vh]">
          <div className="w-full text-left pl-4 text-sm">{address}</div>
          <ChartWrapper om />
          {address && (
            <div className="w-full text-right pr-4">
              <span className="text-xs">source: </span>
              <a
                href="https://open-meteo.com"
                target="_blank"
                title="Open in new tab"
                className="text-xs"
              >
                open-meteo.com
              </a>
            </div>
          )}
        </div>
        <div className="w-full bg-theme-0 mt-4 rounded-[30px] text-theme-4 flex flex-col items-center justify-center py-[1vh]">
          <div className="w-full text-left pl-4 text-sm">{address}</div>
          <ChartWrapper sg />
          {address && (
            <div className="w-full text-right pr-4">
              <span className="text-xs">source: </span>
              <a
                href="https://stormglass.io"
                target="_blank"
                title="Open in new tab"
                className="text-xs"
              >
                stormglass.io
              </a>
            </div>
          )}
        </div>
      </div>
    </ForecastProvider>
  );
};
