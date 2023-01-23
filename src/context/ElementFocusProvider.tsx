import React, { createContext, Dispatch, PropsWithChildren, SetStateAction, useMemo, useState } from "react";

interface IElementFocusContext {
  isFocused: boolean;
  setIsFocused: Dispatch<SetStateAction<boolean>>;
}

const initialContext = {
  isFocused: false,
  setIsFocused: () => {},
};

export const ElementFocusContext = createContext<IElementFocusContext>(initialContext);

export const ElementFocusProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isFocused, setIsFocused] = useState(false);

  const value = useMemo(() => ({ isFocused, setIsFocused }), [isFocused]);

  return <ElementFocusContext.Provider value={value}>{children}</ElementFocusContext.Provider>;
};
