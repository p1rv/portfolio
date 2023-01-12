import localforage from "localforage";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { IRootState, useAppDispatch } from "../store";
import { ChartWrapper } from "./ChartWrapper";
import { SearchBar } from "./SearchBar";
import { useRouter } from "../hooks/useRouter";
import { fetchOpenMeteo } from "../store/thunks/fetchOpenMeteo";

export const Weather: React.FC = () => {
  const {
    location: { data },
  } = useSelector((state: IRootState) => state);
  const { address, coordinates } = data;
  const dispatch = useAppDispatch();

  const {
    navigate,
    location: { search },
  } = useRouter();

  useEffect(() => {
    address !== decodeURI(search).replace(/\?/g, "") &&
      navigate({ search: address });
    address && dispatch(fetchOpenMeteo(coordinates));
  }, [address]);

  return (
    <div className="flex flex-col w-4/5 items-center h-full">
      <SearchBar />
      <ChartWrapper />
    </div>
  );
};
