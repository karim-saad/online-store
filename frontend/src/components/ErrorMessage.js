import React from "react";
import { Alert, Container } from "react-bootstrap";

export default function ErrorMessage(props) {
  return (
    <Container>
      <Alert className="pb-0" variant="danger">
        <p>{props.children}</p>
      </Alert>
    </Container>
  );
}
