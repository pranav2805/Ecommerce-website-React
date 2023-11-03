import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, ListGroup, Row, Col, Form } from "react-bootstrap";

const cartElements = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },

  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },

  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const Cart = (props) => {
  const [cart, setCart] = useState(cartElements);
  // const [showCart, setShowCart] = useState(false);

  //   const addToCart = (product) => {
  //     // setCart([...cart, product]);
  //   };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter(
      (item) => Number(item.id) !== Number(product.id)
    );
    setCart(updatedCart);
  };

  return (
    // <Overlay>
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal show={true} onHide={props.onHideCart} dialogClassName="cart-modal">
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            {/* {cart.map((item) => (
              <ListGroup.Item key={item.id}>
                {item.title} - ${item.price}
                <Button
                  variant="danger"
                  className="float-right"
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </Button>
              </ListGroup.Item>
            ))} */}
            {cart.map((item) => (
              <ListGroup.Item key={item.id}>
                <Row>
                  <Col md={8}>
                    <span>{item.title}</span>
                  </Col>
                  <Col md={2}>
                    <Form.Control
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) => {
                        const updatedQuantity = parseInt(e.target.value, 10);
                        if (!isNaN(updatedQuantity) && updatedQuantity >= 1) {
                          item.quantity = updatedQuantity;
                          setCart([...cart]);
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
                      onClick={() => removeFromCart(item)}
                    >
                      Remove
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>
      </Modal>
    </div>
    // </Overlay>
  );
};

export default Cart;
