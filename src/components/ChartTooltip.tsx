import { localPoint } from "@visx/event";
import { Group } from "@visx/group";
import { Bar, Line } from "@visx/shape";
import { useTooltip, useTooltipInPortal } from "@visx/tooltip";
import { Fragment, useContext, useState } from "react";
import { ChartComponentContext } from "../context/ChartComponentProvider";
import { IForecast } from "../store";
import { TooltipWindow } from "./TooltipWindow";

export const ChartTooltip: React.FC = () => {
  const { data, width, height, left = 0 } = useContext(ChartComponentContext);

  const [mouseCoord, setMouseCoord] = useState({ x: 0, y: 0 });

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
    const { x, y } = localPoint(event) || { x: 0, y: 0 };
    setMouseCoord({ x, y });
    showTooltip({
      tooltipLeft: clientX,
      tooltipTop: clientY,
      tooltipData: day,
    });
  };

  return (
    <Fragment>
      <Group
        left={left}
        className="cursor-none"
      >
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
            from={{ x: mouseCoord.x, y: 0 }}
            to={{ x: mouseCoord.x, y: height }}
            className="stroke-theme-3"
            strokeWidth={2}
            pointerEvents="none"
            strokeDasharray="5,2"
          />
          <circle
            cx={mouseCoord.x}
            cy={mouseCoord.y}
            r={4}
            pointerEvents="none"
            className="stroke-theme-4 stroke-[3px] fill-theme-1"
          />
        </>
      )}
    </Fragment>
  );
};
