import { useEffect, useState } from "react";
import { SearchIcon } from "../svg/SearchIcon";
import { useRouter } from "./useRouter";
import { IRootState, setLocation, useAppDispatch } from "../store";
import { getLocation } from "../store";
import { useSelector } from "react-redux";
import localforage from "localforage";

export const SearchBar: React.FC = () => {
  const {
    location: { search },
  } = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useAppDispatch();
  const {
    data: { address },
    error,
  } = useSelector(({ location }: IRootState) => location);

  const updateLocation = async (query: string) => {
    const savedLocation = await localforage.getItem(query);
    if (savedLocation) {
      dispatch(setLocation(savedLocation));
      return;
    }
    const res = await dispatch(getLocation(query)).unwrap();
    localforage.setItem(query, res);
  };

  useEffect(() => {
    (async () => {
      if (search !== "" && decodeURI(search).replace(/\?/g, "") !== address) {
        updateLocation(search);
      }
    })();
  }, []);

  const handleSubmit = async () => {
    updateLocation(searchTerm);
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
