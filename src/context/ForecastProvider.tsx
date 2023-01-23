import { createContext, PropsWithChildren, useMemo, useState } from "react";

const types = ["Temperature", "Wind", "Precipitation"] as const;

interface IForecastContext {
  types: typeof types;
  show: typeof types[number][];
  setShow: (type: typeof types[number]) => void;
}

const initialContext: IForecastContext = {
  types,
  show: ["Temperature", "Precipitation"],
  setShow: () => {},
};

const forceOneOf: typeof types[number][] = ["Temperature", "Wind"];

export const ForecastContext = createContext<IForecastContext>(initialContext);

interface IForecastProvider {
  className?: string;
}

export const ForecastProvider: React.FC<PropsWithChildren<IForecastProvider>> = ({ children }) => {
  const [show, setInternalShow] = useState<typeof types[number][]>(["Temperature", "Precipitation"]);

  const setShow = (type: typeof types[number]) => {
    setInternalShow((currentShow) => {
      if (!currentShow.includes(type)) {
        return [...currentShow, type];
      }
      const showCopy = currentShow.filter((_type) => _type !== type);
      if (!showCopy.some((type) => forceOneOf.includes(type))) {
        return [...showCopy, "Temperature"];
      }
      return showCopy;
    });
  };
  const value = useMemo(() => ({ types, show, setShow }), [show]);

  return <ForecastContext.Provider value={value}>{children}</ForecastContext.Provider>;
};
