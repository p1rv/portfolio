import { ChartWrapper } from "./ChartWrapper";
import { SearchBar } from "./SearchBar";
import { useRouter } from "../hooks/useRouter";
import { fetchOpenMeteo } from "../store/thunks/fetchOpenMeteo";
import { setOpenMeteo } from "../store/slices/openMeteoSlice";
import localforage from "localforage";
import { IRootState, useAppDispatch } from "../store";
import { useSelector } from "react-redux";
import { useEffect } from "react";

interface IForageForecast {
  expires: number;
}

export const Weather: React.FC = () => {
  const {
    location: { search },
    navigate,
  } = useRouter();

  const {
    data: {
      address,
      coordinates: { lat, lon },
    },
  } = useSelector((state: IRootState) => state.location);

  const dispatch = useAppDispatch();

  const updateForecast = async () => {
    if (address === "") return;
    const saved: IForageForecast | null = await localforage.getItem(`om${lat.toPrecision(5)}${lon.toPrecision(5)}`);
    if (!saved || saved.expires < new Date().getTime()) {
      dispatch(fetchOpenMeteo({ lat, lon }));
      return;
    }
    const { expires, ...rest } = saved;
    dispatch(setOpenMeteo(rest));
  };

  useEffect(() => {
    address !== decodeURI(search).replace(/\?/g, "") && navigate({ search: address });
    updateForecast();
  }, [address]);

  return (
    <div className="flex flex-col w-4/5 items-center h-full">
      <SearchBar />
      <ChartWrapper />
    </div>
  );
};
