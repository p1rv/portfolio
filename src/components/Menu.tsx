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
        flexCenter
        onClick={() => navigate(routes.react.path)}
      >
        <ReactIcon
          className="w-8 h-8"
          selected={pathname.includes(routes.react.path)}
        />
        React
      </Button>
      <Button
        selected={pathname.includes(routes.weather.path)}
        flexCenter
        onClick={() => navigate(routes.weather.path)}
      >
        <WeatherIcon
          className="w-8 h-8"
          selected={pathname.includes(routes.weather.path)}
        />
        Weather
      </Button>
      <Button
        selected={pathname.includes(routes.contact.path)}
        flexCenter
        onClick={() => navigate(routes.contact.path)}
      >
        <ContactIcon
          className="w-8 h-8"
          selected={pathname.includes(routes.contact.path)}
        />
        Contact
      </Button>
    </div>
  );
};
