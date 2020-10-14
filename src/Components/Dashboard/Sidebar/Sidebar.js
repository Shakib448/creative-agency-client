import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { userInformationData } from "../../../App";
import "./Sidebar.css";
import logo from "../../../images/logos/logo.png";
import OrderForm from "../OrderForm/OrderForm";

import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SpeakerNotesOutlinedIcon from "@material-ui/icons/SpeakerNotesOutlined";
import TextsmsOutlinedIcon from "@material-ui/icons/TextsmsOutlined";
import AddIcon from "@material-ui/icons/Add";
import GroupAddIcon from "@material-ui/icons/GroupAdd";

const Sidebar = ({ heading, match }) => {
  const [userData, setUserData] = useContext(userInformationData);
  const location = useLocation();

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
        <div className="list-group list-group-flush ">
          <NavLink
            to="/order"
            activeClassName="sidebar__active"
            className="list-group-item list-group-item-action  "
          >
            <ShoppingCartOutlinedIcon /> Order
          </NavLink>
          <NavLink
            to="/service-list"
            activeClassName="sidebar__active"
            className="list-group-item list-group-item-action "
          >
            <SpeakerNotesOutlinedIcon /> Service list
          </NavLink>
          <NavLink
            to="/review"
            activeClassName="sidebar__active"
            className="list-group-item list-group-item-action "
          >
            <TextsmsOutlinedIcon /> Review
          </NavLink>
          <NavLink
            to="/add-service"
            activeClassName="sidebar__active"
            className="list-group-item list-group-item-action "
          >
            <AddIcon /> Add Service
          </NavLink>
          <NavLink
            to="/add-admin"
            activeClassName="sidebar__active"
            className="list-group-item list-group-item-action "
          >
            <GroupAddIcon /> Make Admin
          </NavLink>
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
                <a className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  to="/"
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
                  <a className="dropdown-item" to="/">
                    Action
                  </a>
                  <a className="dropdown-item" to="/">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" to="/">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container-fluid">
          {location.pathname === "/order" && <OrderForm />}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
