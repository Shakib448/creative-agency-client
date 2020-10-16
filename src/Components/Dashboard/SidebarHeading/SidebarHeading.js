import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { userInformationData } from "../../../App";

import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SpeakerNotesOutlinedIcon from "@material-ui/icons/SpeakerNotesOutlined";
import TextsmsOutlinedIcon from "@material-ui/icons/TextsmsOutlined";
import AxiosConfig from "../../AxiosConfig/AxiosConfig";
import AddIcon from "@material-ui/icons/Add";
import GroupAddIcon from "@material-ui/icons/GroupAdd";

const SidebarHeading = () => {
  const [userData, setUserData] = useContext(userInformationData);
  const [isAdmin, setAdmin] = useState(false);

  useEffect(() => {
    const handleAdmin = async () => {
      try {
        const res = await AxiosConfig.post("/isAdmin", {
          data: userData.email,
        });
        setAdmin(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    handleAdmin();
  }, []);

  return (
    <>
      {isAdmin ? (
        <>
          <NavLink
            style={{ fontFamily: "Piazzolla, serif" }}
            to="/admin-service-list"
            activeClassName="sidebar__active"
            className="list-group-item list-group-item-action "
          >
            <SpeakerNotesOutlinedIcon /> Service list
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
        </>
      ) : (
        <>
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
        </>
      )}
    </>
  );
};

export default SidebarHeading;
