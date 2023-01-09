import classNames from "classnames";
import { memo } from "react";
import { IIconProps } from "./HomeIcon";

export const ContactIcon: React.FC<IIconProps> = memo(
  ({ stroke = "#fefcfbff", selected, className = "w-8 h-8" }) => {
    const classes = classNames(
      "transition-colors",
      "duration-200",
      "ease-out",
      className
    );
    const pathClasses = classNames(
      "transition-all",
      "duration-200",
      "ease-out",
      {
        "stroke-theme-2": selected,
        "group-hover:stroke-theme-1": !selected,
      }
    );
    const envelopeHatchClasses = classNames(pathClasses, {
      "translate-y-0 scale-y-100 ease-out": selected,
      "translate-y-1/3 group-hover:translate-y-0 scale-y-[0.1] group-hover:scale-y-100":
        !selected,
    });
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
          d="M 20,170 V 80 l 160,90 V 80 H 20 m 160,0 -160,90 h 160"
        />
        <path
          className={envelopeHatchClasses}
          fill="none"
          stroke="#fafefb00"
          strokeWidth="15"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="13.6"
          strokeOpacity="1"
          d="m 20,80 80,-50 80,50"
        />
      </svg>
    );
  }
);
