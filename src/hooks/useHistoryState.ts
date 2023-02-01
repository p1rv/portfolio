import { Dispatch, SetStateAction, useMemo, useRef, useState } from "react";

type IUseHistoryState<S> = [S, (newValue: S) => void, boolean];

export const useHistoryState = <S>(initialState: S): IUseHistoryState<S> => {
  const [state, setState] = useState(initialState);
  const wasChanged = useRef(false);
  const overrideSetState = (newValue: S) => {
    wasChanged.current = true;
    setState(newValue);
  };
  const values = useMemo(() => ({ state, overrideSetState, wasChanged }), [state]);
  return [values.state, values.overrideSetState, wasChanged.current];
};
