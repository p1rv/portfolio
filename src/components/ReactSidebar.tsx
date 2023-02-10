import { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/LanguageProvider";
import { reactRoutes } from "../utils/reactRoutes";

export const ReactSidebar: React.FC = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="flex-1 flex flex-col">
      <Link to={reactRoutes.vite.path}>{reactRoutes.vite.name[language]}</Link>
      <Link to={reactRoutes.cra.path}>{reactRoutes.cra.name[language]}</Link>
      <Link to={reactRoutes.state.path}>{reactRoutes.state.name[language]}</Link>
      <Link to={reactRoutes.stateObject.path}>{reactRoutes.stateObject.name[language]}</Link>
      <Link to={reactRoutes.stateArray.path}>{reactRoutes.stateArray.name[language]}</Link>
    </div>
  );
};
