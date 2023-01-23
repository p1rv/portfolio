import { PropsWithChildren } from "react";
import { ComposedChart } from "recharts";

interface ILazyChartProps {
  data: any[];
  width: number;
  height: number;
  [key: string]: any;
}

const LazyChart: React.FC<PropsWithChildren<ILazyChartProps>> = ({ children, data, width, height, ...rest }) => {
  return (
    <ComposedChart
      data={data}
      width={width}
      height={height}
      {...rest}
    >
      {children}
    </ComposedChart>
  );
};

export default LazyChart;
