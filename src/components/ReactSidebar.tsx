import { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/LanguageProvider";
import { useRouter } from "../hooks/useRouter";
import { reactRoutes } from "../utils/reactRoutes";
import { Button } from "./Button";
import { Dropdown } from "./Dropdown";

export const ReactSidebar: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const {
    location: { pathname },
  } = useRouter();

  return (
    <div className="flex-1 lg:w-[75vw] lg:items-center flex flex-col lg:mb-6 min-w-[300px]">
      <Dropdown
        buttonText="Environments"
        className="w-3/4 lg:w-[90vw] md:w-[95vw]"
      >
        <div className="flex flex-col ml-6 my-2">
          {Object.values(reactRoutes)
            .filter(({ parent }) => parent === "env")
            .map(({ path, name }) => (
              <Button
                sidebar
                selected={pathname.split("/").includes(path)}
                link
                key={path}
              >
                <Link
                  className="px-4 py-1 block"
                  to={path}
                >
                  {name[language]}
                </Link>
              </Button>
            ))}
        </div>
      </Dropdown>
      <Dropdown
        buttonText="useState"
        className="w-3/4 lg:w-[90vw] md:w-[95vw]"
      >
        <div className="flex flex-col ml-6 my-2">
          {Object.values(reactRoutes)
            .filter(({ parent }) => parent === "state")
            .map(({ path, name }) => (
              <Button
                sidebar
                selected={pathname.split("/").includes(path)}
                link
                key={path}
              >
                <Link
                  className="px-4 py-1 block"
                  to={path}
                >
                  {name[language]}
                </Link>
              </Button>
            ))}
        </div>
      </Dropdown>
    </div>
  );
};
