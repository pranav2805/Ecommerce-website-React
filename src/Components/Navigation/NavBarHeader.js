import { Navbar, Container, Button } from "react-bootstrap";
import React, { useContext } from "react";
// import "./NavBar.css";
import CartContext from "../../store/cart-context";
import classes from "./NavBar.module.css";
import { NavLink, useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";
// import CartIcon from "../Cart/CartIcon";

const NavBarHeader = (props) => {
  //   console.log("inside nav bar");
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  let quantity = cartCtx.items.length;
  const history = useHistory();

  const logoutHandler = () => {
    authCtx.logout();
    history.replace("/auth");
  };

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
          {/* <Nav> */}
          {/* <NavLink
              to="/home"
              className={(isActive) => (isActive ? classes.active : undefined)}
              style={{ color: "white", marginRight: "10%" }}
            > */}
          <NavLink
            to="/home"
            className={(isActive) => (isActive ? classes.active : undefined)}
            style={{ color: "white", marginRight: "5%" }}
          >
            HOME
          </NavLink>
          {authCtx.isLoggedIn && (
            <NavLink to="/store" style={{ color: "white", marginRight: "5%" }}>
              STORE
            </NavLink>
          )}
          <NavLink to="/about" style={{ color: "white", marginRight: "5%" }}>
            ABOUT
          </NavLink>{" "}
          <NavLink
            to="/contactus"
            style={{ color: "white", marginRight: "5%" }}
          >
            CONTACT US
          </NavLink>{" "}
          {!authCtx.isLoggedIn && (
            <NavLink to="/auth" style={{ color: "white", marginRight: "5%" }}>
              LOGIN
            </NavLink>
          )}
          {authCtx.isLoggedIn && (
            <Button onClick={logoutHandler}>LOGOUT</Button>
          )}
          {/* </Nav> */}
        </Navbar.Collapse>
        {authCtx.isLoggedIn && (
          <Button onClick={props.onShowCart}>
            {/* <span className={classes.icon}>
            <CartIcon />
          </span> */}
            <span>Your Cart</span>
            <span className={classes.badge}>{quantity}</span>
          </Button>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBarHeader;
