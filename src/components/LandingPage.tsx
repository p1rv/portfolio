import { useContext } from "react";
import { ILanguageObject, LanguageContext } from "../context/LanguageProvider";
import { MouseOverContextProvider } from "./MouseOverContextProvider";
import { ReactCode } from "./ReactCode";
import { WeatherDemo } from "./WeatherDemo";

const welcomeMessage: ILanguageObject = {
  EN: (
    <>
      Demonstrative portfolio project built with React, Typescript and Vite.
      <br />
      Explore available functionalities in the top-right corner.
    </>
  ),
  PL: (
    <>
      Pokazowy projekt zbudowany na bibliotece React z Typescriptem przy pomocy Vite.
      <br />
      Dalsze funkcjonalności dostępne w prawym górnym rogu.
    </>
  ),
};

export const LandingPage: React.FC = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      <div className="animate-[slideIn1_1s_ease-in-out]">
        <p className="text-7xl text-center leading-[75px] py-16">
          Karol Król - Demo
          <br />
          React Project
        </p>
        <p className="text-center text-theme-2">{welcomeMessage[language]}</p>
        <div className="relative w-[80vw]">
          <MouseOverContextProvider>
            <ReactCode />
            <WeatherDemo />
          </MouseOverContextProvider>
        </div>
      </div>
    </div>
  );
};
