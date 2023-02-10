import { TickRendererProps } from "@visx/axis";
import { useContext } from "react";
import { IMessagesWithLanguage, LanguageContext } from "../context/LanguageProvider";

const dateDictionary: IMessagesWithLanguage = {
  Mon: { EN: "Mon", PL: "Pon" },
  Tue: { EN: "Tue", PL: "Wt" },
  Wed: { EN: "Wed", PL: "Śr" },
  Thu: { EN: "Thu", PL: "Czw" },
  Fri: { EN: "Fri", PL: "Pt" },
  Sat: { EN: "Sat", PL: "Sob" },
  Sun: { EN: "Sun", PL: "Nie" },
};

export const RenderDateTick = ({ formattedValue, ...rest }: TickRendererProps) => {
  const { language } = useContext(LanguageContext);

  const [day, dateString] = formattedValue?.split(",") || (["", ""] as [string, string]);
  const date = new Date(dateString);

  return (
    <>
      <text
        {...rest}
        transform="translate(0,5)"
      >
        {dateDictionary[day][language]},
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
