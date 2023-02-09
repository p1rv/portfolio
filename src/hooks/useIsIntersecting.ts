import { RefObject, useEffect, useMemo, useState } from "react";

export const useIsIntersecting = (ref: RefObject<HTMLElement | null>, threshold: number = 0.01) => {
  const [wasIntersected, setWasIntersected] = useState(false);
  const [intersectingState, setIntersectingState] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([{ isIntersecting }]) => {
          intersectingState && !isIntersecting && setWasIntersected(true);
          setIntersectingState(isIntersecting);
        },
        { threshold }
      ),
    [ref.current]
  );

  useEffect(() => {
    if (!ref.current) return;
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref.current]);

  return { isIntersecting: intersectingState, wasIntersected };
};
