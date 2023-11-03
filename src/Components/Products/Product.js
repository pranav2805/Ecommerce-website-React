import { Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Product = (props) => {
  return (
    <Col md={6} style={{ padding: "5%" }}>
      <Card style={{ width: "18rem", margin: "0 auto" }}>
        <Card.Img variant="top" src={props.imageUrl} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>${props.price}</Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
