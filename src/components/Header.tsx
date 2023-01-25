import { Button } from "./Button";
import { Menu } from "./Menu";
import { routes } from "./routes";
import { useRouter } from "../hooks/useRouter";
import { HomeIcon } from "../svg/HomeIcon";
import classNames from "classnames";
import { useContext } from "react";
import { ILanguageObject, LanguageContext } from "../context/LanguageProvider";

const homeButtonText: ILanguageObject = {
  EN: "Home",
  PL: "Główna",
};

export const Header: React.FC = () => {
  const {
    navigate,
    location: { pathname },
  } = useRouter();

  const { language } = useContext(LanguageContext);

  const className = classNames(
    "flex",
    "flex-row",
    "justify-between",
    "transition-all",
    "duration-200",
    "ease-in-out",
    "motion-reduce:!transition-none motion-reduce:!duration-0",
    pathname === "/" ? "w-screen h-24" : "w-4/5 sm:w-full h-20"
  );

  return (
    <div className={className}>
      <Button
        primary
        navButton
        onClick={() => navigate(routes.home.path)}
        className="flex flex-col items-center"
      >
        <HomeIcon
          className="w-8 h-8"
          pathClassName="group-hover:stroke-theme-1"
        />
        {homeButtonText[language]}
      </Button>
      <Menu />
    </div>
  );
};
