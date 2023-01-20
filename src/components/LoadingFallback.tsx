import logo from "../svg/fav.svg";

export const LoadingFallback: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(4px)",
      }}
    >
      <img
        src={logo}
        id="fallback-icon"
        alt="Logo"
      />
    </div>
  );
};
