import { useContext } from "react";
import { ILanguageObject, IMessagesWithLanguage, LanguageContext } from "../context/LanguageProvider";
import { MouseOverContextProvider } from "../context/MouseOverContextProvider";
import { ReactCode } from "./ReactCode";
import { WeatherDemo } from "./WeatherDemo";

const welcomeMessage: IMessagesWithLanguage = {
  sub: {
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
  },
  main: {
    EN: (
      <>
        Karol Król -
        <br />
        React Project
      </>
    ),
    PL: (
      <>
        Karol Król -
        <br />
        Projekt React
      </>
    ),
  },
};

const Home: React.FC = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="flex flex-col w-screen h-full items-center overflow-x-hidden">
      <div className="animate-[slideIn1_1s_ease-in-out]">
        <p className="text-7xl sm:text-4xl lg:text-5xl lg:py-12 text-center leading-[75px] py-16">{welcomeMessage.main[language]}</p>
        <p className="text-center text-theme-2 sm:px-[2vw]">{welcomeMessage.sub[language]}</p>
        <div className="relative w-[80vw] sm:w-full">
          <MouseOverContextProvider>
            <ReactCode />
            <WeatherDemo />
          </MouseOverContextProvider>
        </div>
      </div>
    </div>
  );
};

export default Home;
