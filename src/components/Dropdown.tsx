import classNames from "classnames";
import chevronIcon from "../svg/chevron-right.min.svg";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { Button } from "./Button";

interface IDropdownProps {
  buttonText: string;
  buttonClassName?: string;
  dropdownClassName?: string;
  autoClose?: boolean;
  className?: string;
  mobileConstant?: boolean;
}

export const Dropdown: React.FC<PropsWithChildren<IDropdownProps>> = ({
  children,
  buttonText,
  buttonClassName = "",
  dropdownClassName = "",
  className = "",
  mobileConstant,
  autoClose,
}) => {
  const [hidden, setHidden] = useState(true);

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!autoClose) return;
    const hide = ({ target }: MouseEvent) => {
      if (!wrapperRef.current?.contains(target as Element) || (target as HTMLElement).getAttribute("aria-label") === "dropdown-button") {
        setHidden(true);
      }
    };
    window.addEventListener("click", hide, { capture: true });
    return () => window.removeEventListener("click", hide, { capture: true });
  }, []);

  const wrapperClasses = classNames(className, "relative", {
    "w-[15vw] min-w-[200px] md:w-full lg:!min-w-[165px] md:mt-3": !className,
    "md:!m-0": mobileConstant,
  });

  const buttonClasses = classNames(
    "flex",
    "flex-row",
    "items-center",
    "justify-between md:justify-center",
    "w-full",
    "bg-[#fefcfb0f]",
    "py-2",
    "lg:px-3",
    {
      "bg-[#fefcfb1b] text-theme-1": !hidden && wrapperRef.current,
      "md:hidden": mobileConstant,
    },
    buttonClassName
  );

  const dropdownClasses = classNames(
    {
      "absolute z-10 overflow-hidden bg-[#030412] w-[300px] md:w-full shadow-[0_2px_5px] shadow-nightsky rounded-[28px]": autoClose,
      "md:relative md:z-10 md:bg-transparent md:shadow-none": mobileConstant,
      "z-[-10]": hidden && autoClose,
      hidden: hidden && !autoClose,
      "animate-[slideIn_0.2s_ease-in-out]": !hidden && autoClose,
    },
    dropdownClassName
  );

  return (
    <div
      className={wrapperClasses}
      ref={wrapperRef}
    >
      <Button
        primary={autoClose}
        rounded={autoClose}
        sidebar={!autoClose}
        className={buttonClasses}
        onClick={(e) => setHidden((currentHidden) => !currentHidden)}
      >
        <p className="translate-y-[-2px]">{buttonText}</p>
        <img
          src={chevronIcon}
          alt="chevron"
          className={`transition-all duration-200 ease-in-out w-3 h-3 ${!hidden && "rotate-90"} md:absolute md:right-3`}
        />
      </Button>
      <div className={dropdownClasses}>{children}</div>
    </div>
  );
};
