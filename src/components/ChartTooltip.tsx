import { localPoint } from "@visx/event";
import { Group } from "@visx/group";
import { Bar, Line } from "@visx/shape";
import { useTooltip, useTooltipInPortal } from "@visx/tooltip";
import { Fragment, useState } from "react";
import { IForecast } from "../store";
import { IChartTypeProps } from "./ChartTemps";
import { TooltipWindow } from "./TooltipWindow";

export const ChartTooltip: React.FC<IChartTypeProps> = ({ data, width, height, left = 0 }) => {
  const [lineLeft, setLineLeft] = useState(0);
  const {
    tooltipData,
    tooltipLeft = 0,
    tooltipTop = 0,
    tooltipOpen,
    showTooltip,
    hideTooltip,
  } = useTooltip({ tooltipData: {} as IForecast });
  const { TooltipInPortal } = useTooltipInPortal({ detectBounds: true, scroll: true });
  const handleMouseMove = (day: IForecast, event: React.MouseEvent<SVGRectElement, MouseEvent>) => {
    const { clientX, clientY } = event;
    const { x } = localPoint(event) || { x: 0 };
    setLineLeft(x);
    showTooltip({
      tooltipLeft: clientX,
      tooltipTop: clientY,
      tooltipData: day,
    });
  };

  return (
    <Fragment>
      <Group left={left}>
        {data.map((day, dayIndex) => (
          <Fragment key={`precip-${dayIndex}`}>
            <Bar
              x={0 + (dayIndex * width) / data.length}
              y={0}
              width={width / data.length}
              height={height}
              fill="#00000000"
              onMouseMove={(e) => handleMouseMove(day, e)}
              onMouseLeave={hideTooltip}
            />
          </Fragment>
        ))}
      </Group>
      {tooltipOpen && (
        <>
          <TooltipInPortal
            top={tooltipTop}
            left={tooltipLeft}
            className="!p-0 !bg-transparent"
          >
            <TooltipWindow data={tooltipData} />
          </TooltipInPortal>

          <Line
            from={{ x: lineLeft, y: 0 }}
            to={{ x: lineLeft, y: height }}
            className="stroke-theme-3"
            strokeWidth={2}
            pointerEvents="none"
            strokeDasharray="5,2"
          />
        </>
      )}
    </Fragment>
  );
};
