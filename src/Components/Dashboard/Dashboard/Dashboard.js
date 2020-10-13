import React from "react";
import "./Dashboard.css";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
const Dashboard = () => {
  return (
    <div className="text-center mt-5 align-content-center">
      <input type="file" name="file" id="file" className="inputFile" />
      <label for="file">
        <span>
          {" "}
          <CloudUploadIcon />{" "}
        </span>
        <span>Upload project file</span>
      </label>
    </div>
  );
};

export default Dashboard;
