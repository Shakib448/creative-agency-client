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
import ServiceList from "../ServiceList/ServiceList";
import ReviewForm from "../ReviewForm/ReviewForm";
import AddAdminForm from "../AddAdminForm/AddAdminForm";
import AddServiceForm from "../AddServiceForm/AddServiceForm";

const Sidebar = ({ heading }) => {
  const [userData, setUserData] = useContext(userInformationData);
  const location = useLocation();

  return (
    <div className="d-flex" id="wrapper">
      <div
        className="border-right border-0 d-none d-md-none d-lg-block "
        id="sidebar-wrapper"
      >
        <div className="sidebar-heading">
          <NavLink to="/">
            <img
              src={logo}
              width="150"
              height="50"
              className="d-inline-block align-top mt-2"
              alt="volunteer network logo"
            />
          </NavLink>
        </div>
        <div className="list-group list-group-flush ">
          <NavLink
            style={{ fontFamily: "Piazzolla, serif" }}
            to="/order"
            activeClassName="sidebar__active"
            className="list-group-item list-group-item-action  "
          >
            <ShoppingCartOutlinedIcon /> Order
          </NavLink>
          <NavLink
            style={{ fontFamily: "Piazzolla, serif" }}
            to="/service-list"
            activeClassName="sidebar__active"
            className="list-group-item list-group-item-action "
          >
            <SpeakerNotesOutlinedIcon /> Service list
          </NavLink>
          <NavLink
            style={{ fontFamily: "Piazzolla, serif" }}
            to="/review"
            activeClassName="sidebar__active"
            className="list-group-item list-group-item-action "
          >
            <TextsmsOutlinedIcon /> Review
          </NavLink>
          <NavLink
            style={{ fontFamily: "Piazzolla, serif" }}
            to="/add-service"
            activeClassName="sidebar__active"
            className="list-group-item list-group-item-action "
          >
            <AddIcon /> Add Service
          </NavLink>
          <NavLink
            style={{ fontFamily: "Piazzolla, serif" }}
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
          <h3
            className="d-none d-md-none d-lg-block "
            style={{ fontFamily: "Piazzolla, serif" }}
          >
            {heading}
          </h3>
          <img
            src={logo}
            width="150"
            height="50"
            className="d-inline-block align-top mt-2 d-sm-block d-md-block d-lg-none "
            alt="volunteer network logo"
          />
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

          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0 d-sm-block d-md-block d-lg-none ">
              <li className="nav-item active">
                <NavLink
                  style={{ fontFamily: "Piazzolla, serif" }}
                  to="/order"
                  activeClassName="sidebar__active"
                  className="list-group-item list-group-item-action  "
                >
                  <ShoppingCartOutlinedIcon /> Order
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={{ fontFamily: "Piazzolla, serif" }}
                  to="/service-list"
                  activeClassName="sidebar__active"
                  className="list-group-item list-group-item-action "
                >
                  <SpeakerNotesOutlinedIcon /> Service list
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={{ fontFamily: "Piazzolla, serif" }}
                  to="/review"
                  activeClassName="sidebar__active"
                  className="list-group-item list-group-item-action "
                >
                  <TextsmsOutlinedIcon /> Review
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={{ fontFamily: "Piazzolla, serif" }}
                  to="/add-service"
                  activeClassName="sidebar__active"
                  className="list-group-item list-group-item-action "
                >
                  <AddIcon /> Add Service
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={{ fontFamily: "Piazzolla, serif" }}
                  to="/add-admin"
                  activeClassName="sidebar__active"
                  className="list-group-item list-group-item-action "
                >
                  <GroupAddIcon /> Make Admin
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container-fluid">
          {location.pathname === "/order" && <OrderForm />}
          {location.pathname === "/service-list" && <ServiceList />}
          {location.pathname === "/review" && <ReviewForm />}
          {location.pathname === "/add-admin" && <AddAdminForm />}
          {location.pathname === "/add-service" && <AddServiceForm />}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
