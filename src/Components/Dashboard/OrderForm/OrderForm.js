import React from "react";
import "./OrderForm.css";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const OrderForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

  return (
    <>
      <Container className="order">
        <Row>
          <Col md={{ span: 6 }} className="mt-5 mb-5">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Your name/ Company name"
                  className="order__form"
                  ref={register({
                    required: "Name is required",
                    pattern: {
                      value: /[A-Z][a-z]/,
                      message: "First text should be capitalized",
                    },
                    minLength: {
                      value: 5,
                      message: " should be 5 characters",
                    },
                  })}
                />
                <span style={{ color: "red" }}>
                  {errors.name && errors.name.message}
                </span>
              </Form.Group>
              <Form.Group>
                <Form.Control
                  name="email"
                  type="text"
                  placeholder="Your email address"
                  className="order__form"
                  ref={register({
                    required: "Email is required",
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: 'Email should be "@" & "." ',
                    },
                  })}
                />
                <span style={{ color: "red" }}>
                  {errors.email && errors.email.message}
                </span>
              </Form.Group>

              <Form.Group>
                <Form.Control
                  name="service"
                  type="text"
                  placeholder="Your service"
                  className="order__form"
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

              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows={6}
                  name="message"
                  type="text"
                  placeholder="Your message"
                  className="order__form"
                  ref={register({
                    required: "Message is required",
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
                  {errors.message && errors.message.message}
                </span>
              </Form.Group>
              <Row>
                <Col md={6}>
                  <Form.Group>
                    <Form.Control
                      name="price"
                      type="text"
                      placeholder="Price"
                      className="order__form"
                      ref={register({
                        required: "Price is required",
                        pattern: {
                          value: /[0-9]/,
                          message: "Price should be number",
                        },
                      })}
                    />
                    <span style={{ color: "red" }}>
                      {errors.price && errors.price.message}
                    </span>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <div className="order">
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
                      <span style={{ fontSize: "14px" }}>
                        Upload project file
                      </span>
                    </label>
                    <br />
                    <span style={{ color: "red" }}>
                      {" "}
                      {errors.file && "File is required"}{" "}
                    </span>
                  </div>
                </Col>
              </Row>
              <input
                className="btn btn-dark pl-5 pr-5 pt-2 pb-2 mainNav__btn"
                type="submit"
                value="Send"
              />
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OrderForm;
