import { Container, Row, Col } from "react-bootstrap";

const NavStorage = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center
    py-1 px-3 mx-2"
    >
      <Container className="Storage d-flex py-1">
        <Row className="justify-content-start align-items-start py-1 mx-auto">
          <Col className="mx-auto btn">
            <button className="px-2 py-2 text-white fs-3 fw-bold">
              Storage
            </button>
          </Col>
        </Row>
        <Row className="justify-content-end align-items-end py-2 mx-auto">
          <Col className="mx-auto linkstorage">
            <a href="" className="fs-3">
              Storage
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default NavStorage;
