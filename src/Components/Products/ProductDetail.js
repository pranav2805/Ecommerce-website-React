import { useParams } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import ProductRating from "./ProducRating";
import { Fragment } from "react";

const ProductDetail = (props) => {
  const params = useParams();
  console.log("inside product detail page");
  return (
    <Fragment>
      <div>
        <ImageSlider productId={params.id} />
      </div>
      <ProductRating />
    </Fragment>
  );
};

export default ProductDetail;
