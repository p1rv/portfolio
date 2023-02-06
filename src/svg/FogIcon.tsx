import { memo } from "react";
import { IIconProps } from "./HomeIcon";

const Fog: React.FC<IIconProps> = memo(({ stroke = "#00a8e8", fill, ...rest }) => {
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
          stroke={stroke}
          strokeWidth="15"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 68.879162,85.619694 C 67.544788,77.837327 69.187547,69.58196 73.399564,62.903285 77.611582,56.22461 84.353465,51.185091 91.951298,49.035969 c 7.597832,-2.149122 15.980552,-1.387746 23.066852,2.095088 7.0863,3.482835 12.80991,9.654554 15.74972,16.982807 1.73994,4.337265 2.52428,9.054945 2.28133,13.721877"
        />
        <path
          fill="none"
          stroke={stroke}
          strokeWidth="15"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m 133.34,82.041492 c 6.42881,-1.354939 13.39965,0.103275 18.7463,3.921497 5.34666,3.818222 8.9881,9.938591 9.79273,16.459181 0.80464,6.52058 -1.23972,13.34258 -5.49778,18.34602 -4.25807,5.00344 -10.66531,8.1125 -17.23065,8.36103 -0.59942,0.0227 -1.1997,0.0227 -1.79913,8e-5"
        />
        <path
          fill="none"
          stroke={stroke}
          strokeWidth="15"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m 68.710882,86.585298 c -5.691658,-1.265159 -11.883547,-0.091 -16.716911,3.170015 -4.833364,3.261011 -8.240246,8.563019 -9.197928,14.314407 -0.957682,5.75139 0.547302,11.87128 4.063167,16.52255 3.515865,4.65127 8.993178,7.76851 14.787695,8.41595 1.464041,0.16358 2.944883,0.1764 4.411537,0.0382"
        />
        <path
          fill="none"
          stroke={"#a0a0a0"}
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m 53,148.27564 c 43.564199,15.77551 57.65255,-13.87463 98.87846,0.94309"
        />
        <path
          fill="none"
          stroke={"#a0a0a0"}
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m 53,166.27564 c 43.564201,15.77551 57.65255,-13.87463 98.87846,0.94309"
        />
      </g>
    </svg>
  );
});

export default Fog;
