import { Ref, RefObject, useEffect, useMemo, useState } from "react";

export const useScrollHistory = (ref: RefObject<HTMLElement>) => {
  const [lastScroll, setLastScroll] = useState(0);
  const [direction, setDirection] = useState<0 | 1>(0);
  const [debouncedDirection, setDebouncedDirection] = useState<0 | 1>(direction);

  const scroll = () => {
    ref.current!.scrollTop > lastScroll ? setDirection(1) : setDirection(0);
    setLastScroll(ref.current!.scrollTop);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedDirection(direction);
    }, 200);
    return () => clearTimeout(timerId);
  }, [direction]);

  useEffect(() => {
    if (!ref.current) return;
    ref.current!.addEventListener("scroll", scroll);
    return () => ref.current!.removeEventListener("scroll", scroll);
  }, [lastScroll]);
  const value = useMemo(() => ({ direction: debouncedDirection }), [debouncedDirection]);
  return value;
};
