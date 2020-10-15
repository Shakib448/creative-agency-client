import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./Service.css";
import Services from "../Services/Services";
import AxiosConfig from "../../AxiosConfig/AxiosConfig";
import { useHistory } from "react-router-dom";
import { userInformationData } from "../../../App";

const Service = () => {
  const [userData, setUserData] = useContext(userInformationData);

  const [service, setService] = useState([]);

  const history = useHistory();

  const handleServicePage = () => {
    history.push("/service-list");
  };

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

  const handleService = async (singleService) => {
    try {
      await AxiosConfig.post("/selectedCourse", {
        data: { ...userData, ...singleService },
      });
    } catch (err) {
      console.log(err);
    }
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
                handleServicePage={handleServicePage}
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
