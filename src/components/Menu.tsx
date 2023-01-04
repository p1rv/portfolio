import { HomeIcon } from "../svg/Home";
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
    <div className="h-full">
      <Button
        selected={pathname.includes(routes.react.path)}
        primary
        onClick={() => navigate(routes.react.path)}
        className="flex flex-col items-center"
      >
        <HomeIcon
          className="w-8 h-8"
          pathClassName={
            pathname.includes(routes.react.path)
              ? "stroke-theme-2"
              : "group-hover:stroke-theme-1"
          }
        />
        React
      </Button>
      <Button
        selected={pathname.includes(routes.weather.path)}
        primary
        onClick={() => navigate(routes.weather.path)}
      >
        Weather
      </Button>
      <Button
        selected={pathname.includes(routes.contact.path)}
        primary
        onClick={() => navigate(routes.contact.path)}
      >
        Contact
      </Button>
    </div>
  );
};
