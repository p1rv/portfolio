import Sunny from "../svg/weather-sunny-icon.svg";
import Main from "../svg/weather-main-icon.svg";
import Cloudy from "../svg/weather-cloudy-icon.svg";
import Fog from "../svg/weather-fog-icon.svg";
import Rain from "../svg/weather-rain-icon.svg";
import HeavyRain from "../svg/weather-heavy-rain-icon.svg";
import Snow from "../svg/weather-snow-icon.svg";
import Thunderstorm from "../svg/weather-thunderstorm-icon.svg";
import StormRain from "../svg/weather-storm-rain-icon.svg";

export const icons = {
  0: Sunny,
  1: Main,
  2: Main,
  3: Cloudy,
  45: Fog,
  48: Fog,
  51: Rain,
  53: Rain,
  55: Rain,
  56: Rain,
  57: Rain,
  80: Rain,
  81: Rain,
  61: HeavyRain,
  63: HeavyRain,
  65: HeavyRain,
  66: HeavyRain,
  67: HeavyRain,
  82: HeavyRain,
  71: Snow,
  73: Snow,
  75: Snow,
  77: Snow,
  85: Snow,
  86: Snow,
  95: Thunderstorm,
  96: Thunderstorm,
  99: StormRain,
  200: StormRain,
  201: StormRain,
  202: StormRain,
  230: Thunderstorm,
  231: Thunderstorm,
  232: Thunderstorm,
  233: Thunderstorm,
  300: Rain,
  301: Rain,
  302: Rain,
  521: Rain,
  500: HeavyRain,
  501: HeavyRain,
  502: HeavyRain,
  511: HeavyRain,
  520: HeavyRain,
  522: HeavyRain,
  600: Snow,
  601: Snow,
  602: Snow,
  610: Snow,
  611: Snow,
  612: Snow,
  621: Snow,
  622: Snow,
  623: Snow,
  700: Fog,
  711: Fog,
  721: Fog,
  731: Fog,
  741: Fog,
  751: Fog,
  800: Sunny,
  801: Sunny,
  802: Main,
  803: Main,
  804: Cloudy,
  900: HeavyRain,
  snow: Snow,
  rain: HeavyRain,
  fog: Fog,
  wind: Main,
  cloudy: Cloudy,
  "partly-cloudy-day": Main,
  "partly-cloudy-night": Main,
  "clear-day": Sunny,
  "clear-night": Sunny,
} as const;

export type IIconCodes = keyof typeof icons;
