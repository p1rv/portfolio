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
      >
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
