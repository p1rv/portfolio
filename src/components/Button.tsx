import classNames from "classnames";
import { PropsWithChildren } from "react";

export interface IButtonProps {
  navButton?: boolean;
  primary?: boolean;
  secondary?: boolean;
  selected?: boolean;
  className?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
  [key: string]: any;
}

export const Button: React.FC<PropsWithChildren<IButtonProps>> = ({
  children,
  navButton,
  className,
  disabled,
  selected,
  primary,
  secondary,
  ...rest
}) => {
  const classes = classNames(
    "button",
    "py-4",
    "px-6 sm:px-4",
    "duration-200",
    "transition-colors",
    "min-w-min",
    {
      "cursor-pointer": !disabled,
      "primary flex flex-col items-center overflow-hidden group relative": navButton,
      "hover:text-theme-1": primary,
      "bg-theme-0 text-theme-3 w-full hover:!bg-nightsky/50 py-3 border-theme-0 border-b border-t-0 border-x-0 last:border-0 hover:!text-theme-3":
        secondary,
      "!bg-[#000010] !text-theme-1": secondary && selected,
      "!text-theme-1": primary && disabled,
    },
    className
  );

  return (
    <button
      disabled={disabled}
      className={classes}
      {...rest}
    >
      {children}
    </button>
  );
};
