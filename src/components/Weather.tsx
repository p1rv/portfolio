import { useRouter } from "../hooks/useRouter";
import { IRootState } from "../store";
import { useSelector } from "react-redux";
import { useEffect, lazy, Suspense } from "react";
import { ForecastProvider } from "../context/ForecastProvider";
import { createSearchParams } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { LandingWeatherPage } from "./WeatherLanding";
import { ElementFocusProvider } from "../context/ElementFocusProvider";
import { WeatherControls } from "./WeatherControls";
import { LoadingFallback } from "./LoadingFallback";
const ForecastCharts = lazy(() => import("./Charts"));

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
        <div className="flex flex-row md:flex-col w-full items-center relative md:flex-col-reverse">
          <WeatherControls />
          <SearchBar />
        </div>
        <Suspense fallback={<LoadingFallback />}>
          <ForecastCharts />
        </Suspense>
      </div>
    </ForecastProvider>
  );
};

export default Weather;
