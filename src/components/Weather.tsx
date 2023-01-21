import { useRouter } from "../hooks/useRouter";
import { IRootState } from "../store";
import { useSelector } from "react-redux";
import { useEffect, lazy, Suspense } from "react";
import { ForecastProvider } from "../context/ForecastProvider";
import { createSearchParams } from "react-router-dom";
import { LoadingFallback } from "./LoadingFallback";
import { SearchBar } from "./SearchBar";
import { WeatherFilters } from "./WeatherFilters";
const OpenMeteoWrapper = lazy(() => import("./OpenMeteoWrapper"));
const StormGlassWrapper = lazy(() => import("./StormGlassWrapper"));
const VisualCrossingWrapper = lazy(() => import("./VisualCrossingWrapper"));

const Weather: React.FC = () => {
  const { query, navigate } = useRouter();

  const {
    data: { address },
  } = useSelector((state: IRootState) => state.location);

  useEffect(() => {
    const addressQuery = query.get("address") || "";
    address !== addressQuery && navigate({ search: `?${createSearchParams({ address })}` });
  }, [address]);

  return (
    <ForecastProvider>
      <div className="flex flex-col w-4/5 items-center h-full">
        <div className="flex flex-row w-full items-center relative">
          <SearchBar />
          <WeatherFilters />
        </div>
        <Suspense fallback={<LoadingFallback weather />}>
          <OpenMeteoWrapper />
        </Suspense>
        {/* <Suspense fallback={<LoadingFallback weather/>}>
          <StormGlassWrapper />
        </Suspense> */}
        <Suspense fallback={<LoadingFallback weather />}>
          <VisualCrossingWrapper />
        </Suspense>
      </div>
    </ForecastProvider>
  );
};

export default Weather;
