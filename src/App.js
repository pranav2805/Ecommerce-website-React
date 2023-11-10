import { useState } from "react";
import NavBarHeader from "./Components/Navigation/NavBarHeader";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import { Route, Switch } from "react-router-dom";
import About from "./Components/AboutPage/About";
import AvailableTours from "./Components/HomePage/AvailableTours";
import { Fragment } from "react";
import ContactUs from "./Components/ContactPage/ContactUs";
import ProductDetail from "./Components/Products/ProductDetail";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [
//       { path: "/home", element: <h2 /> },
//       { path: "/store", element: <Products /> },
//       { path: "/about", element: <About /> },
//     ],
//   },
// ]);

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    // <Router>
    //
    <Fragment>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}

      <NavBarHeader onShowCart={showCartHandler} />

      {/* <Routes> */}
      {/* <Route path="/about" element={<About />} />
        <Route path="/home" element={<AvailableTours />} />
        <Route path="/store" element={<Products />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="products/:id" element={<ProductDetail />} /> */}
      {/* </Routes> */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/home">
          <AvailableTours />
        </Route>
        <Route path="/store">
          <Products />
        </Route>
        <Route path="/contactus">
          <ContactUs />
        </Route>
        <Route path="/products/:id">
          <ProductDetail />
        </Route>
      </Switch>

      {/* <NavBarHeader onShowCart={showCartHandler} />
      {/* <Products /> */}
      {/* <RouterProvider router={router} /> */}
    </Fragment>
    // </Router>
  );
}

export default App;
