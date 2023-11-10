import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductRating = (props) => {
  return (
    <Card className="shadow-lg" style={{ width: "18rem", margin: "0 auto" }}>
      <Card.Header>Overall Rating: 4/5</Card.Header>
      <Card.Body>A good product</Card.Body>
    </Card>
  );
};

export default ProductRating;
