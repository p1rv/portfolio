import { Button } from "./Button";
import { Menu } from "./Menu";
import { routes } from "./routes";
import { useRouter } from "./useRouter";
import { HomeIcon } from "../svg/Home";
import classNames from "classnames";

export const Header: React.FC = () => {
  const {
    navigate,
    location: { pathname },
  } = useRouter();

  const className = classNames(
    "flex",
    "flex-row",
    "justify-between",
    "backdrop-blur-sm",
    "transition-all",
    "duration-200",
    "ease-in-out",
    "motion-reduce:!transition-none motion-reduce:!duration-0",
    pathname === "/" ? "w-screen h-24" : "w-4/5 h-20"
  );

  return (
    <div className={className}>
      <Button
        navButton
        onClick={() => navigate(routes.home.path)}
        className="flex flex-col items-center"
      >
        <HomeIcon
          className="w-8 h-8"
          pathClassName="group-hover:stroke-theme-1"
        />
        Home
      </Button>
      <Menu />
    </div>
  );
};
