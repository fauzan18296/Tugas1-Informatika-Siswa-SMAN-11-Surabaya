import ContentNewVideo from "../Components/Content/ContentNewVideo";

const NewVideo = () => {
  return (
    <div
      className="bg-dark"
      style={{
        letterSpacing: "4px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <div className="text-center text-white">
        <h1>New Video Random</h1>
      </div>
      <ContentNewVideo />
    </div>
  );
};

export default NewVideo;
