import React from "react";
import { Row } from "react-bootstrap";
import CheckoutSteps from "../components/CheckoutSteps";

export default function ShippingAddressScreen(props) {
  return (
    <Row>
      <CheckoutSteps step1 step2></CheckoutSteps>
    </Row>
  );
}
