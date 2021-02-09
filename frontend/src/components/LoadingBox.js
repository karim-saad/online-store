import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";

export default function LoadingBox() {
  return (
    <Row className="pl-2">
      <Col>
        <Spinner animation="border" />
      </Col>
      <Col>
        <p>Loading...</p>
      </Col>
    </Row>
  );
}
