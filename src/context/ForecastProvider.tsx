import { createContext, PropsWithChildren, useMemo, useState } from "react";
import { IMessagesWithLanguage } from "./LanguageProvider";

export type IForecastTypes = "temp" | "wind" | "precip";

const types: IMessagesWithLanguage = {
  temp: { EN: "Temperature", PL: "Temperatura" },
  wind: { EN: "Wind", PL: "Wiatr" },
  precip: { EN: "Precipitation", PL: "Opady" },
} as const;

interface IForecastContext {
  types: typeof types;
  show: IForecastTypes[];
  setShow: (type: IForecastTypes[][number]) => void;
  collapsed: boolean;
  setCollapsed: () => void;
}

const initialContext: IForecastContext = {
  types,
  show: ["temp", "precip"],
  setShow: () => {},
  collapsed: false,
  setCollapsed: () => {},
};

const forceOneOf: IForecastTypes[] = ["temp", "wind"];

export const ForecastContext = createContext<IForecastContext>(initialContext);

interface IForecastProvider {
  className?: string;
}

export const ForecastProvider: React.FC<PropsWithChildren<IForecastProvider>> = ({ children }) => {
  const [show, setInternalShow] = useState<IForecastTypes[]>(["temp", "precip"]);
  const [collapsed, setInternalCollapsed] = useState(false);

  const setShow = (type: IForecastTypes[][number]) => {
    setInternalShow((currentShow) => {
      if (!currentShow.includes(type)) {
        return [...currentShow, type];
      }
      const showCopy = currentShow.filter((_type) => _type !== type);
      if (!showCopy.some((type) => forceOneOf.includes(type))) {
        return [...showCopy, "temp"];
      }
      return showCopy;
    });
  };
  const setCollapsed = () => {
    setInternalCollapsed((currentCollapsed) => !currentCollapsed);
  };
  const value = useMemo(() => ({ types, show, setShow, collapsed, setCollapsed }), [show, collapsed]);

  return <ForecastContext.Provider value={value}>{children}</ForecastContext.Provider>;
};
