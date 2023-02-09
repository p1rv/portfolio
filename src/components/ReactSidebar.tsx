import { Link } from "react-router-dom";

export const ReactSidebar: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col">
      <Link to="build-vite">Build with Vite</Link>
      <Link to="build-cra">Build with create-react-app</Link>
      <Link to="first-app">Main file</Link>
    </div>
  );
};
