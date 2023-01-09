import { createContext, PropsWithChildren, useState } from "react";

const initialMouseOverContext = { mouseOver: false, setMouseOver: () => {} };

interface IMouseOverContext {
  mouseOver: boolean;
  setMouseOver: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MouseOverContext = createContext<IMouseOverContext>(
  initialMouseOverContext
);

export const MouseOverContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <MouseOverContext.Provider value={{ mouseOver, setMouseOver }}>
      {children}
    </MouseOverContext.Provider>
  );
};
