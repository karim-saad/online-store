import React from "react";
import { Alert, Row } from "react-bootstrap";

export default function ErrorMessage(props) {
  return (
    <Row>
      <Alert className="ml-2 pb-1" variant="danger">
        <Alert.Heading>Looks like something went wrong!</Alert.Heading>
        <p>{props.children}</p>
      </Alert>
    </Row>
  );
}
