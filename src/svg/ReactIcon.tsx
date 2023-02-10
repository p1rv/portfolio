import classNames from "classnames";
import { memo } from "react";
import { IIconProps } from "./HomeIcon";

export const ReactIcon: React.FC<IIconProps> = memo(({ stroke = "#fefcfbff", className = "w-6 h-6", selected, infinite }) => {
  const classes = classNames(
    "transition-all duration-700 ease-in-out",
    {
      "group-hover:rotate-[120deg]": !selected && !infinite,
      "rotate-[120deg]": selected && !infinite,
      "animate-[rotate_3s_infinite_linear] group-hover:animate-none group-hover:!rotate-0": infinite,
    },
    className
  );
  const pathClasses = classNames("transition-colors", "duration-200", "ease-out", {
    "stroke-theme-2 fill-theme-2": selected,
    "group-hover:stroke-theme-1 group-hover:fill-theme-2": !selected,
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
        fillOpacity="0"
        stroke={stroke}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="13.6"
        strokeDasharray="none"
        strokeOpacity="1"
        d="M 57.860098,27.223934 C 77.746879,16.011673 113.09366,57.25109 127.94159,84.157242"
      />
      <path
        className={pathClasses}
        fillOpacity="0"
        stroke={stroke}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="13.6"
        strokeDasharray="none"
        strokeOpacity="1"
        d="M 142.09788,172.68448 C 122.2111,183.89674 86.86432,142.65733 72.01639,115.75118"
      />
      <path
        className={pathClasses}
        fillOpacity="0"
        stroke={stroke}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="13.6"
        strokeDasharray="none"
        strokeOpacity="1"
        d="M 58.020322,27.146341 C 38.796419,38.227869 55.728766,88.641956 72.255557,116.06313"
      />
      <path
        className={pathClasses}
        fillOpacity="0"
        stroke={stroke}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="13.6"
        strokeDasharray="none"
        strokeOpacity="1"
        d="m 142.00441,172.73284 c 19.2239,-11.08152 2.29155,-61.49561 -14.23524,-88.916794"
      />
      <path
        className={pathClasses}
        fillOpacity="0"
        stroke={stroke}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="13.6"
        strokeDasharray="none"
        strokeOpacity="1"
        d="M 142.16513,27.224429 C 122.27835,16.012168 86.931569,57.251585 72.083639,84.157737"
      />
      <path
        className={pathClasses}
        fillOpacity="0"
        stroke={stroke}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="13.6"
        strokeDasharray="none"
        strokeOpacity="1"
        d="m 57.927349,172.68497 c 19.88678,11.21226 55.233561,-30.02714 70.081491,-56.93329"
      />
      <path
        className={pathClasses}
        fillOpacity="0"
        stroke={stroke}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="13.6"
        strokeDasharray="none"
        strokeOpacity="1"
        d="m 142.00491,27.146836 c 19.2239,11.081528 2.29155,61.495615 -14.23524,88.916794"
      />
      <path
        className={pathClasses}
        fillOpacity="0"
        stroke={stroke}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="13.6"
        strokeDasharray="none"
        strokeOpacity="1"
        d="m 58.020819,172.73333 c -19.2239,-11.08152 -2.29155,-61.4956 14.23524,-88.916789"
      />
      <path
        className={pathClasses}
        fillOpacity="0"
        stroke={stroke}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="13.6"
        strokeDasharray="none"
        strokeOpacity="1"
        d="M 184.15999,99.941798 C 183.90605,77.113432 130.50926,67.170231 99.784437,67.792416"
      />
      <path
        className={pathClasses}
        fillOpacity="0"
        stroke={stroke}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="13.6"
        strokeDasharray="none"
        strokeOpacity="1"
        d="m 16.068446,99.872066 c 0.253938,22.828364 53.650711,32.771574 84.375534,32.149394"
      />
      <path
        className={pathClasses}
        fillOpacity="0"
        stroke={stroke}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="13.6"
        strokeDasharray="none"
        strokeOpacity="1"
        d="m 184.14691,99.764259 c 0.0351,22.189131 -52.08135,32.779471 -84.09272,32.206401"
      />
      <path
        className={pathClasses}
        fillOpacity="0"
        stroke={stroke}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="13.6"
        strokeDasharray="none"
        strokeOpacity="1"
        d="M 16.073395,99.977189 C 16.038251,77.788066 68.154741,67.197723 100.16611,67.770793"
      />
      <circle
        className={pathClasses}
        opacity="1"
        fill={stroke}
        fillOpacity="1"
        stroke={stroke}
        strokeWidth="7.50001"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="13.6"
        strokeDasharray="none"
        strokeOpacity="1"
        r="11.915482"
        cy="100.01111"
        cx="100.02277"
      />
    </svg>
  );
});
