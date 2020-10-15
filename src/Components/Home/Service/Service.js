import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import "./Service.css";
import Services from "../Services/Services";
import AxiosConfig from "../../AxiosConfig/AxiosConfig";

const Service = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    const handleService = async () => {
      try {
        const res = await AxiosConfig.get("/service");
        setService(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    handleService();
  }, []);

  const handleService = (service) => {
    const newService = { service };
    setService(newService);
  };

  return (
    <section className="service">
      <Container>
        <Row className="justify-content-center">
          <h1>
            Provide awesome <span className="service__header">services</span>{" "}
          </h1>
        </Row>
        <Row className="justify-content-center mt-4 ">
          {service
            .map((newService, _id) => (
              <Services
                newService={newService}
                handleService={handleService}
                key={_id}
              />
            ))
            .slice(0, 6)}
        </Row>
      </Container>
    </section>
  );
};

export default Service;
