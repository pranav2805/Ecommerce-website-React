import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ListGroup } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItems = cartCtx.items;
  console.log("cartItems inside cart component", cartItems);
  const mergedResult = {};
  cartItems.forEach((item) => {
    if (!mergedResult[item.id]) {
      mergedResult[item.id] = { ...item };
    } else {
      mergedResult[item.id].quantity =
        Number(mergedResult[item.id].quantity) + Number(item.quantity);
    }
  });

  //   const addToCartHandler = (product) => {
  //     cartCtx.addItem(product);
  //   };

  const itemsInCart = Object.values(mergedResult);
  let totalPrice = 0;
  itemsInCart.forEach(
    (item) => (totalPrice += Number(item.price) * Number(item.quantity))
  );
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
            {itemsInCart.map((item) => (
              <CartItem item={item} />
            ))}
          </ListGroup>
        </Modal.Body>
        <Modal.Footer className={classes.total}>
          <span>Total Amount:</span>
          <span>${totalPrice}</span>
        </Modal.Footer>
      </Modal>
    </div>
    // </Overlay>
  );
};

export default Cart;
