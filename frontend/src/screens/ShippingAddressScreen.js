import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

export default function ShippingAddressScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  if (!userInfo) {
    props.history.push("/signin");
  }

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [name, setName] = useState(shippingAddress.name);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postcode, setPostcode] = useState(shippingAddress.postcode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ name, address, city, postcode, country }));
    props.history.push("/payment");
  };

  return (
    <Container fluid>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <Row className="justify-content-center">
        <Col lg="5">
          <h3 className="mt-2 mb-4">Shipping</h3>
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group controlId="formFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                label="fullName"
                placeholder="Enter your full name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                label="address"
                placeholder="Enter your address"
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                label="city"
                placeholder="Enter your city"
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Postcode</Form.Label>
              <Form.Control
                type="number"
                name="city"
                label="city"
                placeholder="Enter your postcode"
                onChange={(e) => setPostcode(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                name="country"
                label="country"
                placeholder="Enter your country"
                onChange={(e) => setCountry(e.target.value)}
                required
              />
            </Form.Group>
            <Button
              type="submit"
              variant="warning"
              className="mt-2 w-100 border border-dark"
            >
              Continue
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
