import { Nav, Navbar, Container, Button } from "react-bootstrap";
import "./NavBar.css";

const NavBar = (props) => {
  //   console.log("inside nav bar");
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
        <Button onClick={props.onShowCart}>Cart</Button>
      </Container>
    </Navbar>
  );
};

export default NavBar;
