import { Nav, Navbar, Container, Button } from "react-bootstrap";
import React, { useContext } from "react";
import "./NavBar.css";
import CartContext from "../store/cart-context";
import classes from "./HeaderCartButton.module.css";
import { NavLink } from "react-router-dom";
// import CartIcon from "../Cart/CartIcon";

const NavBarHeader = (props) => {
  //   console.log("inside nav bar");
  const cartCtx = useContext(CartContext);
  let quantity = cartCtx.items.length;

  return (
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand
          href="#home"
          style={{ color: "white", marginRight: "20%" }}
        >
          E-Commerce Website
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            {/* <NavLink
              to="/home"
              className={(isActive) => (isActive ? classes.active : undefined)}
              style={{ color: "white", marginRight: "10%" }}
            > */}
            <NavLink to="/home" style={{ color: "white", marginRight: "10%" }}>
              HOME
            </NavLink>
            <NavLink to="/store" style={{ color: "white", marginRight: "10%" }}>
              STORE
            </NavLink>
            <NavLink to="/about" style={{ color: "white", marginRight: "10%" }}>
              ABOUT
            </NavLink>{" "}
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

export default NavBarHeader;
