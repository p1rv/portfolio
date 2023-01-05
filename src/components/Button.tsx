import classNames from "classnames";
import { PropsWithChildren } from "react";

interface IButtonProps {
  primary?: boolean;
  selected?: boolean;
  danger?: boolean;
  info?: boolean;
  flexCenter?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
  [key: string]: any;
}

export const Button: React.FC<PropsWithChildren<IButtonProps>> = ({
  children,
  primary,
  selected,
  className,
  flexCenter,
  ...rest
}) => {
  const classes = classNames(
    className,
    "button",
    "py-4",
    "px-6",
    "relative",
    "transition-colors",
    "duration-200",
    "group",
    {
      "hover:text-theme-1": !selected,
      "": primary,
      "hover:text-theme-2 text-theme-2 selected": selected,
      "flex flex-col items-center": flexCenter,
    }
  );
  return (
    <button
      disabled={selected}
      className={classes}
      {...rest}
    >
      {children}
    </button>
  );
};
