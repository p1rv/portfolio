import { ChangeEvent, useEffect, useRef, useState } from "react";
import { SearchIcon } from "../svg/SearchIcon";
import { useRouter } from "../hooks/useRouter";
import { ILocationData, IRootState, setLocation, useAppDispatch } from "../store";
import { fetchLocation } from "../store";
import { useSelector } from "react-redux";
import localforage from "localforage";
import classNames from "classnames";

export const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [touched, setTouched] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  const dispatch = useAppDispatch();
  const {
    data: { address },
    error,
    isLoading,
  } = useSelector((state: IRootState) => state.location);

  const {
    location: { search },
  } = useRouter();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const updateLocation = async (query: string) => {
    const savedLocation: ILocationData | null = await localforage.getItem(query);
    if (savedLocation) {
      dispatch(setLocation(savedLocation));
      return;
    }
    dispatch(fetchLocation(query))
      .unwrap()
      .then((res) => localforage.setItem(query, res))
      .catch((err) => {
        setTouched(false);
      });
  };

  useEffect(() => {
    if (search !== "" && decodeURI(search).replace(/\?/g, "") !== address) {
      updateLocation(search);
      return;
    }
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => updateLocation(`${latitude},${longitude}`));
  }, []);

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.onfocus = () => {
      setIsFocused(true);
    };
    inputRef.current.onblur = () => {
      setIsFocused(false);
    };
  }, [inputRef.current]);

  const handleSubmit = async () => {
    updateLocation(searchTerm);
    setSearchTerm("");
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    !touched && setTouched(true);
  };

  const classes = classNames("flex w-full justify-center", {
    "animate-[shake_0.5s_ease-out]": !touched && error && !searchTerm,
  });

  const inputWrapper = classNames("relative w-1/3 flex items-center transition-all duration-300 ease-in-out", {
    "after:content-[' '] after:w-6 after:h-6 after:rounded-full after:border-4 after:border-theme-0 after:border-l-transparent after:absolute after:right-2 after:animate-spin":
      isLoading,
    "w-1/2": isFocused,
  });

  const inputClasses = classNames(
    "bg-[#fefcfb0f] rounded-l-full py-2 px-4 !outline-none focus:shadow-[inset_0_0_3px_#fefcfb20] w-full focus:bg-[#fefcfb18]",
    {
      "placeholder:text-red-300 !shadow-[inset_0_0_3px_#ff0000a0]": !touched && error && !searchTerm,
    }
  );

  return (
    <div className={classes}>
      <div className={inputWrapper}>
        <input
          ref={inputRef}
          className={inputClasses}
          value={searchTerm}
          disabled={isLoading}
          placeholder={(!touched && error && "Address not found, try to be more specific...") || "Search"}
          onChange={(e) => onInputChange(e)}
          onKeyDown={({ key }) => key === "Enter" && handleSubmit()}
        />
      </div>
      <div
        className="bg-theme-3 p-2 rounded-r-full cursor-pointer group hover:bg-theme-2 transition-colors duration-200 flex items-center"
        onClick={handleSubmit}
      >
        <SearchIcon className="w-6 h-6" />
      </div>
    </div>
  );
};
