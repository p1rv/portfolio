import { useRouter } from "../hooks/useRouter";
import React, { useContext, useState } from "react";
import { routes } from "../utils/routes";
import { HomeIcon } from "../svg/HomeIcon";
import chevronRight from "../svg/chevron-right.min.svg";
import { useSelector } from "react-redux";
import { IRootState } from "../store";
import { LanguageContext } from "../context/LanguageProvider";

export const Breadcrumb: React.FC = () => {
  const {
    navigate,
    location: { pathname },
  } = useRouter();

  const { language } = useContext(LanguageContext);

  const { address } = useSelector((state: IRootState) => state.location.data);

  const [overflowHidden, setOverflowHidden] = useState(true);

  const explodedPath = pathname.split(/\//g);

  let renderedSearch;
  if (pathname === routes.weather.path) {
    renderedSearch = address && (
      <React.Fragment key={address}>
        <img
          src={chevronRight}
          alt=">"
          className="w-3 h-3 mx-3"
        />
        <p
          className={`text-ellipsis overflow-hidden ${overflowHidden && "whitespace-nowrap"}`}
          onClick={() => setOverflowHidden((currentState) => !currentState)}
        >
          {address}
        </p>
      </React.Fragment>
    );
  }

  if (pathname === "/") {
    document.title = "Karol Król  |  Portfolio";
    return null;
  }

  // slice(1) - skip home route
  const renderedPath = explodedPath.slice(1).map((piece) => (
    <React.Fragment key={piece}>
      <img
        src={chevronRight}
        alt=">"
        className="w-3 h-3 mx-3"
      />
      {Object.values(routes)
        .filter((route, ind) => route.path.replace("/", "") === piece)
        .map((route) => {
          document.title = route.name[language] + "  |  Karol Król";
          return route.name[language];
        })}
    </React.Fragment>
  ));

  return (
    <div className="flex items-center w-4/5 lg:w-[90vw] md:w-[95vw] pt-4 pb-6">
      <HomeIcon
        className="group min-w-[18px] w-[18px] h-[18px] cursor-pointer"
        pathClassName="group-hover:stroke-theme-1"
        onClick={() => navigate(routes.home.path)}
      />
      {renderedPath}
      {renderedSearch}
    </div>
  );
};
