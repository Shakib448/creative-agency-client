import React, { useContext } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import * as firebase from "firebase/app";
import "firebase/auth";
import "./GoogleLogin.css";
import logo from "../../images/logos/logo.png";
import firebaseConfig from "./Firebase.config";
import { userInformationData } from "../../App";
import google from "../../images/logos/googleico.png";
import { useHistory, useLocation } from "react-router-dom";

firebase.initializeApp(firebaseConfig);

const GoogleLogin = () => {
  const [userData, setUserData] = useContext(userInformationData);
  //Location
  let location = useLocation();
  let history = useHistory();

  let { from } = location.state || { from: { pathname: "/" } };

  const providerGoogle = new firebase.auth.GoogleAuthProvider();

  const handleGoogleSignIn = async () => {
    try {
      const res = await firebase.auth().signInWithPopup(providerGoogle);
      const { email, displayName, photoURL } = res.user;
      const singedInUser = {
        isSignIn: true,
        email: email,
        name: displayName,
        img: photoURL,
      };
      setUserData(singedInUser);
      storeAuthToken();
      history.replace(from);
    } catch (err) {
      console.warn(err);
    }
  };

  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(true)
      .then(function (idToken) {
        sessionStorage.setItem("token", idToken);
        history.replace(from);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Container className="googleLogin">
      <Row>
        <Col md={4}></Col>
        <Col md={4} className="text-center">
          <img src={logo} width="150" height="50" alt="Logo" />
        </Col>
        <Col md={4}></Col>
      </Row>
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <Card className="google__form">
            <Card.Body className="google__formBody">
              <Card.Title>
                <h1>Login With </h1>
              </Card.Title>
              <Card.Text>
                <Button
                  className="googleLogin__btn"
                  onClick={handleGoogleSignIn}
                >
                  <img
                    className="googleLogin__img"
                    width="50"
                    height="50"
                    src={google}
                    alt=""
                  />
                  Continue With Google
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  );
};

export default GoogleLogin;
