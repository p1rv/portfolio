import classNames from "classnames";
import { memo } from "react";
import { IIconProps } from "./HomeIcon";

export const WeatherIcon: React.FC<IIconProps> = memo(({ stroke = "#fefcfbff", className = "w-8 h-8", selected, fill, ...rest }) => {
  const classes = classNames("transition-colors", "duration-200", "ease-out", className);
  const pathClasses = classNames("transition-colors", "duration-200", "ease-out", {
    "stroke-theme-2 fill-theme-2": selected,
    "group-hover:stroke-theme-1 group-hover:fill-theme-1": !selected,
  });
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
        fill="none"
        fillOpacity="1"
        stroke="#eca400"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="13.6"
        strokeDasharray="none"
        strokeOpacity="1"
        paintOrder="normal"
        d="m 21.578,55.642 12,8.718"
      />
      <path
        fill="none"
        fillOpacity="1"
        stroke="#eca400"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="13.6"
        strokeDasharray="none"
        strokeOpacity="1"
        paintOrder="normal"
        d="m 21.578,126.827 12,-8.718"
      />
      <path
        fill="none"
        fillOpacity="1"
        stroke="#eca400"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="13.6"
        strokeDasharray="none"
        strokeOpacity="1"
        paintOrder="normal"
        d="m 51.928,33.8 4.65,14.3127"
      />
      <path
        fill="none"
        fillOpacity="1"
        stroke="#eca400"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="13.6"
        strokeDasharray="none"
        strokeOpacity="1"
        paintOrder="normal"
        d="m 25.578,91.234147 h -15"
      />
      <path
        fill="none"
        fillOpacity="1"
        stroke="#eca400"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="13.6"
        strokeDasharray="none"
        strokeOpacity="1"
        paintOrder="normal"
        d="m 83.077618,48.113 4.65,-14.313"
      />
      <path
        fill="none"
        fillOpacity="1"
        stroke="#eca400"
        strokeWidth="15"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="13.6"
        strokeDasharray="none"
        strokeOpacity="1"
        paintOrder="normal"
        d="m 53.02219,111.02541 c -4.345818,-3.87435 -7.349712,-9.22642 -8.393194,-14.954234 -1.043481,-5.727817 -0.11999,-11.795366 2.580332,-16.953369 2.700323,-5.158003 7.160496,-9.374026 12.462192,-11.780009 5.301696,-2.405983 11.411577,-2.986798 17.071648,-1.622857 4.123777,0.993731 7.999494,3.000662 11.190926,5.794907"
      />

      <path
        className={pathClasses}
        fill={fill}
        fillOpacity="1"
        stroke={stroke}
        strokeWidth="15"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="13.6"
        strokeDasharray="none"
        strokeOpacity="1"
        paintOrder="normal"
        d="m 77.66513,143.07597 c -2.158637,0.0767 -4.328483,-0.16968 -6.414935,-0.72854 -5.445461,-1.45857 -10.266518,-5.12049 -13.132497,-9.97504 -2.865979,-4.85455 -3.743257,-10.84476 -2.389694,-16.31727 1.353564,-5.4725 4.922088,-10.3631 9.720615,-13.32192 4.798527,-2.958813 10.770762,-3.951139 16.268289,-2.70308 -1.363466,-7.788495 0.245302,-16.060114 4.428558,-22.769814 4.183255,-6.709699 10.902226,-11.795291 18.495744,-13.999432 7.59351,-2.204142 15.99119,-1.506405 23.11682,1.920706 7.12563,3.42711 12.91317,9.551829 15.93173,16.859906 1.80037,4.35877 2.63497,9.113401 2.42673,13.824753 6.4501,-1.397484 13.46143,0.0332 18.84834,3.846062 5.38691,3.812859 9.0672,9.949729 9.89361,16.497529 0.8264,6.54781 -1.21368,13.40665 -5.48429,18.4384 -4.27062,5.03175 -10.70661,8.15965 -17.30166,8.40861 -0.59943,0.0226 -1.1997,0.0227 -1.79913,8e-5"
      />
      <path
        className={pathClasses}
        fill="none"
        stroke={stroke}
        strokeWidth="15"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="13.6"
        strokeDasharray="none"
        strokeOpacity="1"
        paintOrder="normal"
        d="m 77.162374,143.07697 72.850106,-0.003"
      />
    </svg>
  );
});
