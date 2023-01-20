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
        backgroundColor: "#030611",
      }}
    >
      <img
        src={logo}
        style={{ height: "30vh", width: "30vh" }}
        alt="Logo"
      />
    </div>
  );
};
