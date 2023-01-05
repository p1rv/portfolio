import { MainHomeText } from "./MainHomeText";

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-screen h-full items-center backdrop-blur-sm">
      <MainHomeText />
    </div>
  );
};
