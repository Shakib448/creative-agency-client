import React from "react";
import { Card, Col } from "react-bootstrap";

const Services = ({ service: { title, img, description } }) => {
  return (
    <>
      <Col md={4}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Services;
