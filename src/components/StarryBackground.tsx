import { SingleStar } from "./SingleStar";

const StarryBackground: React.FC = () => {
  const renderedStars = new Array(100).fill(0).map((_, i) => <SingleStar key={i} />);
  return (
    <div
      className="stars-wrapper fixed inset-0 w-[130vw] h-[130vh] -translate-y-[15vh] -translate-x-[15vw] z-[-1] blur-[2px]"
      style={{
        background: "radial-gradient(circle at 50% 150%, #0a1234, black)",
      }}
    >
      {renderedStars}
    </div>
  );
};

export default StarryBackground;
