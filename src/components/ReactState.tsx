import { highlight, languages } from "prismjs";
import purifier from "dompurify";

const code = `import React, { useState } from 'react';

export const App: React.FC = () => {
  const [count, setCount] = useState(0);
  setCount((currentCount) => currentCount + 1);
  
  count === 7 && console.log("Number 7 has been achieved");
  
  return ( 
    <div>
      Appf
    </div>
  )
}`;

export const ReactState: React.FC = () => {
  return (
    <div className="w-full">
      <pre
        className="font-mono [&>span]:font-mono bg-code-background/80 p-6 rounded-xl text-[14px] font-light [&>span]:font-light [&>span]:text-[14px]"
        dangerouslySetInnerHTML={{ __html: purifier.sanitize(highlight(code, languages.js, "tsx")) }}
      />
    </div>
  );
};
