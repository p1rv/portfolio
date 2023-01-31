import { createContext, Dispatch, PropsWithChildren, SetStateAction, useMemo, useState } from "react";
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
  setCollapsed: Dispatch<SetStateAction<boolean>>;
  flipCollapsed: () => void;
}

const initialContext: IForecastContext = {
  types,
  show: ["temp", "precip"],
  setShow: () => {},
  collapsed: false,
  setCollapsed: () => {},
  flipCollapsed: () => {},
};

const forceOneOf: IForecastTypes[] = ["temp", "wind"];

export const ForecastContext = createContext<IForecastContext>(initialContext);

interface IForecastProvider {
  className?: string;
}

export const ForecastProvider: React.FC<PropsWithChildren<IForecastProvider>> = ({ children }) => {
  const [show, setInternalShow] = useState<IForecastTypes[]>(["temp", "precip"]);
  const [collapsed, setCollapsed] = useState(false);

  const setShow = (type: IForecastTypes[][number]) => {
    setInternalShow((currentShow) => {
      if (forceOneOf.includes(type)) {
        return [
          ...forceOneOf.filter((value) => !currentShow.includes(value)),
          ...currentShow.filter((value) => !forceOneOf.includes(value)),
        ];
      }
      if (currentShow.includes(type)) {
        return [...currentShow.filter((value) => value !== type)];
      }
      return [...currentShow, type];
    });
  };
  const flipCollapsed = () => {
    setCollapsed((currentCollapsed) => !currentCollapsed);
  };
  const value = useMemo(() => ({ types, show, setShow, collapsed, setCollapsed, flipCollapsed }), [show, collapsed]);

  return <ForecastContext.Provider value={value}>{children}</ForecastContext.Provider>;
};
