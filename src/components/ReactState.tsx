import { highlight, languages } from "prismjs";
import purifier from "dompurify";

const codeBasic = `import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return ( 
    <div>
      Current count: {count}
      {count % 2 === 0 ? "Even!" : "Odd!"}
      <button
        onClick={() => setCount(count + 1)}
      >
        Add 1
      </button>
    </div>
  );
};

export default App;`;

const buttonOnClickLog = `onClick={() => {
  setCount(count + 1);
  console.log(count);
}}`;

const codeAdv = `import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        backgroundColor: count % 2 === 0 ? "red" : "green",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <span>Current count: {count}</span>
      <span>{count % 2 === 0 ? "Even!" : "Odd!"}</span>
      <button
        style={{ backgroundColor: "white", padding: "5vh 10vh" }}
        onClick={() => setCount((currentCount) => currentCount + 1)}
      >
        Add 1
      </button>
    </div>
  );
};
export default App;`;

export const ReactState: React.FC = () => {
  return (
    <div className="flex flex-col items-justify w-full">
      <p className="text-5xl text-right w-full mb-4">useState</p>
      <p className="mb-3">
        Below you can see the code of basic App component utilizing useState hook to implement counter (incremented by clicking a button)
        and display whether current value is even or odd:
      </p>
      <pre
        className="font-mono [&>span]:font-mono bg-code-background/80 p-6 rounded-xl text-[14px] font-light [&>span]:font-light [&>span]:text-[14px] mb-3"
        dangerouslySetInnerHTML={{ __html: purifier.sanitize(highlight(codeBasic, languages.js, "tsx")) }}
      />
      <p>
        React runs state setters almost immediately, at lest that's how we see it, but in reality waits for a few milliseconds in case
        another setState is called, as it will be more efficient, causing only 1 rerender of a component. It is actually very easy to
        observe - the only thing you would have to change in code above is replace onClick function in button to
      </p>
      <pre
        className="font-mono [&>span]:font-mono bg-code-background/80 p-6 rounded-xl text-[14px] font-light [&>span]:font-light [&>span]:text-[14px]"
        dangerouslySetInnerHTML={{ __html: purifier.sanitize(highlight(buttonOnClickLog, languages.js, "tsx")) }}
      />
      <p>
        Now you can read in console that last logged value is smaller than currently displayed on screen
        <span className="text-theme-1">✶</span>. So, if you want to use new state value in the same parent function where you run setState,
        don't refer to state variable itself, but to the new value itself. There is also another way (useEffect), but you should keep your
        components as concise and simple as you can, and introducing useEffect shouldn't be necessary in mentioned case.
      </p>
      <p className="mb-3">
        <span className="text-theme-1">✶</span>[OK, it actually isn't caused by delaying setters' calls, but rather by referencing value
        from previous render. We can see that by wrapping console.log() with setTimeout - even though it appears with noticeable delay,
        value is stale. It was an easiest way to explain it though]
      </p>
      <p className="mb-3">
        It is however possible that you run into a problem where state (especially if it is boolean) seemingly didn't change, even though
        you definitely run a setter function. Most likely it wasn't caused by this 'bug', because it is very difficult to even reproduce,
        but in rare cases it might be due to re-running setter function before state was actually changed. In the case above, you are
        reading `count` state and returning its value incremented by one. If you encountered aforementioned bug, `count`s value would be
        less than expected. The solution would be to pass an arrow function to setter in place of just a number - the first argument of that
        function is current (that is in time of actually applying changes) state value. Below you can see that approach (with some css
        styles thrown in):
      </p>
      <pre
        className="font-mono [&>span]:font-mono bg-code-background/80 p-6 rounded-xl text-[14px] font-light [&>span]:font-light [&>span]:text-[14px]"
        dangerouslySetInnerHTML={{ __html: purifier.sanitize(highlight(codeAdv, languages.js, "tsx")) }}
      />
    </div>
  );
};
