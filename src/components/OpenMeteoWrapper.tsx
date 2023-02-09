import localforage from "localforage";
import { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { ForecastContext } from "../context/ForecastProvider";
import { ILanguageObject, LanguageContext } from "../context/LanguageProvider";
import { IForecast, IRootState, setOpenMeteo, useAppDispatch, fetchOpenMeteo } from "../store";
import { ChartWrapper } from "./ChartWrapper";
import { IForecastWrapperProps } from "./StormGlassWrapper";

export interface IForageForecast {
  expires: number;
  forecast: IForecast[];
}

export const sourceMessage: ILanguageObject = {
  EN: "source",
  PL: "źródło",
};

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

  const { language } = useContext(LanguageContext);
  const { collapsed } = useContext(ForecastContext);

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

  if (collapsed) return null;

  return (
    <div className="w-full bg-theme-0 mt-6 rounded-[30px] text-theme-4 py-[1vh] sm:rounded-[20px]">
      <ChartWrapper
        data={openMeteo}
        source="OpenMeteo"
      />
      <div className="w-full text-right pr-4">
        <span className="text-xs">{sourceMessage[language]}: </span>
        <a
          href="https://open-meteo.com"
          target="_blank"
          title="Open in new tab"
          className="text-xs"
        >
          open-meteo.com
        </a>
      </div>
    </div>
  );
};
