import { scaleTime } from "@visx/scale";
import { min, max } from "d3-array";
import { IForecast } from "../store";

export const getDay = (day: IForecast) => {
  const date = new Date(day.time);
  date.setHours(0);
  return date;
};
export const dayScale = (data: IForecast[]) =>
  scaleTime<number>({
    domain: [new Date(min(data, getDay)!.getTime() - 43200000), new Date(max(data, getDay)!.getTime() + 43200000)] as [Date, Date],
  });
