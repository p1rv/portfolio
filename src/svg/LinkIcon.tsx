import classNames from "classnames";
import { memo } from "react";
import { IIconProps } from "./HomeIcon";

export const LinkIcon: React.FC<IIconProps> = memo(({ stroke = "#fefcfbff", selected, className = "w-4 h-4" }) => {
  const classes = classNames("transition-colors", "duration-200", "ease-out", className);
  const pathClasses = classNames("transition-all", "duration-200", "ease-out", "group-hover:stroke-theme-1");
  const arrowClasses = classNames(" transition-all duration-300 ease-in-out group-hover:translate-y-[-70%] group-hover:translate-x-[70%]");
  return (
    <svg
      width="200mm"
      height="200mm"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <g>
        <path
          className={pathClasses}
          stroke={stroke}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="40"
          d="M 15,15 V 185 H 185"
        />
        <g className={arrowClasses}>
          <path
            className={pathClasses}
            stroke={stroke}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="30"
            d="M 75,125 175,25 v 70"
          />
          <path
            className={pathClasses}
            stroke={stroke}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="30"
            d="M 175,25 H 100"
          />
        </g>
      </g>
    </svg>
  );
});
