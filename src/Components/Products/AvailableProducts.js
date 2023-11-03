import { Row } from "react-bootstrap";
import Product from "./Product";

const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const AvailableProducts = (props) => {
  const productList = productsArr.map((product) => (
    <Product
      title={product.title}
      price={product.price}
      imageUrl={product.imageUrl}
    />
  ));
  return <Row>{productList}</Row>;
};

export default AvailableProducts;
