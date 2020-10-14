import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { userInformationData } from "../../../App";
import "./Sidebar.css";

const Sidebar = () => {
  const [userData, setUserData] = useContext(userInformationData);

  return (
    <div className="d-flex" id="wrapper">
      <div className="border-right border-0 " id="sidebar-wrapper">
        <div className="sidebar-heading">Start Bootstrap </div>
        <div className="list-group list-group-flush">
          <a
            href="#"
            className="list-group-item list-group-item-action border-bottom-0"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action border-bottom-0"
          >
            Shortcuts
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action border-bottom-0"
          >
            Overview
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action border-bottom-0"
          >
            Events
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action border-bottom-0"
          >
            Profile
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action border-bottom-0"
          >
            Status
          </a>
        </div>
      </div>

      <div id="page-content-wrapper">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <h1>Dashboard</h1>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbarDropdown"
                >
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
