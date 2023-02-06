import localforage from "localforage";
import { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { ForecastContext } from "../context/ForecastProvider";
import { LanguageContext } from "../context/LanguageProvider";
import { IRootState, setVisualCrossing, useAppDispatch, fetchVisualCrossing } from "../store";
import { ChartWrapper } from "./ChartWrapper";
import { IForageForecast, sourceMessage } from "./OpenMeteoWrapper";

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

  const { language } = useContext(LanguageContext);
  const { collapsed } = useContext(ForecastContext);

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

  if (collapsed) return null;

  return (
    <div className="w-full bg-theme-0 mt-4 rounded-[30px] text-theme-4 py-[1vh] sm:rounded-[20px]">
      <ChartWrapper
        data={visualCrossing}
        source="VisualCrossing"
      />
      <div className="w-full text-right pr-4">
        <span className="text-xs">{sourceMessage[language]}: </span>
        <a
          href="https://www.visualcrossing.com/"
          target="_blank"
          title="Open in new tab"
          className="text-xs"
        >
          visualcrossing.com
        </a>
      </div>
    </div>
  );
};
