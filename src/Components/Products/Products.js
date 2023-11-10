import { Fragment } from "react";
import AvailableProducts from "./AvailableProducts";

const Products = (props) => {
  return (
    <Fragment>
      <h2 className="text-center">Products</h2>
      <AvailableProducts />
    </Fragment>
  );
};

export default Products;
