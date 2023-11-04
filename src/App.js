import { useState } from "react";
import NavBar from "./Components/Navigation/NavBar";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <NavBar onShowCart={showCartHandler} />
      <Products />
    </CartProvider>
  );
}

export default App;
