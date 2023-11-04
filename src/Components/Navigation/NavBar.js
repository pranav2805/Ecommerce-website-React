import { Nav, Navbar, Container, Button } from "react-bootstrap";
import React, { useContext } from "react";
import "./NavBar.css";
import CartContext from "../store/cart-context";
import classes from "./HeaderCartButton.module.css";
// import CartIcon from "../Cart/CartIcon";

const NavBar = (props) => {
  //   console.log("inside nav bar");
  const cartCtx = useContext(CartContext);
  let quantity = cartCtx.items.length;

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand
          href="#home"
          style={{ color: "white", marginRight: "20%" }}
        >
          E-Commerce Website
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              style={{ color: "white", marginRight: "10%" }}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              href="#link"
              style={{ color: "white", marginRight: "10%" }}
            >
              STORE
            </Nav.Link>
            <Nav.Link
              href="#link"
              style={{ color: "white", marginRight: "10%" }}
            >
              ABOUT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button onClick={props.onShowCart}>
          {/* <span className={classes.icon}>
            <CartIcon />
          </span> */}
          <span>Your Cart</span>
          <span className={classes.badge}>{quantity}</span>
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavBar;
