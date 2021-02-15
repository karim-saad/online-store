import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../actions/userActions";
import { useEffect } from "react";
import LoadingBox from "../components/LoadingBox.js";
import ErrorMessage from "../components/ErrorMessage";

export default function SigninScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  return (
    <Row className="justify-content-center">
      <Col xs lg="5">
        <h3 className="mb-2">Sign In</h3>
        {loading && <LoadingBox />}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              label="email"
              placeholder="Enter email address"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              label="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Button
            type="submit"
            variant="warning"
            className="mt-2 border border-dark w-100"
          >
            Sign In
          </Button>
          <Row className="ml-1 my-4">
            <p className="mr-1">New customer?</p>
            <Link to={`/register?redirect=${redirect}`}>
              Create your account
            </Link>
          </Row>
        </Form>
      </Col>
    </Row>
  );
}
