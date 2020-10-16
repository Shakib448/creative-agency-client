import React, { useContext } from "react";
import { Card, Col } from "react-bootstrap";
import { userInformationData } from "../../../App";

const Services = ({ newService, handleService, handleOrderPage }) => {
  const [userData, setUserData] = useContext(userInformationData);

  return (
    <>
      {userData.isSignIn && (
        <Col
          onClick={() => {
            handleService(newService);
            handleOrderPage();
          }}
          md={4}
          className="mb-4"
        >
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
      )}
    </>
  );
};

export default Services;
