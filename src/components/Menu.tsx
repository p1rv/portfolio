import { useContext, useState } from "react";
import { NavButton } from "./NavButton";
import { routes } from "../utils/routes";
import { useRouter } from "../hooks/useRouter";
import { LanguageContext } from "../context/LanguageProvider";
import { Link } from "react-router-dom";

export const Menu: React.FC = () => {
  const [selected, setSelected] = useState(-1);
  const [prevSelected, setPrevSelected] = useState(-1);

  const { language } = useContext(LanguageContext);

  const {
    location: { pathname },
  } = useRouter();

  const filteredRoutes = Object.entries(routes).filter(([key]) => !["home", "zuzannaSarna"].includes(key));
  if (pathname === "/" && selected !== -1) {
    setPrevSelected(selected);
    setSelected(-1);
  }

  const renderedRoutes = filteredRoutes.map(([key, value], index) => {
    if (pathname.includes(value.path) && selected !== index) {
      setPrevSelected(selected);
      setSelected(index);
    }

    const _prevSelected = (() => {
      if (selected === -1 || prevSelected === -1 || prevSelected === selected) return 0;
      if (selected > prevSelected) return -1;
      return 1;
    })();

    return (
      <NavButton
        key={key}
        wasSelected={prevSelected === index}
        prevSelected={_prevSelected}
        link
        selected={selected === index}
      >
        <Link
          to={value.path}
          className="flex flex-col justify-center items-center py-4 px-6 sm:px-4"
        >
          <value.icon selected={selected === index} />
          {value.name[language]}
        </Link>
      </NavButton>
    );
  });

  return <div className="h-full flex">{renderedRoutes}</div>;
};
