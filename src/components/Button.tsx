import classNames from "classnames";
import { PropsWithChildren } from "react";

export interface IButtonProps {
  navButton?: boolean;
  primary?: boolean;
  secondary?: boolean;
  selected?: boolean;
  className?: string;
  disabled?: boolean;
  rounded?: boolean;
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
  rounded,
  ...rest
}) => {
  const classes = classNames(className, "button", "py-4", "px-6 sm:px-4", "duration-200", "transition-colors", "min-w-min", {
    "cursor-pointer": !disabled,
    "rounded-full": rounded,
    "primary flex flex-col items-center overflow-hidden group relative": navButton,
    "hover:text-theme-1": primary,
    "text-theme-1": primary && disabled,
    "bg-transparent !text-theme-1 w-full py-2 px-2 hover:bg-theme-1 hover:!text-theme-4": secondary,
    "!bg-theme-1 !text-theme-4": secondary && selected,
    "text-theme-4": secondary && !disabled,
    "hover:!bg-theme-1 hover:!text-theme-4": secondary && disabled,
  });

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
