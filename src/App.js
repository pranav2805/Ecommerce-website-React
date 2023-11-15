import { useContext, useState, Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NavBarHeader from "./Components/Navigation/NavBarHeader";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import About from "./Components/AboutPage/About";
import AvailableTours from "./Components/HomePage/AvailableTours";
import ContactUs from "./Components/ContactPage/ContactUs";
import ProductDetail from "./Components/Products/ProductDetail";
import AuthPage from "./Pages/AuthPage";
import AuthContext from "./store/auth-context";

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

  const authCtx = useContext(AuthContext);

  return (
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
        {!authCtx.isLoggedIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
        <Route path="/about">
          <About />
        </Route>
        <Route path="/home">
          <AvailableTours />
        </Route>
        <Route path="/store">
          {authCtx.isLoggedIn && <Products />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/contactus">
          <ContactUs />
        </Route>
        <Route path="/products/:id">
          <ProductDetail />
        </Route>
        <Route path="*">
          <Redirect to="/home" />
        </Route>
      </Switch>

      {/* <NavBarHeader onShowCart={showCartHandler} />
      {/* <Products /> */}
      {/* <RouterProvider router={router} /> */}
    </Fragment>
  );
}

export default App;
