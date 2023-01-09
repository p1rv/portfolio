import { useState } from "react";
import { SearchIcon } from "../svg/SearchIcon";

export const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="flex w-full justify-center">
      <input
        className="rounded-l-full text-theme-4 py-2 px-4 focus:outline-none focus:shadow-theme-4 focus:shadow-[inset_0_0_5px] transition-all duration-300 ease-in-out w-1/3 focus:w-2/3"
        value={searchTerm}
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="bg-theme-3 p-2 rounded-r-full cursor-pointer group hover:bg-theme-2 transition-colors duration-200">
        <SearchIcon className="w-6 h-6" />
      </div>
    </div>
  );
};
