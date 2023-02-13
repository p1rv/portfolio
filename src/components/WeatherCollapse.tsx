import { useContext } from "react";
import { ForecastContext } from "../context/ForecastProvider";
import { IMessagesWithLanguage, LanguageContext } from "../context/LanguageProvider";
import { Button } from "./Button";

const collapseMessage: IMessagesWithLanguage = {
  separated: { EN: "Collapse into one chart", PL: "Zwiń w jeden wykres" },
  collapsed: { EN: "Separate charts", PL: "Rozdziel wykresy" },
};

export const WeatherCollapse: React.FC = () => {
  const { collapsed, flipCollapsed } = useContext(ForecastContext);
  const { language } = useContext(LanguageContext);

  return (
    <Button
      primary
      className="bg-[#fefafb0f] py-2 rounded-full md:w-full lg:px-3 md:bg-transparent md:border-2 md:border-theme-1 md:text-theme-1"
      onClick={flipCollapsed}
    >
      <p className="translate-y-[-2px]">{collapsed ? collapseMessage.collapsed[language] : collapseMessage.separated[language]}</p>
    </Button>
  );
};
