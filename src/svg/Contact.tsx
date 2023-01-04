import classNames from "classnames";
import { memo } from "react";
import { IIconProps } from "./Home";

export const ContactIcon: React.FC<IIconProps> = memo(
  ({ stroke = "#fefcfbff", fill = "#ffffff00", className, pathClassName }) => {
    const classes = classNames(
      "transition-colors",
      "duration-200",
      "easeOut",
      className
    );
    const pathClasses = classNames(
      "transition-colors",
      "duration-200",
      "ease-in",
      pathClassName
    );
    return (
      <svg
        width="200mm"
        height="200mm"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className={classes}
      >
        <path
          className={pathClasses}
          fill="none"
          stroke={stroke}
          strokeWidth="15"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="13.6"
          strokeOpacity="1"
          d="M 20,170 V 75 l 160,95 V 75 H 20 L 100,122.5 180,75 20,170 h 160"
        />
      </svg>
    );
  }
);
