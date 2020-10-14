import React from "react";
import "./CarouselDetails.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Container, Row } from "react-bootstrap";

import img1 from "../../../images/carousel-1.png";
import img2 from "../../../images/carousel-2.png";
import img3 from "../../../images/carousel-3.png";
import img4 from "../../../images/carousel-4.png";
import img5 from "../../../images/carousel-5.png";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};
const items = [
  <div className="item">
    <img className="carouselDetails__img" alt="" src={img1} />
  </div>,
  <div className="item">
    <img className="carouselDetails__img" alt="" src={img2} />
  </div>,
  <div className="item">
    <img className="carouselDetails__imgExt" alt="" src={img3} />
  </div>,
  <div className="item">
    <img className="carouselDetails__img" alt="" src={img4} />
  </div>,
  <div className="item">
    <img className="carouselDetails__img" alt="" src={img5} />
  </div>,
];

const CarouselDetails = () => {
  return (
    <section className="carouselDetails">
      <Container>
        <Row className="justify-content-center">
          <h1 className="text-white text-center">
            Here are some of{" "}
            <span className="carouselDetails__header">our works</span>{" "}
          </h1>
        </Row>
        <AliceCarousel
          autoPlay
          disableButtonsControls
          infinite
          items={items}
          responsive={responsive}
        />
      </Container>
    </section>
  );
};

export default CarouselDetails;
