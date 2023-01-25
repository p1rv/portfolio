import { Button } from "./Button";
import chevronIcon from "../svg/chevron-right.min.svg";
import { useContext, useEffect, useRef, useState } from "react";
import { ForecastContext, IForecastTypes } from "../context/ForecastProvider";
import classNames from "classnames";
import { IMessagesWithLanguage, LanguageContext } from "../context/LanguageProvider";

const filterMessages: IMessagesWithLanguage = {
  main: {
    EN: "Filter results",
    PL: "Filtruj wyniki",
  },
};

export const WeatherFilters: React.FC = () => {
  const [hidden, setHidden] = useState(true);
  const filtersRef = useRef<HTMLDivElement | null>(null);
  const { types, show, setShow } = useContext(ForecastContext);

  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const hide = ({ target }: MouseEvent) => {
      if (!filtersRef.current?.contains(target as Element)) {
        setHidden(true);
      }
    };
    window.addEventListener("click", hide, { capture: true });
    return () => window.removeEventListener("click", hide, { capture: true });
  }, []);

  const onDropdownSelect = (_type: IForecastTypes) => {
    setShow(_type);
    setHidden(true);
  };

  const renderedButtons = Object.entries(types).map(([key, value]) => (
    <Button
      key={key}
      secondary
      selected={show.includes(key as IForecastTypes)}
      onClick={() => onDropdownSelect(key as IForecastTypes)}
    >
      {value[language]}
    </Button>
  ));

  const dropdownClasses = classNames(
    "absolute",
    "md:relative",
    "right-0",
    "w-[15vw]",
    "min-w-[200px]",
    "md:w-[70vw]",
    "lg:!min-w-[165px]",
    "md:mt-4"
  );

  const buttonClasses = classNames(
    "flex",
    "flex-row",
    "items-center",
    "justify-between",
    "w-full",
    "bg-[#fefcfb0f]",
    "rounded-full",
    "py-2",
    { "bg-[#fefcfb1b] text-theme-1": !hidden }
  );

  const typesListClasses = classNames(
    "absolute",
    "top-14",
    "w-full",
    "bg-theme-0",
    "z-10",
    "animate-[slideIn_0.2s_ease-in-out]",
    "rounded-[10px]",
    "overflow-hidden",
    "shadow-[0_2px_10px]",
    "shadow-theme-4/70",
    { hidden }
  );

  return (
    <div
      className={dropdownClasses}
      ref={filtersRef}
    >
      <Button
        primary
        className={buttonClasses}
        onClick={(e) => setHidden((currentHidden) => !currentHidden)}
      >
        <p>{filterMessages.main[language]}</p>
        <img
          src={chevronIcon}
          alt="chevron"
          className={`transition-all duration-200 ease-in-out w-3 h-3 ${!hidden && "rotate-90"}`}
        />
      </Button>
      <div className={typesListClasses}>{renderedButtons}</div>
    </div>
  );
};
