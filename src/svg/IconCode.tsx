import { lazy } from "react";
const Sunny = lazy(() => import("../svg/SunnyIcon"));
import { WeatherIcon as Main } from "../svg/WeatherIcon";
const Cloudy = lazy(() => import("../svg/CloudyIcon"));
const Fog = lazy(() => import("../svg/FogIcon"));
const Rain = lazy(() => import("../svg/RainIcon"));
const HeavyRain = lazy(() => import("../svg/HeavyRainIcon"));
const Snow = lazy(() => import("../svg/SnowIcon"));
const Thunderstorm = lazy(() => import("../svg/ThunderstormIcon"));
const StormRain = lazy(() => import("../svg/StormRainIcon"));
import { IIconProps } from "./HomeIcon";
import { icons, IIconCodes } from "../utils/weatherIcons";

interface IIconCodeProps extends IIconProps {
  code: IIconCodes;
}

export const IconCode: React.FC<IIconCodeProps> = ({ code, ...rest }) => {
  switch (icons[code]) {
    case "Sunny":
      return <Sunny {...rest} />;
    case "Cloudy":
      return <Cloudy {...rest} />;
    case "Fog":
      return <Fog {...rest} />;
    case "Rain":
      return <Rain {...rest} />;
    case "HeavyRain":
      return <HeavyRain {...rest} />;
    case "Snow":
      return <Snow {...rest} />;
    case "Thunderstorm":
      return <Thunderstorm {...rest} />;
    case "StormRain":
      return <StormRain {...rest} />;
    case "Main":
      return (
        <Main
          width={40}
          height={40}
          fill="#00a8e8"
          stroke="#00a8e8"
          {...rest}
        />
      );
    default:
      return (
        <Main
          width={40}
          height={40}
          fill="#00a8e8"
          stroke="#00a8e8"
          {...rest}
        />
      );
  }
};
