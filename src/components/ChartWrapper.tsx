import { useSelector } from "react-redux";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { IRootState } from "../store";

export const ChartWrapper: React.FC = () => {
  const { isLoading, error, data } = useSelector((state: IRootState) => state.openMeteo);

  const values = Object.values(data).map((value) => [value.temperature_2m_max, value.temperature_2m_min]);

  const preparedData = Object.entries(data).map(([key, value], index) => {
    const date = new Date(key);
    const yValue = date.getDate() + "." + (date.getMonth() + 1).toString().padStart(2, "0");
    return {
      day: yValue,
      max_temp: values[index][0],
      min_temp: values[index][1],
    };
  });

  return (
    <div className="w-5/6 bg-theme-0 h-[400px] mt-4 rounded-[30px] text-theme-4 flex flex-col items-center">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <LineChart
          width={500}
          height={300}
          data={preparedData}
        >
          <XAxis dataKey={"day"} />
          <YAxis
            domain={[
              Math.round((Math.min.apply(values[1], values[1]) - 5) / 5) * 5,
              Math.round((Math.max.apply(values[1], values[1]) + 5) / 5) * 5,
            ]}
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
          <CartesianGrid stroke="#f5f5f5" />
          <Line
            type="monotone"
            dataKey={"max_temp"}
            stroke="#001046"
          />
          <Line
            type="monotone"
            dataKey={"min_temp"}
            stroke="#001046"
          />
        </LineChart>
        // <LineChart
        //   width={500}
        //   height={300}
        //   data={[
        //     { day: 1, temp: 5 },
        //     { day: 2, temp: 15 },
        //     { day: 3, temp: 10 },
        //     { day: 4, temp: 0 },
        //     { day: 5, temp: 15 },
        //   ]}
        // >
        //   <XAxis dataKey={"day"} />
        //   <YAxis
        //     dataKey={"temp"}
        //     domain={[-10, 30]}
        //   />
        //   <Tooltip wrapperClassName="" />
        //   <CartesianGrid stroke="#f5f5f5" />
        //   <Line
        //     type="monotone"
        //     dataKey={"temp"}
        //     stroke="#001046"
        //   />
        // </LineChart>
      )}
    </div>
  );
};
