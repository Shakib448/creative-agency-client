import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { userInformationData } from "../../../App";
import "./Sidebar.css";
import logo from "../../../images/logos/logo.png";

const Sidebar = ({ heading }) => {
  const [userData, setUserData] = useContext(userInformationData);

  return (
    <div className="d-flex" id="wrapper">
      <div className="border-right border-0 " id="sidebar-wrapper">
        <div className="sidebar-heading">
          <img
            src={logo}
            width="150"
            height="50"
            className="d-inline-block align-top mt-2"
            alt="volunteer network logo"
          />
        </div>
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

      <div style={{ background: "#F4F7FC" }} id="page-content-wrapper">
        <nav
          style={{ background: "#ffffff" }}
          className="navbar navbar-expand-lg navbar-light "
        >
          <h3>{heading}</h3>

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
        <div className="container-fluid">
          <h1 className="mt-4">Simple Sidebar</h1>
          <p>
            The starting state of the menu will appear collapsed on smaller
            screens, and will appear non-collapsed on larger screens. When
            toggled using the button below, the menu will change.
          </p>
          <p>
            Make sure to keep all page content within the{" "}
            <code>#page-content-wrapper</code>. The top navbar is optional, and
            just for demonstration. Just create an element with the{" "}
            <code>#menu-toggle</code> ID which will toggle the menu when
            clicked.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
