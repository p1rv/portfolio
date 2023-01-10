import { useEffect, useState } from "react";
import { SearchIcon } from "../svg/SearchIcon";
import axios from "axios";
import { useRouter } from "./useRouter";
import { setLocation, useAppDispatch } from "../store";
import { getLocation } from "../apis/getLocation";

export const SearchBar: React.FC = () => {
  const { location, navigate } = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      if (location.search === "") return;
      const data = await getLocation(location.search);
      if (data.results.length === 0) return;
      const {
        results: [retrieved],
      } = data;
      const address = retrieved.formatted_address;
      const {
        geometry: {
          location: { lat, lng: lon },
        },
      } = retrieved;

      dispatch(setLocation({ address, coordinates: { lat, lon } }));
    })();
  }, []);

  const handleSubmit = async () => {
    const data = await getLocation(searchTerm);
    navigate({
      search: encodeURI(data.results[0].formatted_address),
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
