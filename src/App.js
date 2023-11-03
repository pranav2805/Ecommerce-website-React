import { Fragment, useState } from "react";
import NavBar from "./Components/Navigation/NavBar";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <NavBar onShowCart={showCartHandler} />
      <Products />
    </Fragment>
  );
}

export default App;
