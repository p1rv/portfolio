import { Axis, Orientation } from "@visx/axis";
import { curveNatural } from "@visx/curve";
import { GridRows } from "@visx/grid";
import { Group } from "@visx/group";
import { scaleLinear } from "@visx/scale";
import { Bar, BarStack, LinePath } from "@visx/shape";
import { useContext } from "react";
import { ILanguageObject, LanguageContext } from "../context/LanguageProvider";
import { IForecast, IForecastState } from "../store";
import { max } from "d3-array";
import { dayScale, getDay } from "./ChartWrapper";
import { ForecastContext } from "../context/ForecastProvider";
import { IChartTypeProps } from "./ChartTemps";

const message: ILanguageObject = {
  EN: "Precipitation [mm]",
  PL: "Opady [mm]",
};

const getPrecip = (day: IForecast) => day.precip_sum;
const getRain = (day: IForecast) => day.rain;
const getSnow = (day: IForecast) => day.snow;
const getShowers = (day: IForecast) => day.showers;

interface IChartPrecipProps extends IChartTypeProps {
  singleBar: boolean;
}

export const ChartPrecip: React.FC<IChartPrecipProps> = ({ dataState: { isLoading, error, data }, width, height, left = 0, singleBar }) => {
  const xScale = dayScale(data).range([0, width]);
  const { language } = useContext(LanguageContext);
  const { show } = useContext(ForecastContext);

  const maxValue = max(data, getPrecip) as number;
  const precipScale = scaleLinear<number>({
    domain: [0, maxValue * 3],
  }).range([height, height * 0.1]);
  const domainMax = precipScale.range()[0] as number;

  if (!show.includes("precip")) return null;

  return (
    <>
      <Axis
        orientation={Orientation.right}
        scale={precipScale}
        left={width + left}
        label={message[language]}
        labelOffset={50}
        tickLabelProps={(d) => {
          return { dx: d > 9 ? 10 : 15, dy: 5 };
        }}
      />
      <Group left={left}>
        {data.map((day, dayIndex) => {
          if (singleBar) {
            return (
              <>
                <Bar
                  x={0 + (dayIndex * width) / data.length}
                  y={precipScale(getPrecip(day))}
                  width={width / data.length}
                  height={domainMax - precipScale(getPrecip(day))}
                  fill="#00a8e8"
                />
                <text
                  x={0 + (dayIndex * width) / data.length}
                  textAnchor="middle"
                  dx={width / data.length / 2}
                  y={precipScale(getPrecip(day)) - 5}
                >
                  <tspan>{day.precip_sum}</tspan>
                </text>
              </>
            );
          }
          return (
            <>
              <Bar
                x={0 + (dayIndex * width) / data.length}
                y={precipScale(getShowers(day))}
                width={width / data.length}
                height={domainMax - precipScale(getShowers(day))}
                fill="#007ea7"
              />
              <Bar
                x={0 + (dayIndex * width) / data.length}
                y={precipScale(getRain(day)) - (domainMax - precipScale(getShowers(day)))}
                width={width / data.length}
                height={domainMax - precipScale(getRain(day))}
                fill="#00a8e8"
              />
              <Bar
                x={0 + (dayIndex * width) / data.length}
                y={precipScale(getSnow(day)) - (domainMax - precipScale(getShowers(day)) + domainMax - precipScale(getRain(day)))}
                width={width / data.length}
                height={domainMax - precipScale(getSnow(day))}
                fill="#00c8f8"
              />
              <text
                x={0 + (dayIndex * width) / data.length}
                textAnchor="middle"
                dx={width / data.length / 2}
                y={precipScale(getPrecip(day)) - 5}
              >
                <tspan>{day.precip_sum}</tspan>
              </text>
            </>
          );
        })}
      </Group>
    </>
  );
};
