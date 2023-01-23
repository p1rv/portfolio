import { createContext, Dispatch, PropsWithChildren, SetStateAction, useMemo, useState } from "react";

type ISupportedLanguages = "en" | "pl";

interface ILanguageContext {
  language: ISupportedLanguages;
  setLanguage: Dispatch<SetStateAction<ISupportedLanguages>>;
}

const initialContext: ILanguageContext = {
  language: "en",
  setLanguage: () => {},
};

export const LanguageContext = createContext<ILanguageContext>(initialContext);

export const LanguageProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [language, setLanguage] = useState<ISupportedLanguages>("en");

  const value = useMemo(() => ({ language, setLanguage }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
