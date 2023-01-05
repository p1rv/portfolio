import { useRouter } from "./useRouter";
import React from "react";
import { routes } from "./routes";
import { HomeIcon } from "../svg/Home";
import chevronRight from "../svg/chevron-right.min.svg";

export const Breadcrumb: React.FC = () => {
  const {
    navigate,
    location: { pathname },
  } = useRouter();

  if (pathname === "/") return null;

  const explodedPath = pathname.split("/");
  const renderedPath = explodedPath.slice(1).map((piece) => (
    <React.Fragment key={piece}>
      <img
        src={chevronRight}
        alt=">"
        className="w-3 h-3 mx-3"
      />
      {Object.values(routes).map((route, ind) => {
        console.log(route.path, ind);
        return route.path.replace("/", "") === piece && route.name;
      })}
    </React.Fragment>
  ));

  return (
    <div className="flex items-center w-4/5 py-[10px] backdrop-blur-sm w-4/5">
      <HomeIcon
        className="group w-4 h-4 cursor-pointer"
        pathClassName="group-hover:stroke-theme-1"
        onClick={() => navigate(routes.home.path)}
      />
      {renderedPath}
    </div>
  );
};
