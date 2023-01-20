import { SearchBar } from "./SearchBar";
import { useRouter } from "../hooks/useRouter";
import { IRootState } from "../store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { WeatherFilters } from "./WeatherFilters";
import { ForecastProvider } from "./ForecastProvider";
import { createSearchParams } from "react-router-dom";
import { StormGlassWrapper } from "./StormGlassWrapper";
import { OpenMeteoWrapper } from "./OpenMeteoWrapper";
import { VisualCrossingWrapper } from "./VisualCrossingWrapper";

export const Weather: React.FC = () => {
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
        <OpenMeteoWrapper />
        {/* <StormGlassWrapper /> */}
        <VisualCrossingWrapper />
      </div>
    </ForecastProvider>
  );
};
