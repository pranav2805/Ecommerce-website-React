import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductDesc = (props) => {
  return (
    <Card className="shadow-lg" style={{ width: "18rem", margin: "0 auto" }}>
      <p>Product desc</p>
    </Card>
  );
};

export default ProductDesc;
