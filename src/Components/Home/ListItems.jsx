import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faFileInvoice,
  faFileLines,
  faFilePdf,
  faImages,
} from "@fortawesome/free-solid-svg-icons";

const ListItems = () => {
  return (
    <div className="List  d-flex justify-content-center align-items-center">
      <Container className="contents d-flex justify-content-center align-items-center">
        <div className="items d-flex mx-auto align-items-center">
          <Row className="mx-auto">
            <Col className="mx-auto gx-5">
              <FontAwesomeIcon
                className="text-white p-2 mx-2 d-flex justify-content-center align-items-center"
                icon={faCirclePlay}
                style={{
                  background: "#F1C385",
                  fontSize: "25px",
                  borderRadius: "10px",
                }}
              />
              <Link
                to="/newvideoshot"
                className="text-center text-decoration-none fs-5 fw-bold text-black"
              >
                New Video Shot
              </Link>
              <caption className="cap mx-auto">168 Videos = 3.8 GB</caption>
            </Col>
          </Row>
          <Row className="mx-auto">
            <Col className="mx-auto gx-5">
              <FontAwesomeIcon
                className="text-white p-2 mx-2 d-flex justify-content-center align-items-center "
                icon={faFileInvoice}
                style={{
                  background: "#7FECE1",
                  fontSize: "25px",
                  borderRadius: "10px",
                }}
              />
              <Link
                to="/creativeuidesign"
                className="text-decoration-none fs-5 fw-bold  text-black"
              >
                Creative UI Design
              </Link>
              <caption className="cap mx-auto">518 image = 1.6 GB</caption>
            </Col>
          </Row>
          <Row className="mx-auto">
            <Col className="mx-auto gx-5">
              <FontAwesomeIcon
                className="text-white p-2 mx-2 d-flex justify-content-center align-items-center"
                icon={faFileLines}
                style={{
                  background: "#EA78F7",
                  fontSize: "25px",
                  borderRadius: "10px",
                }}
              />
              <Link
                to="/uiuxdesign"
                className="text-decoration-none fs-5 fw-bold text-black"
              >
                Ui/Ux Design
              </Link>
              <caption className="cap mx-auto">134 Files = 2.9 GB</caption>
            </Col>
          </Row>
          <Row className="mx-auto">
            <Col className="mx-auto gx-5">
              <FontAwesomeIcon
                className="text-white p-2 mx-2 d-flex justify-content-center align-items-center "
                icon={faFilePdf}
                style={{
                  background: "#87D8F5",
                  fontSize: "25px",
                  borderRadius: "10px",
                }}
              />
              <Link
                to="/casestudypdf"
                className="text-decoration-none fs-5 fw-bold text-black"
              >
                Case Study PDF
              </Link>
              <caption className="cap mx-auto">65 Files = 1.2 GB</caption>
            </Col>
          </Row>
          <Row className="mx-auto">
            <Col className="mx-auto gx-5">
              <FontAwesomeIcon
                className="text-white p-2 mx-2 d-flex justify-content-center align-items-center "
                icon={faImages}
                style={{
                  background: "#816CDA",
                  fontSize: "25px",
                  borderRadius: "10px",
                }}
              />
              <Link
                to="/imageeditingpro"
                className="text-decoration-none fs-5 fw-bold text-black"
              >
                Image Editing Pro
              </Link>
              <caption className="cap mx-auto">896 Image = 1.6 GB</caption>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
export default ListItems;
