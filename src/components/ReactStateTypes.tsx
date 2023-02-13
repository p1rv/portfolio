import { highlight, languages } from "prismjs";
import purifier from "dompurify";

const incrementNumber = `setNumber(number + 1);`;
const invertBoolean = `setMenuShow(!menuShow);`;
const addToArrayEnd = `colors.push(newColor)`;

export const ReactStateTypes: React.FC = () => {
  return (
    <div className="flex flex-col items-justify w-full">
      <p className="text-5xl text-right w-full mb-4">State Types</p>
      <p>
        useState hook enables you to store variables of any type - numbers, objects, arrays etc. As you can read in previous section , React
        updates components when state changes by calling it's setter. It seems pretty obvious how to change primitive types - e.g. if you
        want to increment a number by one, you can call
      </p>
      <pre
        className="font-mono [&>span]:font-mono bg-code-background/80 p-4 rounded-xl text-[14px] font-light [&>span]:font-light [&>span]:text-[14px]"
        dangerouslySetInnerHTML={{ __html: purifier.sanitize(highlight(incrementNumber, languages.js, "tsx")) }}
      />
      <p>or invert a boolean by calling something similar to</p>
      <pre
        className="font-mono [&>span]:font-mono bg-code-background/80 p-4 rounded-xl text-[14px] font-light [&>span]:font-light [&>span]:text-[14px]"
        dangerouslySetInnerHTML={{ __html: purifier.sanitize(highlight(invertBoolean, languages.js, "tsx")) }}
      />
      <p>
        But what if you are storing list of values in your state? Let's say that you are working on a color palette picking application and
        store a list of hexadecimal values in your state. You want to enable end user to delete, add or change order of currently picked
        colors. Normally, in case of adding to the end of an array, you would write out code like that
      </p>
      <pre
        className="font-mono [&>span]:font-mono bg-code-background/80 p-4 rounded-xl text-[14px] font-light [&>span]:font-light [&>span]:text-[14px]"
        dangerouslySetInnerHTML={{ __html: purifier.sanitize(highlight(addToArrayEnd, languages.js, "tsx")) }}
      />
      <p className="mb-6">
        or use pop() to remove element at an index. But what are you going to pass as an argument in setter? Array is already changed, but
        as we discussed before, you need to call setter to cause render. Are you going to pass manually modified state as an argument? No.
        Don't do that. The same goes for objects - you can't just change one entry directly in state object and call state setter with it.
      </p>
      <p>
        The reason you can't just change some value in arrays or objects and update state with them is that... You haven't actually changed
        them. At least in React's `eyes`. Updating object's entry or modifying an array changes their content, but if you compared their
        updated version with previous one, the comparison would return true. Comparing arrays or objects doesn't compare their content, but
        the location in memory where they are saved. As you can imagine, if you had a big array, relocating every element wouldn't be the
        most optimal solution. Updates are applied only to necessary elements, but entire variable still points to the same place. When
        React decides whether to rerender a component after you called setState with previously modified object/array, it actually asks `Did
        that variable's address changed?`, and in that case the answer is no. Read the next section to find out how to update state in these
        cases.
      </p>
    </div>
  );
};
