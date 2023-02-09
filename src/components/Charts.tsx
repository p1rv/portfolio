import { CollapsedWrapper } from "./CollapsedWrapper";
import { OpenMeteoWrapper } from "./OpenMeteoWrapper";
import { StormGlassWrapper } from "./StormGlassWrapper";
import { VisualCrossingWrapper } from "./VisualCrossingWrapper";
import { WeatherBitWrapper } from "./WeatherBitWrapper";

const Charts: React.FC = () => {
  return (
    <>
      <CollapsedWrapper />
      <OpenMeteoWrapper />
      <VisualCrossingWrapper />
      <WeatherBitWrapper />
      <StormGlassWrapper />
    </>
  );
};

export default Charts;
