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
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
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
                className="d-inline-block align-top mt-2"
                alt="volunteer network logo"
              />
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto font-weight-bold text-white ">
              <NavLink
                className="mr-3 mb-3 mt-2 text-dark mainNav__hover"
                activeClassName="mainNav__activeHover"
                style={{ textDecoration: "none" }}
                to="/"
              >
                Home
              </NavLink>

              <NavLink
                to="/"
                // activeClassName="mainNav__activeHover"
                className="mr-3 mb-3 mt-2 text-dark mainNav__hover"
                style={{ textDecoration: "none" }}
              >
                Donation
              </NavLink>
              <NavLink
                to="/"
                // activeClassName="mainNav__activeHover"
                className="mr-3 mb-3 mt-2 text-dark mainNav__hover"
                style={{ textDecoration: "none" }}
              >
                Events
              </NavLink>
              <NavLink
                to="/"
                // activeClassName="mainNav__activeHover"
                className="mr-3 mb-3 mt-2 text-dark mainNav__hover"
                style={{ textDecoration: "none" }}
              >
                Blog
              </NavLink>
              {userData.email ? (
                <>
                  {" "}
                  <Nav.Link className="mr-3 text-dark li">
                    {userData.name}
                  </Nav.Link>{" "}
                  <Button
                    className="btn btn-dark pl-5 pr-5 pt-2 pb-2 mainNav__btn"
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
                    <Button className="btn btn-dark pl-5 pr-5 pt-2 pb-2 mainNav__btn">
                      Log In
                    </Button>
                  </NavLink>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MainNav;
