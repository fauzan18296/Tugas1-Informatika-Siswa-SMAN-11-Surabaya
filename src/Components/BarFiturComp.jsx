import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

const BarFitur = () => {
  return (
    <div className="text-feature mt-5" expand="xxl">
      <Container className="d-flex align-items-center sub-text ">
        <Row className="mx-auto mt-4 fs-4 ">
          <Col className="mx-auto mt-4 fw-semibold">
            <p>Used 186 GB</p>
          </Col>
        </Row>
        <Row className="mx-auto mt-4 fs-4">
          <Col className="mx-auto mt-4 fw-semibold">
            <p>Total 256 GB</p>
          </Col>
        </Row>
      </Container>
      <Container className="d-flex align-items-center bar-picker mt-4  mx-auto ">
        <Row className="mx-auto fs-4">
          <Col className="mx-5 fw-semibold">
            <button className="fitur-bar d-flex align-items-center"></button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default BarFitur;
