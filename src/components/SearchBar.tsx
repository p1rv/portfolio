import { useEffect, useState } from "react";
import { SearchIcon } from "../svg/SearchIcon";
import axios from "axios";
import { useRouter } from "./useRouter";

export const SearchBar: React.FC = () => {
  const { location, navigate } = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    (async () => {
      if (location.search === "") return;
      const res = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${
          location.search
        }&key=${import.meta.env.VITE_GEOCODING_KEY}`
      );
    })();
  }, []);

  const handleSubmit = async () => {
    const res = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${searchTerm.replace(
        /\ /g,
        "+"
      )}&key=${import.meta.env.VITE_GEOCODING_KEY}`
    );
    navigate({
      search: encodeURI(res.data.results[0].formatted_address),
    });
    setSearchTerm("");
  };

  return (
    <div className="flex w-full justify-center">
      <input
        className="bg-[#fefcfb0f] rounded-l-full py-2 px-4 !outline-none focus:shadow-[inset_0_0_3px_#fefcfb20] transition-all duration-300 ease-in-out w-1/3 focus:w-1/2 focus:bg-[#fefcfb18]"
        value={searchTerm}
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={({ key }) => key === "Enter" && handleSubmit()}
      />
      <div
        className="bg-theme-3 p-2 rounded-r-full cursor-pointer group hover:bg-theme-2 transition-colors duration-200"
        onClick={handleSubmit}
      >
        <SearchIcon className="w-6 h-6" />
      </div>
    </div>
  );
};
