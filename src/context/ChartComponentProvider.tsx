import { createContext, PropsWithChildren, useMemo } from "react";
import { IForecast } from "../store";

export interface IChartTypeProps {
  data: IForecast[];
  width: number;
  height: number;
  left?: number;
  singleBar?: boolean;
}

const initialContext: IChartTypeProps = {
  data: [],
  width: 0,
  height: 0,
  left: 0,
};

export const ChartComponentContext = createContext(initialContext);

export const ChartComponentProvider: React.FC<PropsWithChildren<IChartTypeProps>> = ({
  children,
  data,
  width,
  height,
  left,
  singleBar,
}) => {
  const value = useMemo(() => ({ data, width, height, left, singleBar }), [width, height, data]);
  return <ChartComponentContext.Provider value={value}>{children}</ChartComponentContext.Provider>;
};
