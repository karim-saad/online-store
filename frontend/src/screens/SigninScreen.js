import React, { useState } from "react";
import { Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SigninScreen() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  return (
    <Row className="justify-content-center">
      <Form noValidate onSubmit={handleSubmit} className="w-50">
        <Form.Row className="my-4">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            name="email"
            label="email"
            placeholder="Enter email address"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Row>
        <Form.Row className="my-4">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            name="password"
            label="password"
            placeholder="Enter password"
            onChang={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Row>
        <Row className="justify-content-center my-4">
          <Button
            type="submit"
            variant="warning"
            className="mt-2 mx-2 w-100 border border-dark"
          >
            Sign In
          </Button>
        </Row>
        <Row className="ml-1 my-4">
          New customer? <Link to="/register">Create your account</Link>
        </Row>
      </Form>
    </Row>
  );
}
