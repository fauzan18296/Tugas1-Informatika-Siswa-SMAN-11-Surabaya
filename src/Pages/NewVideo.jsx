import ContentNewVideo from "../Components/Content/ContentNewVideo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const NewVideo = () => {
  return (
    <div
      className="bg-dark d-flex justify-content-center align items-center"
      style={{
        letterSpacing: "4px",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
        maxWidth: "100%",
      }}
    >
      <div className="d-flex align-items-center justify-content-start ms-4 my-3 fs-1">
        <Link to="/*" className="text-white">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
      </div>

      <div className="text-center text-white fw-semibold my-4">
        <h1>New Video Aestetic</h1>
      </div>
      <ContentNewVideo />
      <div className="text-center text-white fw-semibold my-4">
        <h1>New Video Meme</h1>
      </div>
      <ContentNewVideo />
    </div>
  );
};

export default NewVideo;
