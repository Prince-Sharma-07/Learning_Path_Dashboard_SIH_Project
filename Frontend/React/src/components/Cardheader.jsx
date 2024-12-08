import React from "react";
import "../App.css";

const Cardheader = ({ onStudentLogin, onInstructorLogin }) => {
  return (
    <div className="card-header">
      <button className="button" onClick={onStudentLogin}>
        Student Login
      </button>
      <button className="button" onClick={onInstructorLogin}>
        Instructor Login
      </button>
    </div>
  );
};

export default Cardheader;
