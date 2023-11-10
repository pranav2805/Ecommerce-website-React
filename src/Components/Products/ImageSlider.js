import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./ImageSlider.module.css";

const ImageSlider = (props) => {
  const images = ["image1.webp", "image2.webp", "image3.webp", "image4.webp"];
  const [index, setIndex] = useState(0);
  const id = props.productId;

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // const handleNext = () => {
  //   setIndex((prevIndex) => (prevIndex + 1) % images.length);
  // };

  // const handlePrev = () => {
  //   setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  // };

  return (
    <div className={classes["image-slider"]} /*style={{ paddingTop: "5%" }}*/>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
        {images.map((imageName, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-20 mx-auto"
              src={`/images/${id}/${imageName}`} // Assuming the images are in the 'public/images' folder
              alt={`Slide ${idx + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      {/* <div className="product-description">
        <Card>
          <Card.Header>
            <h2>Product Name</h2>
          </Card.Header>
          <Card.Body>
            <p>This is the product description...</p>
          </Card.Body>
        </Card>
      </div> */}
      {/* <div className="navigation-buttons text-center mt-3">
        <Button className="mr-2" variant="primary" onClick={handlePrev}>
          Previous
        </Button>
        <Button variant="primary" onClick={handleNext}>
          Next
        </Button>
      </div> */}
    </div>
  );
};

export default ImageSlider;
