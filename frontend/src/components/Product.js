import React from "react";
import Rating from "./Rating";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function Product(props) {
  const { product } = props;
  return (
    <Card
      key={product._id}
      href={"/product/" + product._id}
      className="Main-Card mx-auto my-1"
    >
      <Link to={"/product/" + product._id} className="Card-Link">
        <Card.Img variant="top" src={product.image} className="Card-Img" />
      </Link>
      <Card.Body>
        <Link to={"/product/" + product._id} className="Card-Link">
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Card.Subtitle>${product.price} AUD</Card.Subtitle>
        <Card.Text>{product.description}</Card.Text>
        <Rating rating={product.rating} numReviews={product.numReviews} />
      </Card.Body>
    </Card>
  );
}
