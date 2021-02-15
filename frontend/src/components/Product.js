import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Product(props) {
  const { product } = props;
  return (
    <Col>
      <Card
        key={product._id}
        href={"/product/" + product._id}
        className="my-1"
        border="light"
      >
        <Link to={"/product/" + product._id} className="Card-Link">
          <Card.Img variant="top" src={product.image} />
        </Link>
        <Card.Body>
          <Link to={"/product/" + product._id} className="Card-Link">
            <Card.Title className="text-center">{product.name}</Card.Title>
          </Link>
          <Card.Subtitle className="text-center">
            ${product.price} AUD
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </Col>
  );
}
