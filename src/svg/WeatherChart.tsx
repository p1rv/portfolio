interface IWeatherChartSVG {
  mono?: boolean;
}

export const WeatherChartSVG: React.FC<IWeatherChartSVG> = ({ mono }) => {
  return (
    <svg
      className="w-full h-full m-2"
      viewBox="0 0 820 255"
      xmlns="http=//www/2000/svg"
    >
      <g transform="translate(0,-132)">
        <g transform="matrix(0,0,0,1,0,-2)">
          <path
            stroke={mono ? "#ccc" : "#000000"}
            strokeWidth="0.5"
            strokeOpacity="0.4"
            d="M 89,140 V 365"
          />
          <path
            stroke={mono ? "#ccc" : "#000000"}
            strokeWidth="0.5"
            strokeOpacity="0.4"
            d="M 192,141 V 365"
          />
          <path
            stroke={mono ? "#ccc" : "#000000"}
            strokeWidth="0.5"
            strokeOpacity="0.4"
            d="M 295,141 V 365"
          />
          <path
            stroke={mono ? "#ccc" : "#000000"}
            strokeWidth="0.5"
            strokeOpacity="0.4"
            d="M 398,141 V 365"
          />
          <path
            stroke={mono ? "#ccc" : "#000000"}
            strokeWidth="0.5"
            strokeOpacity="0.4"
            d="M 501,141 V 365"
          />
          <path
            stroke={mono ? "#ccc" : "#000000"}
            strokeWidth="0.5"
            strokeOpacity="0.4"
            d="M 604,141 V 365"
          />
          <path
            stroke={mono ? "#ccc" : "#000000"}
            strokeWidth="0.5"
            strokeOpacity="0.4"
            d="M 707,141 V 365"
          />
        </g>
        <g id="g12606">
          <path
            stroke={mono ? "#ccc" : "#000000"}
            strokeWidth="1"
            strokeOpacity="0.6"
            d="M 38,365 H 34"
          />
          <path
            stroke={mono ? "#ccc" : "#000000"}
            strokeWidth="1"
            strokeOpacity="0.6"
            d="M 38,342 H 34"
          />
          <path
            stroke={mono ? "#ccc" : "#000000"}
            strokeWidth="1"
            strokeOpacity="0.6"
            d="M 38,320 H 34"
          />
          <path
            stroke={mono ? "#ccc" : "#000000"}
            strokeWidth="1"
            strokeOpacity="0.6"
            d="M 38,297 H 34"
          />
          <path
            stroke={mono ? "#ccc" : "#000000"}
            strokeWidth="1"
            strokeOpacity="0.6"
            d="M 38,275 H 34"
          />
          <path
            stroke={mono ? "#ccc" : "#000000"}
            strokeWidth="1"
            strokeOpacity="0.6"
            d="M 38,252 H 34"
          />
          <path
            stroke={mono ? "#ccc" : "#000000"}
            strokeWidth="1"
            strokeOpacity="0.6"
            d="M 38,230 H 34"
          />
          <path
            stroke={mono ? "#ccc" : "#000000"}
            strokeWidth="1"
            strokeOpacity="0.6"
            d="M 38,207 H 34"
          />
          <path
            stroke={mono ? "#ccc" : "#000000"}
            strokeWidth="1"
            strokeOpacity="0.6"
            d="M 38,185 H 34"
          />
          <path
            stroke={mono ? "#ccc" : "#000000"}
            strokeWidth="1"
            strokeOpacity="0.6"
            d="M 38,162 H 34"
          />
          <path
            stroke={mono ? "#ccc" : "#000000"}
            strokeWidth="1"
            strokeOpacity="0.6"
            d="M 38,140 H 34"
          />
        </g>
        <path
          stroke={mono ? "#ccc" : "#ff0000"}
          strokeWidth="0.5"
          strokeOpacity="0.4"
          d="M 38,320 H 759"
        />
        <path
          stroke={mono ? "#ccc" : "#323232"}
          strokeWidth="1"
          fill="none"
          d="M 38,140 V 365 H 759 V 140"
        />
        <g id="g12232">
          <rect
            fill={mono ? "#ccc" : "#007ea7"}
            stroke={mono ? "#ccc" : "#000000"}
            strokeWidth="0"
            strokeOpacity="0.6"
            width="81"
            height="106"
            x="151"
            y="258"
          />
          <rect
            fill={mono ? "#ccc" : "#007ea7"}
            stroke={mono ? "#ccc" : "#000000"}
            strokeWidth="0"
            strokeOpacity="0.6"
            width="81"
            height="22"
            x="254"
            y="342"
          />
          <rect
            fill={mono ? "#ccc" : "#007ea7"}
            stroke={mono ? "#ccc" : "#000000"}
            strokeWidth="0"
            strokeOpacity="0.6"
            width="81"
            height="11"
            x="563"
            y="353"
          />
        </g>
        <g transform="matrix(0,0,0,1,126,-0)">
          <path
            stroke={mono ? "#ccc" : "#000000"}
            strokeWidth="1"
            strokeOpacity="0.6"
            d="m 763,365 h -3"
          />
          <path
            stroke={mono ? "#ccc" : "#000000"}
            strokeWidth="1"
            strokeOpacity="0.6"
            d="m 763,327 h -3"
          />
          <path
            stroke={mono ? "#ccc" : "#000000"}
            strokeWidth="1"
            strokeOpacity="0.6"
            d="m 763,290 h -3"
          />
          <path
            stroke={mono ? "#ccc" : "#000000"}
            strokeWidth="1"
            strokeOpacity="0.6"
            d="m 763,252 h -3"
          />
          <path
            stroke={mono ? "#ccc" : "#000000"}
            strokeWidth="1"
            strokeOpacity="0.6"
            d="m 763,215 h -3"
          />
          <path
            stroke={mono ? "#ccc" : "#000000"}
            strokeWidth="1"
            strokeOpacity="0.6"
            d="m 763,178 h -3"
          />
          <path
            stroke={mono ? "#ccc" : "#000000"}
            strokeWidth="1"
            strokeOpacity="0.6"
            d="m 763,140 h -3"
          />
        </g>
        <g
          id="g13928"
          transform="translate(-3,3)"
        >
          <text
            fontSize="12px"
            fill={mono ? "#ccc" : "#323232"}
            transform="rotate(-90,11,260)"
            x="-20"
            y="250"
          >
            Temperature [°C]
          </text>
          <text
            fontSize="12px"
            fill={mono ? "#ccc" : "#323232"}
            transform="rotate(90,785,163)"
            x="780"
            y="140"
          >
            Precipitation [mm]
          </text>
          <text
            fontSize="12px"
            fill={mono ? "#ccc" : "#323232"}
            transform="translate(-14,4)"
            x="785"
            y="365"
          >
            0
          </text>
          <text
            fontSize="12px"
            fill={mono ? "#ccc" : "#323232"}
            x="770"
            y="330"
          >
            10
          </text>
          <text
            fontSize="12px"
            fill={mono ? "#ccc" : "#323232"}
            x="770"
            y="293"
          >
            20
          </text>
          <text
            fontSize="12px"
            fill={mono ? "#ccc" : "#323232"}
            x="770"
            y="256"
          >
            30
          </text>
          <text
            fontSize="12px"
            fill={mono ? "#ccc" : "#323232"}
            x="770"
            y="218"
          >
            40
          </text>
          <text
            fontSize="12px"
            fill={mono ? "#ccc" : "#323232"}
            x="770"
            y="181"
          >
            50
          </text>
          <text
            fontSize="12px"
            fill={mono ? "#ccc" : "#323232"}
            x="770"
            y="149"
          >
            60
          </text>
          <text
            fontSize="12px"
            fill={mono ? "#ccc" : "#323232"}
            x="18"
            y="145"
          >
            <tspan
              x="18"
              y="145"
            >
              16
            </tspan>
          </text>
          <text
            fontSize="12px"
            fill={mono ? "#ccc" : "#323232"}
            x="18"
            y="167"
          >
            <tspan
              x="18"
              y="167"
            >
              14
            </tspan>
          </text>
          <text
            fontSize="12px"
            fill={mono ? "#ccc" : "#323232"}
            x="18"
            y="189"
          >
            <tspan
              x="18"
              y="189"
            >
              12
            </tspan>
          </text>
          <text
            fontSize="12px"
            fill={mono ? "#ccc" : "#323232"}
            x="18"
            y="211"
          >
            <tspan
              x="18"
              y="211"
            >
              10
            </tspan>
          </text>
          <text
            fontSize="12px"
            fill={mono ? "#ccc" : "#323232"}
            x="25"
            y="234"
          >
            <tspan
              x="25"
              y="234"
            >
              8
            </tspan>
          </text>
          <text
            fontSize="12px"
            fill={mono ? "#ccc" : "#323232"}
            x="25"
            y="256"
          >
            <tspan
              x="25"
              y="256"
            >
              6
            </tspan>
          </text>
          <text
            fontSize="12px"
            fill={mono ? "#ccc" : "#323232"}
            x="25"
            y="279"
          >
            <tspan
              x="25"
              y="279"
            >
              4
            </tspan>
          </text>
          <text
            fontSize="12px"
            fill={mono ? "#ccc" : "#323232"}
            x="25"
            y="301"
          >
            <tspan
              x="25"
              y="301"
            >
              2
            </tspan>
          </text>
          <text
            fontSize="12px"
            fill={mono ? "#ccc" : "#323232"}
            x="25"
            y="324"
          >
            <tspan
              x="25"
              y="324"
            >
              0
            </tspan>
          </text>
          <text
            fontSize="12px"
            fill={mono ? "#ccc" : "#323232"}
            x="18"
            y="346"
          >
            -2
          </text>
          <text
            fontSize="12px"
            fill={mono ? "#ccc" : "#323232"}
            x="18"
            y="368"
          >
            -4
          </text>
        </g>
        <path
          stroke={mono ? "#ccc" : "#8daefe"}
          strokeWidth="2"
          fill="none"
          d="m 89,319 c 105,3 102,3 102,3 32,-0 75,-25 103,-25 36,0 71,20 103,20 44,-2 89,-18 102,-18 77,-14 80,-15 102,-15 41,1 56,10 103,26"
        />
        <path
          stroke={mono ? "#ccc" : "#ff6b6b"}
          strokeWidth="2"
          fill="none"
          d="m 89,255 c 74,-66 73,-72 207,-70 36,2 66,84 100,83 44,-3 77,-28 103,-34 86,-22 91,-21 103,-21 39,1 88,17 102,21"
        />
        <text
          fontSize="12px"
          fill={mono ? "#ccc" : "#323232"}
          stroke="none"
          strokeWidth="1"
          x="55"
          y="383"
        >
          <tspan
            x="55"
            y="383"
          >
            Mon, 23
          </tspan>
        </text>
        <text
          fontSize="12px"
          fill={mono ? "#ccc" : "#323232"}
          stroke="none"
          strokeWidth="1"
          x="161"
          y="383"
        >
          <tspan
            x="161"
            y="383"
          >
            Tue, 24
          </tspan>
        </text>
        <text
          fontSize="12px"
          fill={mono ? "#ccc" : "#323232"}
          stroke="none"
          strokeWidth="1"
          x="261"
          y="384"
        >
          <tspan
            x="261"
            y="384"
          >
            Wed, 25
          </tspan>
        </text>
        <text
          fontSize="12px"
          fill={mono ? "#ccc" : "#323232"}
          stroke="none"
          strokeWidth="1"
          x="366"
          y="384"
        >
          <tspan
            x="366"
            y="384"
          >
            Thu, 26
          </tspan>
        </text>
        <text
          fontSize="12px"
          fill={mono ? "#ccc" : "#323232"}
          stroke="none"
          strokeWidth="1"
          x="473"
          y="384"
        >
          <tspan
            x="473"
            y="384"
          >
            Fri, 27
          </tspan>
        </text>
        <text
          fontSize="12px"
          fill={mono ? "#ccc" : "#323232"}
          stroke="none"
          strokeWidth="1"
          x="573"
          y="383"
        >
          <tspan
            x="573"
            y="383"
          >
            Sat, 28
          </tspan>
        </text>
        <text
          fontSize="12px"
          fill={mono ? "#ccc" : "#323232"}
          stroke="none"
          strokeWidth="1"
          x="675"
          y="383"
        >
          <tspan
            x="675"
            y="383"
          >
            Sun, 29
          </tspan>
        </text>
      </g>
    </svg>
  );
};
