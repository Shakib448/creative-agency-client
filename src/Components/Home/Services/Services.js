import React from "react";
import { Card, Col } from "react-bootstrap";

const Services = ({ service: { title, img, description } }) => {
  return (
    <>
      <Col md={4}>
        <Card className="d-flex align-items-center service__card">
          <div className="service__img">
            <Card.Img variant="top" src={img} />
          </div>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text className="text-secondary">{description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Services;
