import { Axis, Orientation } from "@visx/axis";
import { curveNatural } from "@visx/curve";
import { GridRows } from "@visx/grid";
import { Group } from "@visx/group";
import { scaleLinear } from "@visx/scale";
import { LinePath } from "@visx/shape";
import { useContext } from "react";
import { ILanguageObject, LanguageContext } from "../context/LanguageProvider";
import { IForecast } from "../store";
import { max } from "d3-array";
import { dayScale, getDay } from "../utils/dayScale";
import { ForecastContext } from "../context/ForecastProvider";
import { IChartTypeProps } from "./ChartTemps";

const message: ILanguageObject = {
  EN: "Wind [km/h]",
  PL: "Wiatr [km/h]",
};

const getWindSpeed = (day: IForecast) => day.wind_speed;
const getWindGusts = (day: IForecast) => day.wind_gusts;

export const ChartWinds: React.FC<IChartTypeProps> = ({ dataState: { isLoading, error, data }, width, height, left = 0 }) => {
  const xScale = dayScale(data).range([0, width]);
  const { language } = useContext(LanguageContext);
  const { show } = useContext(ForecastContext);

  const domainMax = max(data, getWindGusts) as number;
  const windScale = scaleLinear<number>({
    domain: [0, domainMax + domainMax / 4],
  }).range([height, height * 0.1]);

  if (!show.includes("wind")) return null;

  return (
    <>
      <Axis
        orientation={Orientation.left}
        scale={windScale}
        left={left}
        label={message[language]}
        labelOffset={50}
        tickLabelProps={(d) => {
          return { dx: d > 9 ? -30 : -20, dy: 5 };
        }}
      />
      <GridRows
        scale={windScale}
        width={width}
        height={height}
        left={left}
        stroke="#b0b0b050"
      />
      <GridRows
        scale={windScale}
        width={width}
        height={height}
        left={left}
        stroke="#dd000080"
        tickValues={[0]}
      />
      <Group left={left}>
        <LinePath<IForecast>
          curve={curveNatural}
          data={data}
          x={(day) => xScale(getDay(day))}
          y={(day) => windScale(getWindSpeed(day))}
          stroke="#707070"
          strokeWidth={3}
          shapeRendering="geometricPrecision"
        />
      </Group>
      <Group left={left}>
        <LinePath<IForecast>
          curve={curveNatural}
          data={data}
          x={(day) => xScale(getDay(day))}
          y={(day) => windScale(getWindGusts(day))}
          stroke="#303030"
          strokeWidth={3}
          shapeRendering="geometricPrecision"
        />
      </Group>
    </>
  );
};
