import { Menu } from "./Menu";

export const Header: React.FC = () => {
  return (
    <div className="flex w-full flex-row justify-between h-20 border-2">
      <p>Title</p>
      <Menu />
    </div>
  );
};
