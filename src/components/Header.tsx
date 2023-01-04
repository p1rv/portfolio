import { Button } from "./Button";
import { Menu } from "./Menu";
import { routes } from "./routes";
import { useRouter } from "./useRouter";
import homeIcon from "../svg/home-light.min.svg";

export const Header: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="flex w-full flex-row justify-between backdrop-blur-sm">
      <Button
        primary
        onClick={() => navigate(routes.home.path)}
        className="flex flex-col items-center"
      >
        <img
          src={homeIcon}
          alt="home"
          className="w-6"
        />
        Home
      </Button>
      <Menu />
    </div>
  );
};
