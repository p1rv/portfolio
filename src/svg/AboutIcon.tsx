import classNames from "classnames";
import { memo } from "react";
import { IIconProps } from "./HomeIcon";

export const AboutIcon: React.FC<IIconProps> = memo(({ stroke = "#fefcfbff", selected, className = "w-6 h-6" }) => {
  const classes = classNames("transition-colors", "duration-200", "ease-out", className);
  const pathClasses = classNames("transition-all", "duration-200", "ease-out", {
    "stroke-theme-2": selected,
    "group-hover:stroke-theme-1": !selected,
  });
  const fillClasses = classNames(pathClasses, {
    "fill-theme-2": selected,
    "group-hover:fill-theme-1": !selected,
  });
  return (
    <svg
      width="200mm"
      height="200mm"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <g id="layer1">
        <circle
          className={pathClasses}
          stroke={stroke}
          fill="0"
          strokeWidth="20"
          cx="100"
          cy="100"
          r="80"
        />
        <path
          className={fillClasses}
          fill={stroke}
          d="m 80.991735,153.95247 37.982675,0.0367 0.0263,-3.76271 c -6.86047,-0.51993 -7.21905,-3.91207 -7.50004,-9.01769 l 0.0127,-59.249644 -30.508698,-0.01681 -0.023,3.745552 c 5.119108,1.290259 8.675643,1.402144 8.440464,9.789796 0,6.876396 -0.02147,45.622016 -0.02147,45.622016 -0.01234,2.71959 -0.396096,5.06231 -1.868739,6.55571 -1.215401,1.23254 -3.138865,1.75915 -6.511011,2.57651 l -0.02973,3.72112"
        />
        <circle
          className={fillClasses}
          fill={stroke}
          cx="100"
          cy="58.5"
          r="12.5"
        />
      </g>
    </svg>
  );
});
