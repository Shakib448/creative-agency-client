import React from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./ReviewForm.css";

const ReviewForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

  return (
    <>
      <Container>
        <Row>
          <Col md={{ span: 6 }} className="mt-5 mb-5">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="reviewForm__focus"
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
                  name="company"
                  type="text"
                  placeholder="Company's name, Designation "
                  className="reviewForm__focus"
                  ref={register({
                    required: "Company & Designation is required",
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
                  {errors.company && errors.company.message}
                </span>
              </Form.Group>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows={6}
                  name="message"
                  type="text"
                  placeholder="Description"
                  className="reviewForm__focus"
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
                  {errors.message && errors.message.message}
                </span>
              </Form.Group>
              <input
                className="btn btn-dark pl-5 pr-5 pt-2 pb-2 mainNav__btn"
                type="submit"
                value="Submit"
              />
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ReviewForm;
