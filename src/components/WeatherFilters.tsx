import { Button } from "./Button";
import { useContext } from "react";
import { ForecastContext, IForecastTypes } from "../context/ForecastProvider";
import { IMessagesWithLanguage, LanguageContext } from "../context/LanguageProvider";
import { Dropdown } from "./Dropdown";

const filterMessages: IMessagesWithLanguage = {
  main: {
    EN: "Filter results",
    PL: "Filtruj wyniki",
  },
};

export const WeatherFilters: React.FC = () => {
  const { types, show, setShow, forceOneOf } = useContext(ForecastContext);
  const { language } = useContext(LanguageContext);

  const onDropdownSelect = (_type: IForecastTypes) => {
    setShow(_type);
  };

  const checkButtons = Object.entries(types)
    .filter(([key]) => !forceOneOf.includes(key as IForecastTypes))
    .map(([key, value]) => (
      <Button
        key={key}
        secondary
        rounded
        selected={show.includes(key as IForecastTypes)}
        onClick={() => onDropdownSelect(key as IForecastTypes)}
        className="mt-4 border-2 border-theme-1"
        dropdown
      >
        {value[language]}
      </Button>
    ));

  const radioButtons = Object.entries(types)
    .filter(([key]) => forceOneOf.includes(key as IForecastTypes))
    .map(([key, value]) => (
      <Button
        key={key}
        secondary
        dropdown
        selected={show.includes(key as IForecastTypes)}
        disabled={show.includes(key as IForecastTypes)}
        onClick={() => onDropdownSelect(key as IForecastTypes)}
      >
        {value[language]}
      </Button>
    ));

  return (
    <Dropdown
      autoClose
      mobileConstant
      buttonText={filterMessages.main[language]}
      dropdownClassName="right-[10px] mt-[35px] md:mt-0 md:right-0 p-4 md:px-0"
    >
      <>
        <div className="flex rounded-full overflow-hidden border-2 border-theme-1">{radioButtons}</div>
        {checkButtons}
      </>
    </Dropdown>
  );
};
