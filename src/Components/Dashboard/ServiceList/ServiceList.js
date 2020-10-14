import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./ServiceList.css";
import img from "../../../images/icons/service1.png";
import img1 from "../../../images/customer-1.png";
import img2 from "../../../images/customer-2.png";
import img3 from "../../../images/customer-3.png";

const clients = [
  {
    name: "Nash Patrik",
    jobTitle: "CEO, Manpol",
    img: img1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, fuga!",
  },
  {
    name: "Miriam Barron",
    jobTitle: "CEO, Manpol",
    img: img2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, fuga!",
  },
  {
    name: "Bria Malone",
    jobTitle: "CEO, Manpol",
    img: img3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, fuga!",
  },
];
const ServiceList = () => {
  return (
    <section className="serviceList">
      <Container>
        <Row>
          {clients.map((client, id) => (
            <Col key={id} md={4}>
              <Card className="mt-4 mb-4 serviceList__card">
                <Row className="no-gutters">
                  <Card.Img
                    className="serviceList__img"
                    variant="top"
                    src={client.img}
                  />
                  <Col sm={7}>
                    <Card.Body className="text-right">
                      <Button variant="danger">Pending</Button>
                    </Card.Body>
                  </Col>
                  <Card.Body>
                    <Card.Title> {client.jobTitle} </Card.Title>
                    <Card.Text>{client.description}</Card.Text>
                  </Card.Body>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServiceList;
