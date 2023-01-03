import classNames from "classnames";
import { PropsWithChildren } from "react";

interface IButtonProps {
  primary?: boolean;
  selected?: boolean;
  danger?: boolean;
  info?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
  [key: string]: any;
}

export const Button: React.FC<PropsWithChildren<IButtonProps>> = ({
  children,
  primary,
  selected,
  className,
  ...rest
}) => {
  const classes = classNames(className, "button", "py-4", "px-6", "relative", {
    "hover:text-theme-1": !selected,
    "": primary,
    "hover:text-theme-2 text-theme-2 selected": selected,
  });
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
