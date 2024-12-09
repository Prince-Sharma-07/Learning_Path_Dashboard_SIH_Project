import React, { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Cardheader from "./components/Cardheader";
import StudentLogin from "./components/Student_Login";
import './App.css'

const App = () => {
  const [showOptions, setShowOptions] = useState(false); // Toggle login options
  const [activeForm, setActiveForm] = useState(""); // Track selected form: "student" or "instructor"

  const handleSignUpOption = () => {
    setShowOptions(!showOptions); // Toggle signup/login options
  };

  const selectForm = (formType) => {
    setActiveForm(formType); // Update state to show the selected form
    setShowOptions(false); // Close the options menu
  };

  return (
    <>
      <Header onSignUpOptions={handleSignUpOption} />
      {showOptions && (
        <Cardheader
          onStudentLogin={() => selectForm("student")}
          // onInstructorLogin={() => selectForm("instructor")}
        />
      )}
      {activeForm === "student" && <StudentLogin />}
      {/* {activeForm === "instructor" && <InstructorLogin />} */}
      {!activeForm && !showOptions && <Body />}
    </>
  );
};

export default App;
