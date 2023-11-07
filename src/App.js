import { useState } from "react";
import NavBarHeader from "./Components/Navigation/NavBarHeader";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import { Routes, Route } from "react-router-dom";
import About from "./Components/AboutPage/About";
import { Fragment } from "react";

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
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<About />} />
        <Route path="/store" element={<Products />} />
      </Routes>

      {/* <NavBarHeader onShowCart={showCartHandler} />
      {/* <Products /> */}
      {/* <RouterProvider router={router} /> */}
    </Fragment>
    // </Router>
  );
}

export default App;
