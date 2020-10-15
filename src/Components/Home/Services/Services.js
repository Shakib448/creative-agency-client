import React from "react";
import { Card, Col } from "react-bootstrap";

const Services = ({ newService, handleService }) => {
  return (
    <>
      <Col onClick={() => handleService(newService)} md={4}>
        <Card className="d-flex align-items-center service__card">
          <div className="service__img">
            <Card.Img
              variant="top"
              src={`data:image/png;base64,${newService.image.img}`}
            />
          </div>
          <Card.Body>
            <Card.Title>{newService.service}</Card.Title>
            <Card.Text className="text-secondary">
              {newService.description}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Services;
