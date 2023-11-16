import { Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import { Link } from "react-router-dom";

const Product = (props) => {
  const cartCtx = useContext(CartContext);
  const addItemToCartHandler = async (event) => {
    event.preventDefault();
    // console.log("inside add item cart handler");
    // console.log("cart items>>", cartCtx.items);
    // cartCtx.addItem(props.product);
    const email = localStorage.getItem("email").replace(/[@.]/g, "");

    const newProduct = await fetch(
      `https://crudcrud.com/api/b46745c9fa444afe80d607ced5664d71/cart${email}`,
      {
        method: "POST",
        body: JSON.stringify(props.product),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // console.log(cartCtx.items);
    console.log(newProduct);
  };
  return (
    // <Link to={`products/${props.id}`}>
    <Col md={6} style={{ padding: "2%" }}>
      <Card
        className="shadow-lg"
        style={{ width: "18rem", margin: "0 auto", height: "100%" }}
        key={props.id}
      >
        <Card.Img
          style={{ objectFit: "cover", height: "100%" }}
          variant="top"
          src={props.imageUrl}
        />
        <Card.Body>
          <Link to={`products/${props.id}`}>
            <Card.Title>{props.title}</Card.Title>
          </Link>
          <Card.Text>${props.price}</Card.Text>
          <Button variant="primary" onClick={addItemToCartHandler}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
    // </Link>
  );
};

export default Product;
