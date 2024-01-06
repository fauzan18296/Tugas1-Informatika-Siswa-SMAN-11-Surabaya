import { Container, Row, Col } from "react-bootstrap";
import Footage1 from "../../assets/video/footage1.mp4";

const ContentNewVideo = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center py-3">
      <Row className="d-flex justify-content-center align-items-center flex-wrap g-3 row-cols-lg-3">
        <Col className="d-flex justify-content-center">
          <video
            controls
            src={Footage1}
            type="video/mp4"
            width={"300px"}
          ></video>
        </Col>
        <Col className="d-flex justify-content-center">
          <video
            controls
            src={Footage1}
            type="video/mp4"
            width={"300px"}
          ></video>
        </Col>
        <Col className="d-flex justify-content-center">
          <video
            controls
            src={Footage1}
            type="video/mp4"
            width={"300px"}
          ></video>
        </Col>
        <Col className="d-flex justify-content-center">
          <video
            controls
            src={Footage1}
            type="video/mp4"
            width={"300px"}
          ></video>
        </Col>
        <Col className="d-flex justify-content-center">
          <video
            controls
            src={Footage1}
            type="video/mp4"
            width={"300px"}
          ></video>
        </Col>
        <Col className="d-flex justify-content-center">
          <video
            controls
            src={Footage1}
            type="video/mp4"
            width={"300px"}
          ></video>
        </Col>
      </Row>
    </Container>
  );
};
export default ContentNewVideo;
