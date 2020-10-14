import React from "react";
import { Col, Form, Button, Row, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./AddAdminForm.css";

const AddAdminForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

  return (
    <>
      <Container className="addAdminForm">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Control
                  name="email"
                  type="text"
                  placeholder="Your admin email address"
                  className="addAdminForm__Email"
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
            </Col>
            <Col md={2}>
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

export default AddAdminForm;
