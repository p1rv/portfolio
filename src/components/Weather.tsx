import { useRouter } from "../hooks/useRouter";
import { IRootState } from "../store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { ForecastProvider } from "../context/ForecastProvider";
import { createSearchParams } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { OpenMeteoWrapper } from "./OpenMeteoWrapper";
import { StormGlassWrapper } from "./StormGlassWrapper";
import { VisualCrossingWrapper } from "./VisualCrossingWrapper";
import { WeatherBitWrapper } from "./WeatherBitWrapper";
import { LandingWeatherPage } from "./LandingWeatherPage";
import { ElementFocusProvider } from "../context/ElementFocusProvider";
import { WeatherControls } from "./WeatherControls";

const Weather: React.FC = () => {
  const { query, navigate } = useRouter();

  const {
    data: { address },
  } = useSelector((state: IRootState) => state.location);

  useEffect(() => {
    const addressQuery = query.get("address") || "";
    address !== addressQuery && navigate({ search: `?${createSearchParams({ address })}` });
  }, [address]);

  if (!address) {
    return (
      <ElementFocusProvider>
        <LandingWeatherPage />
      </ElementFocusProvider>
    );
  }

  return (
    <ForecastProvider>
      <div className="flex flex-col md:w-[95vw] w-4/5 lg:w-[90vw] items-center h-full pb-4">
        <div className="flex flex-row md:flex-col w-full items-center relative">
          <SearchBar />
          <WeatherControls />
        </div>
        <OpenMeteoWrapper />
        {/* <StormGlassWrapper /> */}
        <VisualCrossingWrapper />
        {/* <WeatherBitWrapper /> */}
      </div>
    </ForecastProvider>
  );
};

export default Weather;
