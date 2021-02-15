import React from "react";
import { Row, Col } from "react-bootstrap";

export default function CheckoutSteps(props) {
  return (
    <Row className="Checkout-Steps w-100 px-4">
      <Col
        className={
          props.step1 ? "active border-top border-warning font-weight-bold" : ""
        }
      >
        Sign In
      </Col>
      <Col
        className={
          props.step2 ? "active border-top border-warning font-weight-bold" : ""
        }
      >
        Shipping
      </Col>
      <Col
        className={
          props.step3 ? "active border-top border-warning font-weight-bold" : ""
        }
      >
        Payment
      </Col>
      <Col
        className={
          props.step4 ? "active border-top border-warning font-weight-bold" : ""
        }
      >
        Place Order
      </Col>
    </Row>
  );
}
