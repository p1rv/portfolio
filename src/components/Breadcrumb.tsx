import { useRouter } from "../hooks/useRouter";
import React, { useContext } from "react";
import { routes } from "../routes";
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
        {address}
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
      {Object.values(routes).map((route, ind) => {
        if (route.path.replace("/", "") === piece) {
          document.title = route.name[language] + "  |  Karol Król";
          return route.name[language];
        }
      })}
    </React.Fragment>
  ));

  return (
    <div className="flex items-center w-4/5 pt-4 pb-6 w-4/5">
      <HomeIcon
        className="group w-4 h-4 cursor-pointer"
        pathClassName="group-hover:stroke-theme-1"
        onClick={() => navigate(routes.home.path)}
      />
      {renderedPath}
      {renderedSearch}
    </div>
  );
};
