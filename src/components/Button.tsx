import classNames from "classnames";
import { PropsWithChildren } from "react";

export interface IButtonProps {
  navButton?: boolean;
  danger?: boolean;
  info?: boolean;
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
  ...rest
}) => {
  const classes = classNames(
    "button",
    "py-4",
    "px-6",
    {
      "flex flex-col items-center overflow-hidden group duration-200 transition-colors relative":
        navButton,
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
