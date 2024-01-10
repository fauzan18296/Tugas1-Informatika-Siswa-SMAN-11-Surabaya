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
        maxWidth: "100%",
      }}
    >
      <div className="text-center text-white my-4">
        <h1>New Video Aestetic</h1>
      </div>
      <ContentNewVideo />
      <div className="text-center text-white my-4">
        <h1>New Video Meme</h1>
      </div>
      <ContentNewVideo />
    </div>
  );
};

export default NewVideo;
