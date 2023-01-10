import { useRouter } from "./useRouter";
import React from "react";
import { routes } from "./routes";
import { HomeIcon } from "../svg/HomeIcon";
import chevronRight from "../svg/chevron-right.min.svg";
import { Link } from "react-router-dom";

export const Breadcrumb: React.FC = () => {
  const {
    navigate,
    location: { pathname, search },
  } = useRouter();

  if (pathname === "/") return null;

  const explodedPath = pathname.split(/\//g);
  const explodedSearch = search
    .replace(/\?/g, "")
    .replace(/\+/g, " ")
    .split(/\&/g);

  // slice(1) - skip home route
  const renderedPath = explodedPath.slice(1).map((piece) => (
    <React.Fragment key={piece}>
      <img
        src={chevronRight}
        alt=">"
        className="w-3 h-3 mx-3"
      />
      {Object.values(routes).map((route, ind) => {
        return (
          route.path.replace("/", "") === piece && (
            <Link
              to={route.path}
              key={route.name}
            >
              {route.name}
            </Link>
          )
        );
      })}
    </React.Fragment>
  ));
  const renderedSearch = explodedSearch.map(
    (searchPiece) =>
      searchPiece !== "" && (
        <React.Fragment key={searchPiece}>
          <img
            src={chevronRight}
            alt=">"
            className="w-3 h-3 mx-3"
          />
          {decodeURI(searchPiece)}
        </React.Fragment>
      )
  );

  return (
    <div className="flex items-center w-4/5 py-[10px] backdrop-blur-sm w-4/5">
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
