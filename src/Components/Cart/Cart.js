import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ListGroup } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const fetchCart = async () => {
  try {
    const email = localStorage.getItem("email").replace(/[@.]/g, "");
    const resp = await fetch(
      `https://crudcrud.com/api/b46745c9fa444afe80d607ced5664d71/cart${email}`
    );
    const cartItems = await resp.json();
    return cartItems;
  } catch (err) {
    console.log(err);
  }
};

const Cart = (props) => {
  // const cartCtx = useContext(CartContext);
  // const cartItems = cartCtx.items;
  // console.log("cartItems inside cart component", cartItems);
  // const mergedResult = {};
  // cartItems.forEach((item) => {
  //   if (!mergedResult[item.id]) {
  //     mergedResult[item.id] = { ...item };
  //   } else {
  //     mergedResult[item.id].quantity =
  //       Number(mergedResult[item.id].quantity) + Number(item.quantity);
  //   }
  // });

  //   const addToCartHandler = (product) => {
  //     cartCtx.addItem(product);
  //   };

  // const itemsInCart = Object.values(mergedResult);
  // let totalPrice = 0;
  // itemsInCart.forEach(
  //   (item) => (totalPrice += Number(item.price) * Number(item.quantity))
  // );

  const [cart, setCart] = useState({ cartItems: [], total: 0 });

  useEffect(() => {
    let ignore = false;
    fetchCart().then((cartItems) => {
      if (!ignore) {
        const mergedResult = {};
        cartItems.forEach((item) => {
          if (!mergedResult[item.id]) {
            mergedResult[item.id] = { ...item };
          } else {
            mergedResult[item.id].quantity =
              Number(mergedResult[item.id].quantity) + Number(item.quantity);
          }
        });
        const itemsInCart = Object.values(mergedResult);
        let totalPrice = 0;
        itemsInCart.forEach(
          (item) => (totalPrice += Number(item.price) * Number(item.quantity))
        );
        setCart({ cartItems: itemsInCart, total: totalPrice });
      }
    });
    // console.log(data);
    return () => {
      ignore = true;
    };
  }, []);

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
            {cart.cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ListGroup>
        </Modal.Body>
        <Modal.Footer className={classes.total}>
          <span>Total Amount:</span>
          <span>${cart.total}</span>
        </Modal.Footer>
      </Modal>
    </div>
    // </Overlay>
  );
};

export default Cart;
