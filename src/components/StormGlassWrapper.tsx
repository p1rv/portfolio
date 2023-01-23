import localforage from "localforage";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { IRootState, useAppDispatch, setStormGlass, fetchStormGlass } from "../store";
import { ChartWrapper } from "./ChartWrapper";
import { IForageForecast } from "./OpenMeteoWrapper";

export interface IForecastWrapperProps {}

export const StormGlassWrapper: React.FC<IForecastWrapperProps> = () => {
  const {
    location: {
      data: {
        address,
        coordinates: { lat, lon },
      },
    },
    stormGlass,
  } = useSelector(({ location, stormGlass }: IRootState) => ({ location, stormGlass }));

  const dispatch = useAppDispatch();

  const updateForecast = async () => {
    if (address === "") return;
    const saved: IForageForecast | null = await localforage.getItem(`sg${lat.toPrecision(5)}${lon.toPrecision(5)}`);
    if (!saved || saved.expires < new Date().getTime()) {
      dispatch(fetchStormGlass({ lat, lon }));
      return;
    }
    const { forecast } = saved;
    dispatch(setStormGlass(forecast));
  };

  useEffect(() => {
    updateForecast();
  }, [address]);

  return (
    <div className="w-full bg-theme-0 mt-4 rounded-[30px] text-theme-4 flex flex-col items-center justify-center py-[1vh]">
      <ChartWrapper
        data={stormGlass}
        source="StormGlass"
      />
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
    </div>
  );
};
