import React from "react";
import { useEffect } from "react";
import {
  Row,
  Col,
  Alert,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
  Container,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { Link } from "react-router-dom";

export default function CartScreen(props) {
  const productID = props.match.params.id;
  const quantity = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productID) {
      dispatch(addToCart(productID, quantity));
    }
  }, [dispatch, productID, quantity]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  };

  return (
    <Container fluid>
      <Row>
        <a className="Home-Link mb-3 pl-3" href="/">
          Back to Home
        </a>
      </Row>
      <Row>
        <Col>
          {cartItems.length === 0 ? (
            <Alert variant="primary">
              Cart is empty. <Alert.Link href="/">Go shopping</Alert.Link>{" "}
            </Alert>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item.product}>
                  <Row className="align-items-center">
                    <Col>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col xs lg="4">
                      <Link to={`/product/${item.product}`}>
                        <h4>{item.name}</h4>
                      </Link>
                    </Col>
                    <Col>
                      <Form>
                        <Form.Control
                          as="select"
                          value={item.quantity}
                          onChange={(e) =>
                            dispatch(
                              addToCart(item.product, Number(e.target.value))
                            )
                          }
                        >
                          {[...Array(item.countInStock).keys()].map((p) => (
                            <option key={p + 1} value={p + 1}>
                              {p + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Form>
                    </Col>
                    <Col>${item.price} AUD</Col>
                    <Col>
                      <Button
                        variant="danger"
                        block
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        Delete
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col xs lg="5">
          <Card>
            <Card.Body>
              <Card.Title>
                Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)} items)
                : ${cartItems.reduce((a, c) => a + c.quantity * c.price, 0)} AUD
              </Card.Title>
              <Button
                variant="success"
                onClick={checkoutHandler}
                block
                disabled={cartItems.length === 0}
              >
                Proceed to checkout
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
