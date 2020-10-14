import React from "react";
import "./Dashboard.css";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <>
      <Sidebar heading="Order" />

      <div>
        <input type="file" name="file" id="file" className="inputFile" />
        <label for="file">
          <span>
            {" "}
            <CloudUploadIcon />{" "}
          </span>
          <span style={{ fontSize: "14px" }}>Upload project file</span>
        </label>
      </div>
    </>
  );
};

export default Dashboard;
