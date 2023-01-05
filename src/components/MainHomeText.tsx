import { useEffect, useState } from "react";
import Chevron from "../svg/chevron-right.min.svg";

export const MainHomeText: React.FC = () => {
  const [visibleCursor, setVisibleCursor] = useState(false);

  useEffect(() => {
    const timerId = setInterval(() => {
      setVisibleCursor((currentVisible) => !currentVisible);
    }, 500);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
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
      <div className="my-16">
        <div className="bg-code-background pl-8 pr-4 pt-1 pb-4 rounded-lg">
          <code>
            <span className="flex flex-row items-center ml-4">
              <span className="text-code-jsxTags">src </span>
              <img
                src={Chevron}
                alt="chevron"
                className="w-3 h-3 mx-2 opacity-50"
              />
              <span className="mr-2 font-bold text-theme-2"> TS </span>
              <span className="text-code-jsxTags">main.tsx</span>
            </span>
            <div className="h-px w-full bg-code-jsxTags opacity-50 mb-2" />
            <span className="text-code-jsxTags">1</span>
            <span className="text-code-modules px-2 font-mono">import</span>
            <span className="text-code-strings">"./index.css"</span>;
            <br /> <span className="text-code-jsxTags">2</span>
            <span className="text-code-modules px-2">import</span>
            <span className="text-code-variables">React</span>
            <span className="text-code-modules px-2">from</span>
            <span className="text-code-strings">"react"</span>;
            <br /> <span className="text-code-jsxTags">3</span>
            <span className="text-code-modules px-2">import</span>
            <span className="text-code-variables">
              <span className="text-code-parentheses">&#123;</span> createRoot
              <span className="text-code-parentheses"> &#125;</span>
            </span>
            <span className="text-code-modules px-2">from</span>
            <span className="text-code-strings">"react-dom/client"</span>;
            <br /> <span className="text-code-jsxTags">4</span>
            <span className="text-code-modules px-2">import</span>
            <span className="text-code-variables">
              <span className="text-code-parentheses">&#123;</span> Provider
              <span className="text-code-parentheses"> &#125;</span>
            </span>
            <span className="text-code-modules px-2">from</span>
            <span className="text-code-strings">"react-redux"</span>;
            <br /> <span className="text-code-jsxTags">5</span>
            <span className="text-code-modules px-2">import</span>
            <span className="text-code-variables">store</span>
            <span className="text-code-modules px-2">from</span>
            <span className="text-code-strings">"./store"</span>;
            <br /> <span className="text-code-jsxTags">6</span>
            <span className="text-code-modules px-2">import</span>
            <span className="text-code-variables">
              <span className="text-code-parentheses">&#123;</span> App
              <span className="text-code-parentheses"> &#125;</span>
            </span>
            <span className="text-code-modules px-2">from</span>
            <span className="text-code-strings">"./App"</span>;
            <br /> <span className="text-code-jsxTags">7</span>
            <span className="text-code-modules px-2">import</span>
            <span className="text-code-variables">
              <span className="text-code-parentheses">&#123; </span>
              BrowserRouter
              <span className="text-code-parentheses"> &#125;</span>
            </span>
            <span className="text-code-modules px-2">from</span>
            <span className="text-code-strings">"react-router-dom"</span>;
            <br />
            <span className="text-code-jsxTags">8</span>
            <br />
            <span className="text-code-jsxTags">9</span>
            <span className="text-code-methods"> createRoot</span>
            <span className="text-code-parentheses">(</span>
            <span className="text-code-variables">document</span>.
            <span className="text-code-methods">querySelector</span>
            <span className="text-code-modules">(</span>
            <span className="text-code-strings">"#root"</span>
            <span className="text-code-modules">) as</span>
            <span className="text-code-components"> HTMLDivElement</span>
            <span className="text-code-parentheses">)</span>.
            <span className="text-code-methods">render</span>
            <span className="text-code-parentheses">(</span>
            <br />
            <span className="text-code-jsxTags">10</span>
            <span className="text-code-jsxTags pl-4">&lt;</span>
            <span className="text-code-components">React</span>.
            <span className="text-code-components">StrictMode</span>
            <span className="text-code-jsxTags">&gt;</span>;
            <br /> <span className="text-code-jsxTags">11</span>
            <span className="text-code-jsxTags pl-8">&lt;</span>
            <span className="text-code-components">Provider</span>
            <span className="text-code-variables"> store</span>=
            <span className="text-code-modules">&#123;</span>
            <span className="text-code-variables">store</span>
            <span className="text-code-modules">&#125;</span>
            <span className="text-code-jsxTags">&gt;</span>;
            <br /> <span className="text-code-jsxTags">12</span>
            <span className="text-code-jsxTags pl-12">&lt;</span>
            <span className="text-code-components">BrowserRouter</span>
            <span className="text-code-jsxTags">&gt;</span>;
            <br /> <span className="text-theme-0">13</span>
            <span className="text-code-jsxTags pl-16">&lt;</span>
            <span className="text-code-components bg-[#ffffff30]">App</span>
            {visibleCursor && (
              <span className="-translate-x-1 absolute">|</span>
            )}
            <span className="text-code-jsxTags"> /</span>
            <span className="text-code-jsxTags">&gt;</span>;
            <br />
            <span className="text-code-jsxTags">14</span>
            <span className="text-code-jsxTags pl-12">&lt;</span>
            <span className="text-code-jsxTags">/</span>
            <span className="text-code-components">BrowserRouter</span>
            <span className="text-code-jsxTags">&gt;</span>;
            <br /> <span className="text-code-jsxTags">15</span>
            <span className="text-code-jsxTags pl-8">&lt;</span>
            <span className="text-code-jsxTags">/</span>
            <span className="text-code-components">Provider</span>
            <span className="text-code-jsxTags">&gt;</span>;
            <br /> <span className="text-code-jsxTags">16</span>
            <span className="text-code-jsxTags pl-4">&lt;</span>
            <span className="text-code-jsxTags">/</span>
            <span className="text-code-components">React</span>.
            <span className="text-code-components">StrictMode</span>
            <span className="text-code-jsxTags">&gt;</span>; <br />
            <span className="text-code-jsxTags">17</span>
            <span className="text-code-parentheses"> )</span>;
          </code>
        </div>
      </div>
    </div>
  );
};
