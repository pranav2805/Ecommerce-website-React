import { Container, Row } from "react-bootstrap";
import Product from "./Product";

const productsArr = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 1,
  },

  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 1,
  },

  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },

  {
    id: 4,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    quantity: 1,
  },
];

const AvailableProducts = (props) => {
  const productList = productsArr.map((product) => (
    <Product
      key={product.id}
      id={product.id}
      title={product.title}
      price={product.price}
      imageUrl={product.imageUrl}
      quantity={+product.quantity}
      product={product}
    />
  ));
  return (
    <Container className="mt-3">
      <Row>{productList}</Row>
    </Container>
  );
};

export default AvailableProducts;
