import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Row,
  Badge,
  NavDropdown,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signout } from "../actions/userActions";

export default function MainNavbar() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <Row>
      <Navbar
        bg="light"
        variant="light"
        fixed="top"
        expand="lg"
        className="Main-Nav"
      >
        <Link to="/">
          <Navbar.Brand>
            <h2>Rivulet</h2>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-sm-2">
            <Nav.Link href="/cart">
              Cart{" "}
              {cartItems.length > 0 ? (
                <Badge pill variant="dark">
                  {cartItems.length}
                </Badge>
              ) : (
                <></>
              )}{" "}
            </Nav.Link>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id="basic-navbar-dropdown">
                <NavDropdown.Item href="#/signout" onClick={signoutHandler}>
                  Sign Out
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link href="/signin">Sign In</Nav.Link>
            )}
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search..."
              className="mr-sm-2"
            />
            <Button variant="secondary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </Row>
  );
}
