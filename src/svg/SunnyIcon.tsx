import { memo } from "react";
import { IIconProps } from "./HomeIcon";

const Sunny: React.FC<IIconProps> = memo(({ ...rest }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fill="none"
        stroke="#eca400"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="1"
        d="m 50.66,64.185 12,8.718"
      />
      <path
        fill="none"
        stroke="#eca400"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="1"
        d="m 50.66,135.37 12,-8.718"
      />
      <path
        fill="none"
        stroke="#eca400"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="1"
        d="m 81.01,42.343 4.65,14.3127"
      />
      <path
        fill="none"
        stroke="#eca400"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="1"
        d="m 54.66,99.777147 h -15"
      />
      <path
        fill="none"
        stroke="#eca400"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="1"
        d="m 112.15962,56.656 4.65,-14.313"
      />
      <path
        fill="none"
        stroke="#eca400"
        strokeWidth="14.9996"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="1"
        d="m 77.978605,114.74756 c 3.860905,5.76518 10.071348,9.90548 16.878021,11.25201 6.806674,1.34652 14.125744,-0.11729 19.890934,-3.9782 5.76518,-3.8609 9.90547,-10.07135 11.252,-16.87802 1.34653,-6.806672 -0.11729,-14.125747 -3.97819,-19.890931 -3.8609,-5.765184 -10.07135,-9.905477 -16.87802,-11.252006 -6.806674,-1.346528 -14.125749,0.117289 -19.890933,3.978194 -5.765184,3.860905 -9.905477,10.071348 -11.252006,16.878021 -1.346528,6.806672 0.117289,14.125752 3.978194,19.890932 z"
      />
      <g>
        <path
          fill="none"
          stroke="#eca400"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="1"
          d="m 148.51497,135.7896 -12,-8.718"
        />
        <path
          fill="none"
          stroke="#eca400"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="1"
          d="m 148.51497,64.6046 -12,8.718"
        />
        <path
          fill="none"
          stroke="#eca400"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="1"
          d="m 118.16497,157.6316 -4.65,-14.3127"
        />
        <path
          fill="none"
          stroke="#eca400"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="1"
          d="m 144.51497,100.19745 h 15"
        />
        <path
          fill="none"
          stroke="#eca400"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="1"
          d="m 87.01535,143.3186 -4.65,14.313"
        />
      </g>
    </svg>
  );
});

export default Sunny;
