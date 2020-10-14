import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./AddServiceForm.css";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const AddServiceForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

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
                  name="Description"
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
                  {errors.Description && errors.Description.message}
                </span>
              </Form.Group>
            </Col>
            <Col md={2}>
              <br />
              <br />
              <br />

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
