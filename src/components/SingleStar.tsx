import classNames from "classnames";
import { useEffect, useRef, useState } from "react";

export const SingleStar: React.FC = () => {
  const [x, setX] = useState(Math.floor(Math.random() * 100));
  const [y, setY] = useState(Math.floor(Math.random() * 100));
  const defaultSize = useRef(Math.round(Math.random() * 30 + 15) / 10).current;
  const deviation = useRef(Math.round(Math.random() * 10 + 2) / 10).current;
  const blinkSpeed = useRef(Math.round(Math.random() * 5) / 100).current;

  const [direction, setDirection] = useState(Math.random() > 0.5 ? 1 : -1);
  const [size, setSize] = useState(defaultSize);

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (defaultSize - deviation > size || defaultSize + deviation < size) {
        setDirection((currentDirection) => currentDirection * -1);
        setSize((currentSize) => currentSize + direction * blinkSpeed * -1);
        return;
      }
      setX((currentX) => currentX + Math.floor(Math.random() * 100 - 50) / 1000);
      setY((currentY) => currentY + Math.floor(Math.random() * 100 - 50) / 1000);
      setSize((currentSize) => currentSize + direction * blinkSpeed);
    }, 100);

    return () => {
      clearTimeout(timerId);
    };
  }, [size]);

  const className = classNames("absolute", "rounded-full", "bg-theme-0", "shadow-theme-0", "shadow-star");

  return (
    <div
      className={className}
      style={{
        top: y + "%",
        left: x + "%",
        width: size,
        height: size,
      }}
    />
  );
};
