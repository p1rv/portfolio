import { RefObject, useEffect, useMemo, useState } from "react";

export const useIsIntersecting = (ref: RefObject<HTMLElement | null>, threshold: number = 0.01) => {
  const [wasIntersected, setWasIntersected] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  isIntersecting && !wasIntersected && setWasIntersected(true);
  const observer = useMemo(
    () => new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting), { threshold }),
    [ref.current]
  );
  useEffect(() => {
    if (!ref.current) return;
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref.current]);
  return { isIntersecting, wasIntersected };
};
