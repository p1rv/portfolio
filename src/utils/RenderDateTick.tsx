import { TickRendererProps } from "@visx/axis";

export const RenderDateTick = ({ formattedValue, ...rest }: TickRendererProps) => {
  const [day, dateString] = formattedValue?.split(",") || (["", ""] as [string, string]);
  const date = new Date(dateString);
  return (
    <>
      <text
        {...rest}
        transform="translate(0,5)"
      >
        {day},
      </text>
      <text
        {...rest}
        transform="translate(0,30)"
      >
        {date.getDate().toString().padStart(2, "0")}.{(date.getMonth() + 1).toString().padStart(2, "0")}
      </text>
    </>
  );
};
