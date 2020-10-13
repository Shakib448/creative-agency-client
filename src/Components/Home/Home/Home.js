import React from "react";
import { Col, Row } from "react-bootstrap";
import MainNav from "../../Shared/MainNav/MainNav";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <MainNav />
      <Row>
        <Col md={4}>
          <h1>Lets grow your brand next level</h1>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
