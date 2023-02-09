import { useContext, useEffect } from "react";
import { IMessagesWithLanguage, LanguageContext } from "../context/LanguageProvider";
import { ReactCode } from "./ReactCode";
import { WeatherDemo } from "./WeatherDemo";

const welcomeMessage: IMessagesWithLanguage = {
  sub: {
    EN: (
      <>
        Portfolio project built with React, Typescript and Vite.
        <br />
        Navigate to respective pages by clicking below or in top-right corner.
      </>
    ),
    PL: (
      <>
        Projekt do portfolio zbudowany przy pomocy Reacta, Typescripta i Vite.
        <br />
        Przejdź do wybranej strony klikając poniżej lub w prawym górnym rogu.
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
  useEffect(() => {
    const timerId = setTimeout(() => sessionStorage.setItem("home", "loaded"), 1000);
    return () => clearTimeout(timerId);
  }, []);

  const { language } = useContext(LanguageContext);

  return (
    <div className="flex flex-col w-screen h-full items-center">
      <div>
        <p className="text-7xl sm:text-4xl lg:text-5xl lg:py-12 text-center leading-[75px] py-16">{welcomeMessage.main[language]}</p>
        <p className="text-center text-theme-2 sm:px-[2vw]">{welcomeMessage.sub[language]}</p>
        <div className="relative w-[80vw] md:w-full">
          <ReactCode />
          <WeatherDemo />
        </div>
      </div>
    </div>
  );
};

export default Home;
