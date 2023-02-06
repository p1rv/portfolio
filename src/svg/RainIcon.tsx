import { memo } from "react";
import { IIconProps } from "./HomeIcon";

const Rain: React.FC<IIconProps> = memo(({ stroke = "#00a8e8", fill, ...rest }) => {
  return (
    <svg
      width="40px"
      height="40px"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g>
        <path
          fill="none"
          stroke="#eca400"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m 21.578,55.642 12,8.718"
        />
        <path
          fill="none"
          stroke="#eca400"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m 21.578,126.827 12,-8.718"
        />
        <path
          fill="none"
          stroke="#eca400"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m 51.928,33.8 4.65,14.3127"
        />
        <path
          fill="none"
          stroke="#eca400"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m 25.578,91.234147 h -15"
        />
        <path
          fill="none"
          stroke="#eca400"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m 83.077618,48.113 4.65,-14.313"
        />
        <path
          fill="none"
          stroke="#eca400"
          strokeWidth="15"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m 53.02219,111.02541 c -4.345818,-3.87435 -7.349712,-9.22642 -8.393194,-14.954234 -1.043481,-5.727817 -0.11999,-11.795366 2.580332,-16.953369 2.700323,-5.158003 7.160496,-9.374026 12.462192,-11.780009 5.301696,-2.405983 11.411577,-2.986798 17.071648,-1.622857 4.123777,0.993731 7.999494,3.000662 11.190926,5.794907"
        />
        <path
          fill="none"
          stroke={stroke}
          strokeWidth="15"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m 81.801048,99.547316 c -1.334374,-7.782367 0.308385,-16.037735 4.520403,-22.71641 4.212018,-6.678675 10.953901,-11.718195 18.551739,-13.867317 7.59783,-2.149121 15.98055,-1.387745 23.06685,2.095089 7.0863,3.482835 12.80991,9.654555 15.74972,16.982808 1.73994,4.337265 2.52428,9.054945 2.28133,13.721877"
        />
        <path
          fill="none"
          stroke={stroke}
          strokeWidth="14.8091"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m 146.26189,95.969114 c 6.42881,-1.354939 13.39965,0.103275 18.7463,3.921497 5.34665,3.818219 8.98809,9.938589 9.79273,16.459179 0.80464,6.52059 -1.23972,13.34258 -5.49778,18.34602 -4.25807,5.00344 -10.66531,8.1125 -17.23065,8.36103 -0.59942,0.0227 -1.1997,0.0227 -1.79913,8e-5"
        />
        <path
          fill="none"
          stroke={stroke}
          strokeWidth="15.092"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m 81.632768,100.51292 c -5.691658,-1.265159 -11.883546,-0.091 -16.71691,3.17001 -4.833364,3.26102 -8.240246,8.56302 -9.197928,14.31441 -0.957682,5.75139 0.547302,11.87128 4.063167,16.52255 3.515865,4.65127 8.993178,7.76851 14.787694,8.41595 1.464041,0.16358 2.944883,0.1764 4.411537,0.0382"
        />
        <path
          fill="none"
          stroke="#1282a2"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 104.6335,139.22674 92.274211,167.66781"
        />
        <path
          fill="none"
          stroke="#1282a2"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m 127.23771,138.70175 -12.35929,28.44107"
        />
      </g>
    </svg>
  );
});

export default Rain;
