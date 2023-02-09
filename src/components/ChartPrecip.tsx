import { Axis, Orientation } from "@visx/axis";
import { Group } from "@visx/group";
import { scaleLinear } from "@visx/scale";
import { Bar } from "@visx/shape";
import { Fragment, useContext } from "react";
import { ILanguageObject, LanguageContext } from "../context/LanguageProvider";
import { IForecast } from "../store";
import { max } from "d3-array";
import { ForecastContext } from "../context/ForecastProvider";
import { ChartComponentContext } from "../context/ChartComponentProvider";

const message: ILanguageObject = {
  EN: "Precipitation [mm]",
  PL: "Opady [mm]",
};

const getPrecip = (day: IForecast) => day.precip_sum;
const getRain = (day: IForecast) => day.rain;
const getSnow = (day: IForecast) => day.snow;
const getShowers = (day: IForecast) => day.showers;

export const ChartPrecip: React.FC = () => {
  const { data, width, height, left = 0, singleBar } = useContext(ChartComponentContext);
  const { language } = useContext(LanguageContext);
  const { show } = useContext(ForecastContext);

  const maxValue = max(data, getPrecip) as number;

  const precipScale = scaleLinear<number>({
    domain: [0, maxValue * 4],
  }).range([height, height * 0.1]);

  const domainMax = precipScale.range()[0] as number;

  if (!show.includes("precip") || maxValue === 0) return null;

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
        hideTicks
      />
      <Group left={left}>
        {data.map((day, dayIndex) => {
          if (singleBar) {
            return (
              <Fragment key={`precip-${dayIndex}`}>
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
                  <tspan>{day.precip_sum > 0 && day.precip_sum}</tspan>
                </text>
              </Fragment>
            );
          }
          return (
            <Fragment key={`precip-${dayIndex}`}>
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
                y={precipScale(getSnow(day)) - (2 * domainMax - precipScale(getShowers(day)) - precipScale(getRain(day)))}
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
                <tspan>{day.precip_sum > 0 && day.precip_sum}</tspan>
              </text>
            </Fragment>
          );
        })}
      </Group>
    </>
  );
};
