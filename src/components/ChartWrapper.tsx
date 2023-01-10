import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const ChartWrapper: React.FC = () => {
  return (
    <div className="w-5/6 bg-theme-0 h-[400px] mt-4 rounded-[30px] text-theme-4 flex flex-col items-center">
      <LineChart
        width={500}
        height={300}
        data={[
          { day: 1, temp: 7 },
          { day: 2, temp: 6 },
          { day: 3, temp: 4 },
        ]}
      >
        <XAxis dataKey={"day"} />
        <YAxis dataKey={"temp"} />
        <Tooltip wrapperClassName="" />
        <CartesianGrid stroke="#f5f5f5" />
        <Line
          type="monotone"
          dataKey={"temp"}
          stroke="#001046"
        />
      </LineChart>
    </div>
  );
};
