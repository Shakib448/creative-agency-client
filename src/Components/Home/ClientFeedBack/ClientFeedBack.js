import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./ClientFeedBack.css";
import AxiosConfig from "../../AxiosConfig/AxiosConfig";
import img1 from "../../../images/customer-1.png";
import img2 from "../../../images/customer-2.png";
import img3 from "../../../images/customer-3.png";
import { Avatar } from "@material-ui/core";

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

const ClientFeedBack = () => {
  const [clientFeedBack, setClientFeedBack] = useState([]);

  useEffect(() => {
    const handleFeedBack = async () => {
      try {
        const res = await AxiosConfig.get("/allReview");
        setClientFeedBack(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    handleFeedBack();
  }, []);

  return (
    <section className="clientFeedBack">
      <Container>
        <Row className="justify-content-center">
          <h1>
            Clients <span style={{ color: "#7ab259" }}>Feedback</span>{" "}
          </h1>
        </Row>
        <Row className="justify-content-center mt-4">
          {clientFeedBack.map(({ _id, name, img, company, message }) => (
            <Col key={_id} md={4}>
              <Card className="mt-4 mb-4 clientFeedBack__card">
                <Row className="no-gutters">
                  <Avatar
                    style={{ width: "100px", height: "100px" }}
                    src={img}
                  />
                  <Col sm={7}>
                    <Card.Body>
                      <Card.Title> {name} </Card.Title>
                      <Card.Title> {company} </Card.Title>
                    </Card.Body>
                  </Col>
                  <Card.Body>
                    <Card.Text className="text-secondary">{message}</Card.Text>
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

export default ClientFeedBack;
