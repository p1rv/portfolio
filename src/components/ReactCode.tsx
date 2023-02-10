import { useContext } from "react";
import Chevron from "../svg/chevron-right.min.svg";
import { MouseOverContext } from "../context/MouseOverContextProvider";
import { routes } from "../utils/routes";
import { useRouter } from "../hooks/useRouter";
import classNames from "classnames";

export const ReactCode: React.FC = () => {
  const { navigate } = useRouter();

  const { setMouseOver } = useContext(MouseOverContext);

  const navigateAway = () => {
    navigate(routes.react.path);
  };

  const classes = classNames(
    "group",
    "w-[55vw]",
    "ease-in",
    "max-w-[85vw]",
    "min-w-[40rem]",
    "md:min-w-[96vw]",
    "md:mx-[2vw]",
    "my-16",
    "shadow-black-24-1/2",
    "hover:shadow-black-24-2/3",
    "relative",
    "hover:z-20",
    { "animate-[slideInLeft_1s]": sessionStorage.getItem("home") !== "loaded" }
  );

  return (
    <div
      onMouseOver={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      className={classes}
    >
      <div
        className="absolute inset-0 bg-theme-0 opacity-0 rounded-lg cursor-pointer group-hover:opacity-10 transition-all min-w-[40rem] md:hidden"
        onClick={navigateAway}
      />
      <div
        className="bg-code-background pl-8 pr-4 pt-1 pb-4 rounded-lg min-w-[40rem]"
        onClick={navigateAway}
      >
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
          <span className="text-code-jsxTags ml-2">1</span>
          <span className="text-code-modules px-2">import</span>
          <span className="text-code-strings">"./index.css"</span>;
          <br /> <span className="text-code-jsxTags ml-2">2</span>
          <span className="text-code-modules px-2">import</span>
          <span className="text-code-variables">React</span>
          <span className="text-code-modules px-2">from</span>
          <span className="text-code-strings">"react"</span>;
          <br /> <span className="text-code-jsxTags ml-2">3</span>
          <span className="text-code-modules px-2">import</span>
          <span className="text-code-variables">
            <span className="text-code-parentheses">&#123;</span> createRoot
            <span className="text-code-parentheses"> &#125;</span>
          </span>
          <span className="text-code-modules px-2">from</span>
          <span className="text-code-strings">"react-dom/client"</span>;
          <br /> <span className="text-code-jsxTags ml-2">4</span>
          <span className="text-code-modules px-2">import</span>
          <span className="text-code-variables">
            <span className="text-code-parentheses">&#123;</span> Provider
            <span className="text-code-parentheses"> &#125;</span>
          </span>
          <span className="text-code-modules px-2">from</span>
          <span className="text-code-strings">"react-redux"</span>;
          <br /> <span className="text-code-jsxTags ml-2">5</span>
          <span className="text-code-modules px-2">import</span>
          <span className="text-code-variables">store</span>
          <span className="text-code-modules px-2">from</span>
          <span className="text-code-strings">"./store"</span>;
          <br /> <span className="text-code-jsxTags ml-2">6</span>
          <span className="text-code-modules px-2">import</span>
          <span className="text-code-variables">
            <span className="text-code-parentheses">&#123;</span> App
            <span className="text-code-parentheses"> &#125;</span>
          </span>
          <span className="text-code-modules px-2">from</span>
          <span className="text-code-strings">"./App"</span>;
          <br /> <span className="text-code-jsxTags ml-2">7</span>
          <span className="text-code-modules px-2">import</span>
          <span className="text-code-variables">
            <span className="text-code-parentheses">&#123; </span>
            BrowserRouter
            <span className="text-code-parentheses"> &#125;</span>
          </span>
          <span className="text-code-modules px-2">from</span>
          <span className="text-code-strings">"react-router-dom"</span>;
          <br />
          <span className="text-code-jsxTags ml-2">8</span>
          <br />
          <span className="text-code-jsxTags ml-2">9</span>
          <span className="text-code-methods"> createRoot</span>
          <span className="text-code-parentheses">(</span>
          <br />
          <span className="text-code-jsxTags">10</span>
          <span className="text-code-variables pl-4"> document</span>.<span className="text-code-methods">querySelector</span>
          <span className="text-code-modules">(</span>
          <span className="text-code-strings">"#root"</span>
          <span className="text-code-modules">) as</span>
          <span className="text-code-components"> HTMLDivElement</span>
          <br />
          <span className="text-code-jsxTags">11</span>
          <span className="text-code-parentheses"> )</span>.<span className="text-code-methods">render</span>
          <span className="text-code-parentheses">(</span>
          <br />
          <span className="text-code-jsxTags">12</span>
          <span className="text-code-jsxTags pl-4"> &lt;</span>
          <span className="text-code-components">React</span>.<span className="text-code-components">StrictMode</span>
          <span className="text-code-jsxTags">&gt;</span>;
          <br /> <span className="text-code-jsxTags">13</span>
          <span className="text-code-jsxTags pl-8"> &lt;</span>
          <span className="text-code-components">Provider</span>
          <span className="text-code-variables"> store</span>=<span className="text-code-modules">&#123;</span>
          <span className="text-code-variables">store</span>
          <span className="text-code-modules">&#125;</span>
          <span className="text-code-jsxTags">&gt;</span>;
          <br /> <span className="text-code-jsxTags">14</span>
          <span className="text-code-jsxTags pl-12"> &lt;</span>
          <span className="text-code-components">BrowserRouter</span>
          <span className="text-code-jsxTags">&gt;</span>;
          <br /> <span className="text-theme-0">15</span>
          <span className="text-code-jsxTags pl-16"> &lt;</span>
          <span className="text-code-components bg-[#ffffff30]">App</span>
          <span className="-translate-x-1 absolute animate-[blink_1s_ease-in-out_infinite]">|</span>
          <span className="text-code-jsxTags"> /</span>
          <span className="text-code-jsxTags">&gt;</span>;
          <br />
          <span className="text-code-jsxTags">16</span>
          <span className="text-code-jsxTags pl-12"> &lt;</span>
          <span className="text-code-jsxTags">/</span>
          <span className="text-code-components">BrowserRouter</span>
          <span className="text-code-jsxTags">&gt;</span>;
          <br /> <span className="text-code-jsxTags">17</span>
          <span className="text-code-jsxTags pl-8"> &lt;</span>
          <span className="text-code-jsxTags">/</span>
          <span className="text-code-components">Provider</span>
          <span className="text-code-jsxTags">&gt;</span>;
          <br /> <span className="text-code-jsxTags">18</span>
          <span className="text-code-jsxTags pl-4"> &lt;</span>
          <span className="text-code-jsxTags">/</span>
          <span className="text-code-components">React</span>.<span className="text-code-components">StrictMode</span>
          <span className="text-code-jsxTags">&gt;</span>; <br />
          <span className="text-code-jsxTags">19</span>
          <span className="text-code-parentheses"> )</span>;
        </code>
      </div>
    </div>
  );
};
