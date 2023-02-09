import classNames from "classnames";
import { PropsWithChildren } from "react";
import { Button, IButtonProps } from "./Button";

interface INavButtonProps extends IButtonProps {
  selected: boolean;
  wasSelected: boolean;
  prevSelected: -1 | 0 | 1;
  className?: string;
}

export const NavButton: React.FC<PropsWithChildren<INavButtonProps>> = ({
  children,
  selected,
  wasSelected,
  prevSelected = 0,
  className,
  ...rest
}) => {
  const classes = classNames(className, "overflow-hidden", {
    "hover:text-theme-1": !selected,
    "hover:text-theme-2 text-theme-2 selected": selected,
    "after:animate-[unfoldFromLeft_0.5s] ease-out": selected && prevSelected < 0,
    "after:animate-[unfoldFromRight_0.5s] ease-out": selected && prevSelected > 0,
    "after:animate-[foldToRight_0.5s] ease-in": wasSelected && prevSelected < 0,
    "after:animate-[foldToLeft_0.5s] ease-in": wasSelected && prevSelected > 0,
  });

  return (
    <Button
      className={classes}
      disabled={selected}
      navButton
      {...rest}
    >
      {children}
    </Button>
  );
};
