import { ChangeEvent, useEffect, useState } from "react";
import { SearchIcon } from "../svg/SearchIcon";
import { useRouter } from "../hooks/useRouter";
import {
  ILocationData,
  IRootState,
  setIsLocationLoading,
  setLocation,
  useAppDispatch,
} from "../store";
import { getLocation } from "../store";
import { useSelector } from "react-redux";
import localforage from "localforage";
import classNames from "classnames";

export const SearchBar: React.FC = () => {
  const {
    location: { search },
  } = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useAppDispatch();
  const {
    data: { address },
    error,
    isLoading,
  } = useSelector(({ location }: IRootState) => location);
  const [touched, setTouched] = useState(true);

  const updateLocation = async (query: string) => {
    dispatch(setIsLocationLoading(true));
    const savedLocation: ILocationData | null = await localforage.getItem(
      query
    );
    if (savedLocation) {
      dispatch(setLocation(savedLocation));
      return;
    }
    dispatch(getLocation(query))
      .unwrap()
      .then((res) => localforage.setItem(query, res))
      .catch((err) => {
        setTouched(false);
      });
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

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    !touched && setTouched(true);
  };

  const classes = classNames("flex w-full justify-center ", {
    "animate-[shake_0.5s_ease-out]": !touched && error && !searchTerm,
  });

  const inputClasses = classNames(
    "bg-[#fefcfb0f] rounded-l-full py-2 px-4 !outline-none focus:shadow-[inset_0_0_3px_#fefcfb20] transition-all duration-300 ease-in-out w-1/3 focus:w-1/2 focus:bg-[#fefcfb18]",
    {
      "placeholder:text-red-300 !shadow-[inset_0_0_3px_#ff0000a0]":
        !touched && error && !searchTerm,
    }
  );
  return (
    <div className={classes}>
      <input
        className={inputClasses}
        value={searchTerm}
        placeholder={
          (!touched &&
            error &&
            "Address not found, try to be more specific...") ||
          "Search"
        }
        onChange={(e) => onInputChange(e)}
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
