import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./AddServiceForm.css";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import AxiosConfig from "../../AxiosConfig/AxiosConfig";

const AddServiceForm = () => {
  const [service, setService] = useState({});

  const [file, setFile] = useState(null);

  console.log(service);
  const { register, handleSubmit, watch, errors } = useForm({});
  const onSubmit = async (data, e) => {
    const formData = new FormData();
    console.log(data);
    formData.append("file", file);
    formData.append("service", data.service);
    formData.append("description", data.description);

    e.target.reset();

    try {
      await AxiosConfig.post("/addService", formData);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  console.log(watch("example"));
  return (
    <>
      <Container className="addServiceForm">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md={6}>
              <Form.Label>Service title</Form.Label>
              <Form.Group>
                <Form.Control
                  name="service"
                  type="text"
                  placeholder="Your service"
                  className="addServiceForm__form"
                  ref={register({
                    required: "Service is required",
                    pattern: {
                      value: /[A-Z][a-z]/,
                      message: "First text should be capitalized",
                    },
                  })}
                />
                <span style={{ color: "red" }}>
                  {errors.service && errors.service.message}
                </span>
              </Form.Group>
            </Col>
            <Col md={4}>
              <div className="order">
                <Form.Label>Icon</Form.Label>
                <br />
                <input
                  onChange={handleFileChange}
                  type="file"
                  name="file"
                  id="file"
                  className="inputFile"
                  ref={register({
                    required: true,
                  })}
                />
                <label htmlFor="file">
                  <span>
                    {" "}
                    <CloudUploadIcon />{" "}
                  </span>
                  <span style={{ fontSize: "14px" }}>Upload Image</span>
                </label>
                <br />
                <span style={{ color: "red" }}>
                  {" "}
                  {errors.file && "File is required"}{" "}
                </span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Description</Form.Label>

                <Form.Control
                  as="textarea"
                  rows={6}
                  name="description"
                  type="text"
                  placeholder="Your Description"
                  className="addServiceForm__form"
                  ref={register({
                    required: "Description is required",
                    pattern: {
                      value: /[A-Z][a-z]/,
                      message: "First text should be capitalized",
                    },
                    minLength: {
                      value: 15,
                      message: " should be 15 characters",
                    },
                  })}
                />
                <span style={{ color: "red" }}>
                  {errors.description && errors.description.message}
                </span>
              </Form.Group>
            </Col>
            <Col md={2} className="addServiceForm__btn">
              <Button
                className="addAdminForm__btn"
                type="submit"
                variant="success"
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default AddServiceForm;
