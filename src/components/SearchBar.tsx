import { useState } from "react";
import { SearchIcon } from "../svg/SearchIcon";

export const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="flex w-full justify-center">
      <input
        className="bg-[#fefcfb0f] rounded-l-full py-2 px-4 !outline-none focus:shadow-[inset_0_0_3px_#fefcfb20] transition-all duration-300 ease-in-out w-1/3 focus:w-1/2 focus:bg-[#fefcfb18]"
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
