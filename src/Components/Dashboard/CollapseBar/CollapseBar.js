import React, { useContext } from "react";

import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SpeakerNotesOutlinedIcon from "@material-ui/icons/SpeakerNotesOutlined";
import TextsmsOutlinedIcon from "@material-ui/icons/TextsmsOutlined";
import AddIcon from "@material-ui/icons/Add";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import { NavLink } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import { userInformationData } from "../../../App";

const CollapseBar = () => {
  const [userData, setUserData] = useContext(userInformationData);

  return (
    <>
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
            to="/admin-service-list"
            activeClassName="sidebar__active"
            className="list-group-item list-group-item-action "
          >
            <SpeakerNotesOutlinedIcon /> Admin Service list
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
      <div className="ml-auto  d-none d-md-none d-lg-block ">
        <Avatar src={userData.img} />
      </div>
      <div style={{ margin: "0 20px" }}>
        <b>{userData.name}</b>
      </div>
    </>
  );
};

export default CollapseBar;
