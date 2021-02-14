import React, { useState } from "react";
import { Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../actions/userActions";
import { useEffect } from "react";

export default function SigninScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

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
      <Form noValidate onSubmit={handleSubmit} className="w-50">
        <Form.Group controlId="formBasicEmail">
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
        <Form.Group>
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
          <p className="mr-1">New customer?</p>
          <Link to="/register">Create your account</Link>
        </Row>
      </Form>
    </Row>
  );
}
