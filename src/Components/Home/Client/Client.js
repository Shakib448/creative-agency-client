import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import slack from "../../../images/logos/slack.png";
import google from "../../../images/logos/google.png";
import uber from "../../../images/logos/uber.png";
import netflix from "../../../images/logos/netflix.png";
import airbnb from "../../../images/logos/airbnb.png";
import "./Client.css";

const Client = () => {
  return (
    <section className="client">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md={2} className="text-center mb-3">
            <img width="100px" src={slack} alt="slack" />
          </Col>
          <Col md={2} className="text-center mb-3">
            <img width="100px" src={google} alt="google" />
          </Col>
          <Col md={2} className="text-center mb-3">
            <img width="100px" src={uber} alt="uber" />
          </Col>
          <Col md={2} className="text-center mb-3">
            <img width="100px" src={netflix} alt="netflix" />
          </Col>
          <Col md={2} className="text-center mb-3">
            <img width="100px" src={airbnb} alt="airbnb" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Client;
