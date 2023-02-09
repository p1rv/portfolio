import { useContext, useEffect, useState } from "react";
import { IForecastState } from "../store";
import { ChartPrecip } from "./ChartPrecip";
import { ChartTemps } from "./ChartTemps";
import { ChartWinds } from "./ChartWinds";
import { IMessagesWithLanguage, LanguageContext } from "../context/LanguageProvider";
import { GridColumns } from "@visx/grid";
import { Axis, Orientation } from "@visx/axis";
import { RenderDateTick } from "../utils/RenderDateTick";
import { dayScale } from "../utils/dayScale";
import { ChartTooltip } from "./ChartTooltip";
import { ChartComponentProvider } from "../context/ChartComponentProvider";

interface IChartWrapperProps {
  data: IForecastState;
  source: "OpenMeteo" | "StormGlass" | "VisualCrossing" | "WeatherBit" | "collapsed";
}

const chartMessages: IMessagesWithLanguage = {
  error: {
    EN: "Error during data retrieval, please try again later...",
    PL: "Błąd podczas pobierania danych, spróbuj ponownie...",
  },
};

export const ChartWrapper: React.FC<IChartWrapperProps> = ({ data: { isLoading, error, data }, source }) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const { language } = useContext(LanguageContext);

  const recalculateScreenSize = () => {
    const newWidth = window.innerWidth * 0.64;
    newWidth < 900 ? setWidth(1000) : setWidth(newWidth);
    const newHeight = window.innerHeight * 0.4;
    newHeight < 350 ? setHeight(350) : setHeight(newHeight);
  };

  const chartWidth = width * 0.8;
  const chartHeight = height * 0.85;

  useEffect(() => {
    recalculateScreenSize();
    window.addEventListener("resize", recalculateScreenSize);
    return () => window.removeEventListener("resize", recalculateScreenSize);
  }, []);

  const getDefaultContent = () => {
    if (isLoading) {
      return (
        <div className="after:content-[' '] after:w-16 after:h-16 after:rounded-full after:border-8 after:border-theme-3 after:border-l-transparent after:block after:animate-spin after:transition-all after:duration-200" />
      );
    }
    if (error) {
      return <div>{chartMessages.error[language]}</div>;
    }
  };

  if (isLoading || data.length === 0 || error) {
    const content = getDefaultContent();
    return (
      <div
        className="w-full sm:!w-[96vw] m-auto flex justify-center items-center rounded-[30px]"
        style={{
          width,
          height,
        }}
      >
        {content}
      </div>
    );
  }

  const xScale = dayScale(data).range([0, chartWidth]);
  const tickFormatter = xScale.tickFormat(data.length, "%a, %Y %b %d");

  const getColumnTickValues = data.map(({ time }) => new Date(new Date(time).getTime() + 39600000));
  return (
    <div className="w-full overflow-x-auto h-max">
      <div className="w-max m-auto">
        <svg
          width={width}
          height={height}
        >
          <GridColumns
            scale={xScale}
            width={100}
            height={chartHeight - 30}
            left={(width - chartWidth) / 2}
            top={30}
            stroke="#ddd"
            tickValues={getColumnTickValues}
          />
          <Axis
            orientation={Orientation.bottom}
            scale={xScale}
            top={chartHeight}
            left={(width - chartWidth) / 2}
            tickValues={data.map((day) => new Date(day.time).setHours(0))}
            //@ts-ignore ts doesn't support alternative date formats
            tickFormat={tickFormatter}
            hideTicks
            tickComponent={RenderDateTick}
          />
          <ChartComponentProvider
            data={data}
            width={chartWidth}
            height={chartHeight}
            left={(width - chartWidth) / 2}
            singleBar={["StormGlass", "collapsed"].includes(source)}
          >
            <ChartPrecip />
            <ChartTemps />
            <ChartWinds />
            <ChartTooltip />
          </ChartComponentProvider>
        </svg>
      </div>
    </div>
  );
};
