import { ReactSidebar } from "./ReactSidebar";
import { ReactExamples } from "./ReactExamples";

const React: React.FC = () => {
  return (
    <div className="flex flex-row w-4/5 items-start justify-center h-full">
      <ReactSidebar />
      <ReactExamples />
    </div>
  );
};

export default React;
