import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "./Footer.css";
import { useForm } from "react-hook-form";

const Footer = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

  return (
    <footer className="footer d-flex align-items-center">
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 1 }} className="mt-5 mb-5">
            <h2>
              Let's us handle your <br /> project, professionally.
            </h2>
            <p className="text-black mt-3">
              With well written codes, we build amazing apps for all platforms,
              mobile and web apps in general.
            </p>
          </Col>
          <Col md={{ span: 6, offset: 1 }} className="mt-5 mb-5">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group>
                <Form.Control
                  name="email"
                  type="text"
                  placeholder="Your email address"
                  className="form__focusEmail"
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
                  name="name"
                  type="text"
                  placeholder="Your name/ Company name"
                  className="form__focus"
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
                  as="textarea"
                  rows={6}
                  name="message"
                  type="text"
                  placeholder="Your message"
                  className="form__focusMessage"
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
              <input
                className="btn btn-dark pl-5 pr-5 pt-2 pb-2 mainNav__btn"
                type="submit"
                value="Send"
              />
            </Form>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
