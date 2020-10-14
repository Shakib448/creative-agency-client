import React from "react";
import { Card, Col } from "react-bootstrap";

const Services = ({ service, handleService }) => {
  return (
    <>
      <Col onClick={() => handleService(service)} md={4}>
        <Card className="d-flex align-items-center service__card">
          <div className="service__img">
            <Card.Img variant="top" src={service.img} />
          </div>
          <Card.Body>
            <Card.Title>{service.title}</Card.Title>
            <Card.Text className="text-secondary">
              {service.description}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Services;
