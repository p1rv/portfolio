import { useSelector } from "react-redux";
import { Bar, CartesianGrid, ComposedChart, Customized, Line, LineChart, ReferenceLine, Tooltip, XAxis, YAxis } from "recharts";
import { IOpenMeteoParsed, IRootState, IOpenMeteoDaily } from "../store";

export const ChartWrapper: React.FC = () => {
  const { isLoading, error, data } = useSelector((state: IRootState) => state.openMeteo);

  const formatDateTick = (day: string) => {
    const fullDate = new Date(day);
    try {
      return fullDate.getDate() + "." + (fullDate.getMonth() + 1).toString().padStart(2, "0");
    } catch {
      return "auto";
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-5/6 bg-theme-0 h-[400px] mt-4 rounded-[30px] text-theme-4 flex flex-col items-center">
      <ComposedChart
        width={500}
        height={300}
        data={data}
      >
        <XAxis
          dataKey={"time"}
          interval={0}
          tickFormatter={formatDateTick}
        />
        <YAxis
          domain={([dataMin, dataMax]) => {
            return [Math.floor(dataMin / 5) * 5, Math.ceil(dataMax / 5) * 5];
          }}
          ticks={[-5, 0, 5]}
          yAxisId="temp"
        />
        <Tooltip
          wrapperClassName=""
          labelFormatter={(day) => "Date: " + day}
          separator=": "
          formatter={(i, d) => {
            return [
              i + "°C",
              d
                .toString()
                .split("_")
                .map((part) => part.charAt(0).toLocaleUpperCase() + part.slice(1))
                .join(" "),
            ];
          }}
        />
        <CartesianGrid
          stroke="#ccc"
          horizontal={false}
        />
        <Line
          type="monotone"
          dataKey={"temp_max"}
          stroke="#001046"
          dot={false}
          yAxisId="temp"
        />
        <Line
          type="monotone"
          dataKey={"temp_min"}
          stroke="#001046"
          dot={false}
          yAxisId="temp"
        />
        <YAxis
          domain={([_, max]) => [0, Math.ceil(max / 5) * 5 + 15]}
          yAxisId="precip"
          orientation="right"
        />
        <Bar
          dataKey="precip_sum"
          className="fill-theme-2"
          yAxisId="precip"
          barSize={1000}
        />
        <ReferenceLine
          y={0}
          stroke="red"
          strokeDasharray="4 5"
          yAxisId="temp"
        />
      </ComposedChart>
      {/* <LineChart
          width={500}
          height={300}
          data={[
            { day: 1, temp: 5 },
            { day: 2, temp: 15 },
            { day: 3, temp: 10 },
            { day: 4, temp: 0 },
            { day: 5, temp: 15 },
          ]}
        >
          <XAxis dataKey={"day"} />
          <YAxis
            dataKey={"temp"}
            domain={[-10, 30]}
          />
          <Tooltip wrapperClassName="" />
          <CartesianGrid stroke="#f5f5f5" />
          <Line
            type="monotone"
            dataKey={"temp"}
            stroke="#001046"
          />
        </LineChart> */}
    </div>
  );
};
