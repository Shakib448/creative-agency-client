import React from "react";
import {
  Button,
  Col,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";

import frame from "../../../images/logos/Frame.png";

const Banner = () => {
  return (
    <main style={{ height: "600px" }} className=" d-flex align-items-center">
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 1 }}>
            <h1>
              Let's Grow Your Brand To The <br /> Next Level
            </h1>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              nesciunt similique ad atque cum, in voluptatum et ipsam quod
              libero?
            </p>
            <Button className="btn btn-primary">Hire us</Button>
          </Col>
          <Col md={6}>
            <img src={frame} alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Banner;
