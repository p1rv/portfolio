import Sunny from "../svg/SunnyIcon";
import { WeatherIcon as Main } from "../svg/WeatherIcon";
import Cloudy from "../svg/CloudyIcon";
import Fog from "../svg/FogIcon";
import Rain from "../svg/RainIcon";
import HeavyRain from "../svg/HeavyRainIcon";
import Snow from "../svg/SnowIcon";
import Thunderstorm from "../svg/ThunderstormIcon";
import StormRain from "../svg/StormRainIcon";
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
