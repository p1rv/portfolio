import { Button } from "./Button";
import chevronIcon from "../svg/chevron-right.min.svg";
import { useContext, useEffect, useRef, useState } from "react";
import { ForecastContext } from "./ForecastProvider";
import classNames from "classnames";

export const WeatherFilters: React.FC = () => {
  const [hidden, setHidden] = useState(true);
  const filtersRef = useRef<HTMLDivElement | null>(null);
  const { types, show, setShow } = useContext(ForecastContext);

  useEffect(() => {
    const hide = ({ target }: MouseEvent) => {
      if (!filtersRef.current?.contains(target as Element)) {
        setHidden(true);
      }
    };
    window.addEventListener("click", hide, { capture: true });
    return () => window.removeEventListener("click", hide, { capture: true });
  }, []);

  const onDropdownSelect = (_type: typeof types[number]) => {
    setShow(_type);
    setHidden(true);
  };

  const renderTypes = types.map((_type) => (
    <Button
      key={_type}
      secondary
      selected={show.includes(_type)}
      onClick={() => onDropdownSelect(_type)}
    >
      {_type}
    </Button>
  ));

  const dropdownClasses = classNames(
    "absolute",
    "bg-theme-4",
    "z-10",
    "animate-[slideIn_0.2s_ease-in-out]",
    "rounded-[30px]",
    "rounded-t-none",
    "overflow-hidden",
    "shadow-[0_2px_10px]",
    "shadow-theme-4/70",
    { hidden }
  );

  return (
    <div
      className="absolute right-[7vw] w-[15vw] text-center z-20"
      ref={filtersRef}
    >
      <Button
        primary
        className="flex flex-row items-center justify-around w-full"
        onClick={(e) => setHidden((currentHidden) => !currentHidden)}
      >
        <p>Filter results</p>
        <img
          src={chevronIcon}
          alt="chevron"
          className={`transition-all duration-200 ease-in-out w-3 h-3 ${!hidden && "rotate-90"} absolute right-[1vw]`}
        />
      </Button>
      <div className={dropdownClasses}>{renderTypes}</div>
    </div>
  );
};
