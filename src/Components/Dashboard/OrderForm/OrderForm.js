import React from "react";
import "./OrderForm.css";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const OrderForm = () => {
  return (
    <div>
      <div className="order">
        <input type="file" name="file" id="file" className="inputFile" />
        <label htmlFor="file">
          <span>
            {" "}
            <CloudUploadIcon />{" "}
          </span>
          <span style={{ fontSize: "14px" }}>Upload project file</span>
        </label>
      </div>
    </div>
  );
};

export default OrderForm;
