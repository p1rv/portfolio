import { MouseOverContextProvider } from "./MouseOverContextProvider";
import { ReactCode } from "./ReactCode";
import { WeatherDemo } from "./WeatherDemo";

export const LandingPage: React.FC = () => {
  return (
    <div>
      <div className="animate-[slideIn1_1s_ease-in-out]">
        <p className="text-7xl text-center leading-[75px] py-16">
          Karol Król - Demo
          <br />
          React Project
        </p>
        <p className="text-center text-theme-2">
          Demonstrative portfolio project built with React, Typescript and Vite.
          <br />
          Explore available functionalities in the top-right corner.
        </p>
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
