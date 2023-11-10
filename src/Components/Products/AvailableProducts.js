import { Container, Row } from "react-bootstrap";
import Product from "./Product";

const productsArr = [
  {
    id: 1,
    title: "POCO F5 5G",
    price: 100,
    // imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    imageUrl: "images/1/image1.webp",
    quantity: 1,
  },

  {
    id: 2,
    title: "Lenovo Ideapad Slim 5",
    price: 500,
    // imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    imageUrl: "images/2/image1.webp",
    quantity: 1,
  },

  // {
  //   id: 3,
  //   title: "Yellow and Black Colors",
  //   price: 70,
  //   imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  //   quantity: 1,
  // },

  // {
  //   id: 4,
  //   title: "Blue Color",
  //   price: 100,
  //   imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  //   quantity: 1,
  // },
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
