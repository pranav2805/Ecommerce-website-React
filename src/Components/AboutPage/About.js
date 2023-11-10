import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom";
import classes from "./About.module.css";

function About() {
  return (
    <Container className={classes.container}>
      <div className="jumbotron">
        <h1 className="display-4">About Us</h1>
        <p className="lead">
          Welcome to our About page. Here, you can learn more about our
          organization, mission, and team.
        </p>
      </div>

      <Row>
        <Col md={6}>
          <Card>
            {/* <Card.Img variant="top" src="team-image.jpg" /> */}
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                We are dedicated to providing high-quality products and services
                to our customers. Our mission is to...
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            {/* <Card.Img variant="top" src="team-image.jpg" /> */}
            <Card.Body>
              <Card.Title>Our Team</Card.Title>
              <Card.Text>
                Meet the dedicated individuals who make our organization great.
                Our team is passionate about...
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Link to="/contactus">
        <Button variant="primary" href="/contact">
          Contact Us
        </Button>
      </Link>
    </Container>
  );
}

export default About;
