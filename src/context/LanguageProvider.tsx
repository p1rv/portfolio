import localforage from "localforage";
import { createContext, Dispatch, PropsWithChildren, SetStateAction, useEffect, useMemo, useState } from "react";

export const languages = ["EN", "PL"] as const;

export type ILanguageObject = {
  [key in typeof languages[number]]: any;
};

export interface IMessagesWithLanguage {
  [key: string]: ILanguageObject;
}

interface ILanguageContext {
  language: typeof languages[number];
  languages: typeof languages;
  setLanguage: Dispatch<SetStateAction<typeof languages[number]>>;
}

const initialContext: ILanguageContext = {
  language: "EN",
  languages,
  setLanguage: () => {},
};

export const LanguageContext = createContext<ILanguageContext>(initialContext);

export const LanguageProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [language, setLanguage] = useState<typeof languages[number]>("EN");

  useEffect(() => {
    localforage.getItem("lang").then((lang) => lang && setLanguage(lang as typeof languages[number]));
  }, []);

  useEffect(() => {
    localforage.setItem("lang", language);
  }, [language]);

  const value = useMemo(() => ({ language, languages, setLanguage }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
