import React from "react";
import "./Alert.css";

const Alert = (props) => {
  return (
    <>
      <div className={props.alertopen ? "alert" : "alert-hide"}>
        <div className="alert-msg">Note deleted successfully !!</div>
        <div>
          {" "}
          <button className="alert-close" onClick={props.AlertClose}>&times;</button>
        </div>
      </div>
    </>
  );
};

export default Alert;
