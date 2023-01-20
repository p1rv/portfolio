import localforage from "localforage";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { IRootState, setVisualCrossing, useAppDispatch, fetchVisualCrossing } from "../store";
import { ChartWrapper } from "./ChartWrapper";
import { IForageForecast } from "./OpenMeteoWrapper";

export const VisualCrossingWrapper: React.FC = () => {
  const {
    visualCrossing,
    location: {
      data: {
        address,
        coordinates: { lat, lon },
      },
    },
  } = useSelector(({ visualCrossing, location }: IRootState) => ({ visualCrossing, location }));

  const dispatch = useAppDispatch();

  const updateForecast = async () => {
    if (address === "") return;
    const saved: IForageForecast | null = await localforage.getItem(`vc${lat.toPrecision(5)}${lon.toPrecision(5)}`);
    if (!saved || saved.expires < new Date().getTime()) {
      dispatch(fetchVisualCrossing({ lat, lon }));
      return;
    }
    const { forecast } = saved;
    dispatch(setVisualCrossing(forecast));
  };

  useEffect(() => {
    updateForecast();
  }, [address]);

  return (
    <div className="w-full bg-theme-0 mt-4 rounded-[30px] text-theme-4 flex flex-col items-center justify-center py-[1vh]">
      <ChartWrapper
        data={visualCrossing}
        source="VisualCrossing"
      />
      {address && (
        <div className="w-full text-right pr-4">
          <span className="text-xs">source: </span>
          <a
            href="https://www.visualcrossing.com/"
            target="_blank"
            title="Open in new tab"
            className="text-xs"
          >
            visualcrossing.com
          </a>
        </div>
      )}
    </div>
  );
};
