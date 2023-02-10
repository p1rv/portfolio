import { Button } from "./Button";
import { Menu } from "./Menu";
import { routes } from "../utils/routes";
import { useRouter } from "../hooks/useRouter";
import { HomeIcon } from "../svg/HomeIcon";
import classNames from "classnames";
import { useContext } from "react";
import { ILanguageObject, LanguageContext } from "../context/LanguageProvider";
import { Link } from "react-router-dom";

const homeButtonText: ILanguageObject = {
  EN: "Home",
  PL: "Główna",
};

export const Header: React.FC = () => {
  const {
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
    pathname === "/" ? "w-screen h-24 mt-6" : "w-4/5 sm:w-full h-20 lg:w-[90vw] md:w-[95vw]",
    "md:!mt-4"
  );

  return (
    <div className={className}>
      <Button
        primary
        navButton
        link
      >
        <Link
          to={routes.home.path}
          className="flex flex-col items-center py-4 px-6 sm:px-4"
        >
          <HomeIcon pathClassName="group-hover:stroke-theme-1" />
          {homeButtonText[language]}
        </Link>
      </Button>
      <Menu />
    </div>
  );
};
