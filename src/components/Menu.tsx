import { Button } from "./Button";

export const Menu: React.FC = () => {
  return (
    <div className="h-full">
      <Button
        selected
        primary
      >
        React
      </Button>
      <Button>Weather</Button>
      <Button>Contact</Button>
    </div>
  );
};
