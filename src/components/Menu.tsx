import { ContactIcon } from "../svg/Contact";
import { ReactIcon } from "../svg/React";
import { WeatherIcon } from "../svg/Weather";
import { Button } from "./Button";
import { routes } from "./routes";
import { useRouter } from "./useRouter";

export const Menu: React.FC = () => {
  const {
    navigate,
    location: { pathname },
  } = useRouter();
  console.log(location);

  return (
    <div className="h-full flex">
      <Button
        selected={pathname.includes(routes.react.path)}
        primary
        onClick={() => navigate(routes.react.path)}
        className="flex flex-col items-center"
      >
        <ReactIcon
          className="w-8 h-8"
          pathClassName={
            pathname.includes(routes.react.path)
              ? "stroke-theme-2 fill-theme-2"
              : "group-hover:stroke-theme-1 group-hover:fill-theme-2"
          }
        />
        React
      </Button>
      <Button
        selected={pathname.includes(routes.weather.path)}
        primary
        onClick={() => navigate(routes.weather.path)}
        className="flex flex-col items-center"
      >
        <WeatherIcon
          className="w-8 h-8"
          pathClassName={
            pathname.includes(routes.weather.path)
              ? "stroke-theme-2 fill-theme-2"
              : "group-hover:stroke-theme-1 group-hover:fill-theme-1"
          }
        />
        Weather
      </Button>
      <Button
        selected={pathname.includes(routes.contact.path)}
        primary
        onClick={() => navigate(routes.contact.path)}
        className="flex flex-col items-center"
      >
        <ContactIcon
          className="w-8 h-8"
          pathClassName={
            pathname.includes(routes.contact.path)
              ? "stroke-theme-2"
              : "group-hover:stroke-theme-1"
          }
        />
        Contact
      </Button>
    </div>
  );
};
