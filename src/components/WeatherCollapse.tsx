import { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { ForecastContext } from "../context/ForecastProvider";
import { ILanguageObject, IMessagesWithLanguage, LanguageContext } from "../context/LanguageProvider";
import { IRootState } from "../store";
import { Button } from "./Button";
import { WeatherFilters } from "./WeatherFilters";

const collapseMessage: IMessagesWithLanguage = {
  separated: { EN: "Collapse into one chart", PL: "Zwiń w jeden wykres" },
  collapsed: { EN: "Separate charts", PL: "Rozdziel wykresy" },
};

export const WeatherCollapse: React.FC = () => {
  const { collapsed, setCollapsed, flipCollapsed } = useContext(ForecastContext);
  const { language } = useContext(LanguageContext);
  const { address } = useSelector((state: IRootState) => state.location.data);

  useEffect(() => setCollapsed(false), [address]);

  return (
    <Button
      primary
      className="bg-[#fefafb0f] py-2 rounded-full md:w-[70vw] lg:px-3"
      onClick={flipCollapsed}
    >
      <p className="translate-y-[-2px]">{collapsed ? collapseMessage.collapsed[language] : collapseMessage.separated[language]}</p>
    </Button>
  );
};
