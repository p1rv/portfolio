import classNames from "classnames";
import { useContext } from "react";
import { ElementFocusContext } from "../context/ElementFocusProvider";
import { SearchBar } from "./SearchBar";

export const LandingWeatherPage: React.FC = () => {
  const { isFocused, setIsFocused } = useContext(ElementFocusContext);

  const innerClasses = classNames(
    "flex flex-row w-full items-center absolute left-[50%] -translate-x-[50%] top-[50%] transition-all duration-300",
    { "!top-0": isFocused }
  );

  return (
    <div className="lg:w-[95vw] w-full h-[50vh] relative">
      <div
        className={innerClasses}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <SearchBar />
      </div>
    </div>
  );
};
