import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { SingleStar } from "./SingleStar";

export const StarryBackgroundWrapper: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const renderedStars = new Array(100)
    .fill(0)
    .map((_, i) => <SingleStar key={i} />);
  return (
    <div className="">
      <div
        className="stars-wrapper fixed inset-0 z-[-1] w-[110vw] h-[110vh] -translate-y-[5vh] -translate-x-[5vw]"
        style={{
          background: "radial-gradient(circle at 50% 150%, #0a1234, black)",
        }}
      >
        {renderedStars}
      </div>
      {children}
    </div>
  );
};
