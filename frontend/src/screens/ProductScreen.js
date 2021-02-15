import React from "react";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Container,
  Form,
  Button,
} from "react-bootstrap";
import Rating from "../components/Rating";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../components/LoadingBox";
import ErrorMessage from "../components/ErrorMessage";
import { detailsProduct } from "../actions/productActions";
import { useEffect, useState } from "react";

export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const productID = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productID));
  }, [dispatch, productID]);

  const addToCartHandler = () => {
    props.history.push(`/cart/${productID}?quantity=${quantity}`);
  };

  return (
    <Row>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <Container fluid>
          <Row>
            <a className="Home-Link mb-3 pl-3" href="/">
              Back to Home
            </a>
          </Row>
          <Row>
            <Col xs lg="auto">
              <Image
                className="Large-Image border"
                src={product.image}
                alt={product.name}
                rounded
              />
            </Col>
            <Col xs lg="3">
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2>{product.name}</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  />
                </ListGroup.Item>
                <ListGroup.Item>Price: ${product.price} AUD</ListGroup.Item>
                <ListGroup.Item>{product.description}</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col xs lg="3">
              <Card>
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  />
                  <Row className="my-1">
                    <Col>
                      <Card.Text>Status</Card.Text>
                    </Col>
                    <Col>
                      {product.countInStock > 0 ? (
                        <Card.Text className="In-Stock">In Stock</Card.Text>
                      ) : (
                        <Card.Text className="Out-Of-Stock">
                          Unavailable
                        </Card.Text>
                      )}
                    </Col>
                  </Row>
                  {product.countInStock > 0 ? (
                    <Row className="align-items-center my-1">
                      <Col>
                        <Card.Text>Quantity</Card.Text>
                      </Col>
                      <Col>
                        <Form>
                          <Form.Control
                            as="select"
                            onChange={(e) => setQuantity(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (p) => (
                                <option key={p + 1} value={p + 1}>
                                  {p + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        </Form>
                      </Col>
                    </Row>
                  ) : (
                    <></>
                  )}
                  {product.countInStock > 0 ? (
                    <Button
                      className="w-100 mt-1"
                      variant="success"
                      onClick={addToCartHandler}
                    >
                      Add to Cart
                    </Button>
                  ) : (
                    <></>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </Row>
  );
}
