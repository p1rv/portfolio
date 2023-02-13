import { highlight, languages } from "prismjs";
import purifier from "dompurify";

const addUserStart = `setUsers([newUserId, ...users]);`;
const addUserEnd = `setUsers([...users, newUserId]);`;
const addUserAtIndex = `setUsers([...users.slice(0, index), newUserId, ...users.slice(index)]);`;
const removeAtIndex = `setUsers(users.filter((user, currentIndex) => currentIndex !== indexToRemove));`;
const removeByValue = `setUsers(users.filter((user) => user !== userToRemove));`;
const addDynamicKeyValue = `setUsers({...users, [newKey]: newValue});`;

export const ReactArrayState: React.FC = () => {
  return (
    <div className="flex flex-col items-justify w-full">
      <p className="text-5xl text-right w-full mb-4">Array as state</p>
      <p className="mb-4">
        Arrays are more commonly used as state than objects, so here you will find how to update them properly. Imagine your `users` piece
        of state stores an array of users' IDs as strings and setUsers() is a setter for users:
      </p>
      <p>• Add new user at index 0:</p>
      <pre
        className="font-mono [&>span]:font-mono bg-code-background/80 p-4 rounded-xl text-[14px] font-light [&>span]:font-light [&>span]:text-[14px]"
        dangerouslySetInnerHTML={{ __html: purifier.sanitize(highlight(addUserStart, languages.js, "tsx")) }}
      />
      <p>• Add new user at the end of an array:</p>
      <pre
        className="font-mono [&>span]:font-mono bg-code-background/80 p-4 rounded-xl text-[14px] font-light [&>span]:font-light [&>span]:text-[14px]"
        dangerouslySetInnerHTML={{ __html: purifier.sanitize(highlight(addUserEnd, languages.js, "tsx")) }}
      />
      <p>• Adding new user at any index:</p>
      <pre
        className="font-mono [&>span]:font-mono bg-code-background/80 p-4 rounded-xl text-[14px] font-light [&>span]:font-light [&>span]:text-[14px]"
        dangerouslySetInnerHTML={{ __html: purifier.sanitize(highlight(addUserAtIndex, languages.js, "tsx")) }}
      />
      <p>• Removing element from given index:</p>
      <pre
        className="font-mono [&>span]:font-mono bg-code-background/80 p-4 rounded-xl text-[14px] font-light [&>span]:font-light [&>span]:text-[14px]"
        dangerouslySetInnerHTML={{ __html: purifier.sanitize(highlight(removeAtIndex, languages.js, "tsx")) }}
      />
      <p>• Removing element by value:</p>
      <pre
        className="font-mono [&>span]:font-mono bg-code-background/80 p-4 rounded-xl text-[14px] font-light [&>span]:font-light [&>span]:text-[14px]"
        dangerouslySetInnerHTML={{ __html: purifier.sanitize(highlight(removeByValue, languages.js, "tsx")) }}
      />
      <p className="mt-6">
        Not dissimilar to how we updated objects, destructuring was used here as well. We can manipulate whether element is added at the
        start or at the end of an array by placing it before or after spread array. Inserting at specified index requires slicing an array
        at that index and inserting new element between two segments. Deleting element is where it might confuse you the most - isn't that
        directly modifying the state? Fortunately, filter, among other built-in methods on arrays, returns new array on default. The only
        thing we need to do is pass arrow function checking if current element is different than the one we want to delete, no matter if it
        is an index or value itself. Just remember that value is passed as a first argument, index as second, but your IDE should help you
        with that.
      </p>
    </div>
  );
};
