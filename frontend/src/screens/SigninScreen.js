import React from "react";
import { Row, Form } from "react-bootstrap";

export default function SigninScreen() {
  return (
    <Row className="justify-content-center">
      <Form className="w-50">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text>We'll never share your email with anyone else.</Form.Text>
        </Form.Group>
      </Form>
    </Row>
  );
}
