import React from "react";
import CvData from "./CvData";

function Skills(props) {
  return (
    <>
      <div className="skills">
        <i className="far fa-check-circle" style={{ color: "#000000" }} />{" "}
        <span>{props.skill}</span>
      </div>
    </>
  );
}

export default Skills;
