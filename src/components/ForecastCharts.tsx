import { useContext } from "react";
import { ForecastContext } from "../context/ForecastProvider";
import { CollapsedWrapper } from "./CollapsedWrapper";
import { OpenMeteoWrapper } from "./OpenMeteoWrapper";
import { StormGlassWrapper } from "./StormGlassWrapper";
import { VisualCrossingWrapper } from "./VisualCrossingWrapper";
import { WeatherBitWrapper } from "./WeatherBitWrapper";

export const ForecastCharts: React.FC = () => {
  const { collapsed } = useContext(ForecastContext);
  if (collapsed) {
    return <CollapsedWrapper />;
  }
  return (
    <>
      <OpenMeteoWrapper />
      {/* <StormGlassWrapper /> */}
      <VisualCrossingWrapper />
      {/* <WeatherBitWrapper /> */}
    </>
  );
};
