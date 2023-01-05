import classNames from "classnames";
import { memo } from "react";

export interface IIconProps {
  stroke?: string;
  fill?: string;
  className?: string;
  pathClassName?: string;
  selected?: boolean;
  onClick?: (e: React.MouseEvent<HTMLOrSVGElement, MouseEvent>) => any;
  [key: string]: any;
}

export const HomeIcon: React.FC<IIconProps> = memo(
  ({
    stroke = "#fefcfb",
    fill = "none",
    className,
    pathClassName,
    ...rest
  }) => {
    const classes = classNames(
      "transition-colors",
      "duration-200",
      "ease-out",
      className
    );
    const pathClasses = classNames(
      "transition-colors",
      "duration-200",
      "ease-out",
      pathClassName
    );
    return (
      <svg
        width="200mm"
        height="200mm"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className={classes}
        {...rest}
      >
        <path
          className={pathClasses}
          fill={fill}
          stroke={stroke}
          strokeWidth="15"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="13.6"
          strokeDasharray="none"
          strokeOpacity="1"
          paintOrder="normal"
          d="m 30,105 v 70 h 140 v -70"
        />
        <path
          className={pathClasses}
          fill={fill}
          stroke={stroke}
          strokeWidth="15"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="13.6"
          strokeDasharray="none"
          strokeOpacity="1"
          paintOrder="normal"
          d="M 10,85 100,12.5 190,85"
        />
        <path
          className={pathClasses}
          fill={fill}
          stroke={stroke}
          strokeWidth="15"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="13.6"
          strokeDasharray="none"
          strokeOpacity="1"
          paintOrder="normal"
          d="m 80,175 v -75 h 40 v 75"
        />
        <path
          className={pathClasses}
          fill={fill}
          stroke={stroke}
          strokeWidth="15"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="13.6"
          strokeDasharray="none"
          strokeOpacity="1"
          paintOrder="normal"
          d="m 145,15 h 25 v 20"
        />
      </svg>
    );
  }
);
