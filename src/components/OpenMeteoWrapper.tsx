import localforage from "localforage";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { IForecast, IRootState, setOpenMeteo, useAppDispatch, fetchOpenMeteo } from "../store";
import { ChartWrapper } from "./ChartWrapper";
import { IForecastWrapperProps } from "./StormGlassWrapper";

export interface IForageForecast {
  expires: number;
  forecast: IForecast[];
}

export const OpenMeteoWrapper: React.FC<IForecastWrapperProps> = () => {
  const {
    location: {
      data: {
        address,
        coordinates: { lat, lon },
      },
    },
    openMeteo,
  } = useSelector(({ location, openMeteo }: IRootState) => ({ location, openMeteo }));

  const dispatch = useAppDispatch();

  const updateForecast = async () => {
    if (address === "") return;
    const saved: IForageForecast | null = await localforage.getItem(`om${lat.toPrecision(5)}${lon.toPrecision(5)}`);
    if (!saved || saved.expires < new Date().getTime()) {
      dispatch(fetchOpenMeteo({ lat, lon }));
      return;
    }
    const { forecast } = saved;
    dispatch(setOpenMeteo(forecast));
  };

  useEffect(() => {
    updateForecast();
  }, [address]);

  return (
    <div className="w-full bg-theme-0 mt-4 rounded-[30px] text-theme-4 flex flex-col items-center justify-center py-[1vh]">
      <ChartWrapper
        data={openMeteo}
        source="OpenMeteo"
      />
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
  );
};
