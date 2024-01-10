import { Container, Row, Col } from "react-bootstrap";
import Footage1 from "../../assets/video/footage1.mp4";
import Footage2 from "../../assets/video/footage2.mp4";
import Footage3 from "../../assets/video/footage3.mp4";
import Footage4 from "../../assets/video/footage4.mp4";
import Footage5 from "../../assets/video/footage5.mp4";
import Footage6 from "../../assets/video/footage6.mp4";

const ContentNewVideo = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center py-3">
      <Row className="d-flex justify-content-center align-items-center flex-wrap g-4 row-cols-lg-3">
        <Col className="d-flex justify-content-center">
          <video
            controls
            src={Footage1}
            type="video/mp4"
            width={"300px"}
            className="rounded"
          ></video>
        </Col>
        <Col className="d-flex justify-content-center">
          <video
            controls
            src={Footage2}
            type="video/mp4"
            width={"300px"}
            className="rounded"
          ></video>
        </Col>
        <Col className="d-flex justify-content-center">
          <video
            controls
            src={Footage3}
            type="video/mp4"
            width={"300px"}
            className="rounded"
          ></video>
        </Col>
        <Col className="d-flex justify-content-center">
          <video
            controls
            src={Footage4}
            type="video/mp4"
            width={"300px"}
            className="rounded"
          ></video>
        </Col>
        <Col className="d-flex justify-content-center">
          <video
            controls
            src={Footage5}
            type="video/mp4"
            width={"300px"}
            className="rounded"
          ></video>
        </Col>
        <Col className="d-flex justify-content-center">
          <video
            controls
            src={Footage6}
            type="video/mp4"
            width={"300px"}
            className="rounded"
          ></video>
        </Col>
      </Row>
    </Container>
  );
};
export default ContentNewVideo;
