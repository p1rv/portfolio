import { useEffect } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../store";
import { ChartWrapper } from "./ChartWrapper";
import { SearchBar } from "./SearchBar";
import { useRouter } from "./useRouter";

export const Weather: React.FC = () => {
  const {
    location: { address },
  } = useSelector((state: IRootState) => state);
  const {
    navigate,
    location: { search },
  } = useRouter();
  useEffect(() => {
    address !== decodeURI(search).replace(/\?/g, "") &&
      navigate({ search: address });
  }, [address]);

  return (
    <div className="flex flex-col w-4/5 items-center h-full backdrop-blur-sm">
      <SearchBar />
      <ChartWrapper />
    </div>
  );
};
