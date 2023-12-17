import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const NavStorageAndCLoudes = () => {
  const navigate = useNavigate();
  return (
    <div
      className="d-flex justify-content-center align-items-center
    py-1 px-3 mx-2"
    >
      <Container className="Storage d-flex py-1">
        <Row className="justify-content-start align-items-start py-1 mx-auto">
          <Col className="mx-auto ">
            <button
              onClick={() => navigate("/Storage")}
              className="px-2 py-2 text-white fs-3 fw-bold btn"
            >
              Storage
            </button>
          </Col>
        </Row>
        <Row className="justify-content-end align-items-end py-2 mx-auto">
          <Col className="mx-auto linkstorage">
            <Link to="/Cloudes" href="" className="fs-3">
              Cloudes
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default NavStorageAndCLoudes;
