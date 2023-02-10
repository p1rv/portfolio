import { ReactSidebar } from "./ReactSidebar";
import { ReactExamples } from "./ReactExamples";

const React: React.FC = () => {
  return (
    <div className="flex flex-row lg:flex-col w-4/5 lg:w-[90vw] md:w-[95vw] items-start lg:items-center justify-center h-full">
      <ReactSidebar />
      <ReactExamples />
    </div>
  );
};

export default React;
