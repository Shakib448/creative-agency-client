import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import "./Service.css";
import Services from "../Services/Services";

import service1 from "../../../images/icons/service1.png";
import service2 from "../../../images/icons/service2.png";
import service3 from "../../../images/icons/service3.png";

const services = [
  {
    title: "Web & Mobile design",
    img: service1,
    description:
      "We craft stunning and amazing we UI, using a well drafted UX to fit your product",
  },
  {
    title: "Graphic design",
    img: service2,
    description:
      "Amazing flyers, social media posts and brand represntations that would make your brand stand out.",
  },
  {
    title: "Web development",
    img: service3,
    description:
      "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
  },
];

const Service = () => {
  const [service, setService] = useState({});

  console.log(service);

  const handleService = (service) => {
    const newService = { service };
    setService(newService);
  };

  return (
    <section className="service">
      <Container>
        <Row className="justify-content-center">
          <h1>
            Provide awesome <span className="service__header">services</span>{" "}
          </h1>
        </Row>
        <Row className="justify-content-center mt-4 ">
          {services.map((service, id) => (
            <Services
              service={service}
              handleService={handleService}
              key={id}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Service;
