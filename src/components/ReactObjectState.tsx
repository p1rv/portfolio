import { highlight, languages } from "prismjs";
import purifier from "dompurify";

const addKeyValue = `setUsers({...users, newKey: newValue});`;
const modifyValue = `setUsers({...users, key: newValue});`;
const removeEntry = `const {keyToDelete, ...rest} = users;
setUsers(rest);`;
const addDynamicKeyValue = `setUsers({...users, [newKey]: newValue});`;

export const ReactObjectState: React.FC = () => {
  return (
    <div className="flex flex-col items-justify w-full">
      <p className="text-5xl text-right w-full mb-4">Object as state</p>
      <p className="mb-6">
        Let's begin by addressing the main problem - are you sure you need to store object in state? Now that we use functional components
        in place of class-based ones, a single state object can be divided into a few simpler ones. That's one of the reasons useState hook
        returns an array - you can use them many times in a single component and not worry about repeating names, as you receive an array
        and can name 0 and 1 indexes anything you want (respecting the naming convention 😉).
      </p>
      <p className="mb-4">
        If for whatever reason you feel like you have to use objects, or maybe are working on a Redux store, where object are more common,
        here are the main operations:
      </p>
      <p>• Adding new key-value pair:</p>
      <pre
        className="font-mono [&>span]:font-mono bg-code-background/80 p-4 rounded-xl text-[14px] font-light [&>span]:font-light [&>span]:text-[14px]"
        dangerouslySetInnerHTML={{ __html: purifier.sanitize(highlight(addKeyValue, languages.js, "tsx")) }}
      />
      <p>• Modifying value:</p>
      <pre
        className="font-mono [&>span]:font-mono bg-code-background/80 p-4 rounded-xl text-[14px] font-light [&>span]:font-light [&>span]:text-[14px]"
        dangerouslySetInnerHTML={{ __html: purifier.sanitize(highlight(modifyValue, languages.js, "tsx")) }}
      />
      <p>• Removing an entry:</p>
      <pre
        className="font-mono [&>span]:font-mono bg-code-background/80 p-4 rounded-xl text-[14px] font-light [&>span]:font-light [&>span]:text-[14px]"
        dangerouslySetInnerHTML={{ __html: purifier.sanitize(highlight(removeEntry, languages.js, "tsx")) }}
      />
      <p className="mt-6">
        In every case we used destructuring, which creates new objects in memory instead of modifying already existing ones. Adding and
        modifying entries are very similar - if key is not present, new entry will be added and if key is found, value will be updated. If
        you want to use dynamic keys (stored in variable), change syntax to following:
      </p>
      <pre
        className="font-mono [&>span]:font-mono bg-code-background/80 p-4 rounded-xl text-[14px] font-light [&>span]:font-light [&>span]:text-[14px]"
        dangerouslySetInnerHTML={{ __html: purifier.sanitize(highlight(addDynamicKeyValue, languages.js, "tsx")) }}
      />
      <p className="mb-6">
        where newKey variable stores actual key. Deleting an entry can be achieved by using a spread operator - … - which, in this case,
        packs every entry except the one with key `keyToDelete` into a new object. Now we can set state with that object. Different approach
        to deleting an entry would be setting value under a key to null or using third party library (like omit() from lodash).
      </p>
    </div>
  );
};
