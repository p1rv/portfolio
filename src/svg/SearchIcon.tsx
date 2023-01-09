import classNames from "classnames";
import { memo } from "react";
import { IIconProps } from "./HomeIcon";

export const SearchIcon: React.FC<IIconProps> = memo(
  ({
    stroke = "#fefcfbff",
    className = "w-8 h-8",
    pathClassName,
    selected,
  }) => {
    const classes = classNames(
      "transition-colors",
      "duration-200",
      "ease-out",
      className
    );
    const pathClasses = classNames(
      "transition-all",
      "duration-300",
      "ease-out",
      pathClassName
    );
    const glassPathClasses = classNames(
      pathClasses,
      "opacity-0 group-hover:opacity-100"
    );
    return (
      <svg
        width="200mm"
        height="200mm"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className={classes}
      >
        <circle
          className={pathClasses}
          fill="none"
          stroke="#fafefb"
          strokeWidth="15"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="13.6"
          strokeDasharray="none"
          id="path300"
          cx="82.5"
          cy="82.5"
          r="50"
        />
        <path
          className={pathClasses}
          fill="none"
          stroke="#fafefb"
          strokeWidth="15"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="13.6"
          d="m 132.5,132.5 33.46023,34.02431"
          id="path481"
        />
        <circle
          className={glassPathClasses}
          id="path1124"
          fill="#fefcfb"
          fillOpacity="1"
          stroke="none"
          strokeWidth="0"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="13.6"
          cx="82.5"
          cy="82.5"
          r="30"
        />
      </svg>
    );
  }
);
