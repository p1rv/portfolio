import { WeatherCollapse } from "./WeatherCollapse";
import { WeatherFilters } from "./WeatherFilters";

export const WeatherControls: React.FC = () => {
  return (
    <div className="absolute flex justify-between items-center w-full md:relative md:flex-col md:mt-8">
      <WeatherCollapse />
      <WeatherFilters />
    </div>
  );
};
