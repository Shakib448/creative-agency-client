import React, { useContext, useEffect, useState } from "react";
import "./MainNav.css";
import logo from "../../../images/logos/logo.png";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import { userInformationData } from "../../../App";

const MainNav = () => {
  const [show, handleShow] = useState(false);

  const [userData, setUserData] = useContext(userInformationData);

  const history = useHistory();

  const handleBackHome = () => {
    history.push("/");
  };

  useEffect(() => {
    const handleScroll = () => {
      try {
        window.addEventListener("scroll", () => {
          if (window.scrollY > 100) {
            handleShow(true);
          } else handleShow(false);
        });
        return () => {
          window.addEventListener("scroll", null);
        };
      } catch (error) {
        console.log(error);
      }
    };
    handleScroll();
  }, []);
  return (
    <Navbar
      bg={`${show && "light"}`}
      className={`mainNav  ${show && "mainNav__scroll"}`}
      variant="light"
      fixed="top"
    >
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img
              src={logo}
              width="150"
              height="50"
              className="d-inline-block align-top"
              alt="volunteer network logo"
            />
          </Navbar.Brand>
        </NavLink>
        <Nav className="ml-auto font-weight-bold text-white">
          <NavLink
            className="mr-3 mt-2 text-dark"
            style={{ textDecoration: "none" }}
            to="/"
          >
            Home
          </NavLink>

          <Nav.Link className="mr-3 text-dark">Donation</Nav.Link>
          <Nav.Link className="mr-3 text-dark">Events</Nav.Link>
          <Nav.Link className="mr-3 text-dark">Blog</Nav.Link>
          {userData.email ? (
            <>
              {" "}
              <Nav.Link className="mr-3 text-dark">
                {userData.name}
              </Nav.Link>{" "}
              <Button
                variant="outline-info"
                className="mr-3"
                onClick={() => {
                  handleBackHome();
                  setUserData({});
                }}
              >
                Log out
              </Button>
            </>
          ) : (
            <>
              <NavLink to="/google-sign-in">
                <Button className=" mr-3">Log In</Button>
              </NavLink>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MainNav;
