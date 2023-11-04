import { useContext } from "react";
import {
  Button,
  Modal,
  ListGroup,
  Row,
  Col,
  Form,
  Card,
} from "react-bootstrap";
import CartContext from "../store/cart-context";

const cartItem = (props) => {
  const item = props.item;
  const cartCtx = useContext(CartContext);
  const removeFromCartHandler = (product) => {
    cartCtx.removeItem(product);
  };
  return (
    <ListGroup.Item key={item.id}>
      <Row>
        <Col md={5}>
          <Card.Img variant="top" src={item.imageUrl} />
        </Col>
        <Col md={3}>
          <span>{item.title}</span>
        </Col>
        <Col md={2}>
          <Form.Control
            type="number"
            value={item.quantity}
            min="1"
            onChange={(e) => {
              console.log("onchange quantity");
              const updatedQuantity = parseInt(e.target.value, 10);
              if (!isNaN(updatedQuantity) && updatedQuantity >= 1) {
                item.quantity = updatedQuantity;
                //   setCart([...cart]);
              }
            }}
          />
        </Col>
        <Col md={2}>
          <span>${item.price}</span>
        </Col>
        <Col md={2}>
          <Button
            variant="danger"
            className="float-right"
            onClick={() => removeFromCartHandler(item)}
          >
            Remove
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default cartItem;
