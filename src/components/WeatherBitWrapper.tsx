import localforage from "localforage";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchWeatherBit, IRootState, setWeatherBit, useAppDispatch } from "../store";
import { ChartWrapper } from "./ChartWrapper";
import { IForageForecast } from "./OpenMeteoWrapper";

export const WeatherBitWrapper: React.FC = () => {
  const {
    weatherBit,
    location: {
      data: {
        address,
        coordinates: { lat, lon },
      },
    },
  } = useSelector(({ weatherBit, location }: IRootState) => ({ weatherBit, location }));

  const dispatch = useAppDispatch();

  const updateForecast = async () => {
    if (address === "") return;
    const saved: IForageForecast | null = await localforage.getItem(`wb${lat.toPrecision(5)}${lon.toPrecision(5)}`);
    if (!saved || saved.expires < new Date().getTime()) {
      dispatch(fetchWeatherBit({ lat, lon }));
      return;
    }
    const { forecast } = saved;
    dispatch(setWeatherBit(forecast));
  };

  useEffect(() => {
    updateForecast();
  }, [address]);

  return (
    <div className="w-full bg-theme-0 mt-4 rounded-[30px] text-theme-4 py-[1vh] sm:rounded-[20px]">
      <ChartWrapper
        data={weatherBit}
        source="WeatherBit"
      />
      <div className="w-full text-right pr-4">
        <span className="text-xs">source: </span>
        <a
          href="https://www.weatherbit.io/"
          target="_blank"
          title="Open in new tab"
          className="text-xs"
        >
          weatherbit.io
        </a>
      </div>
    </div>
  );
};
