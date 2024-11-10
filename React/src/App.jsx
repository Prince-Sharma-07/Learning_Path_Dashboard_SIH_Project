import React, { useState } from "react";
import Header from "./components/Header";
import Body from "./components/body";
import Cardheader from "./components/Cardheader";
import Student_Login from "./components/Student_Login"
// import Cardheader from "./Cardheader";

const App = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [clickOption, setClickOption] = useState(false);

  const clickOnLoginOption = () => {
    setClickOption(true);
  }

  const handleSignUpOption = () =>{
    setShowOptions(!showOptions); // for the toggle effect 
  }
  return (
    <>
      <Header onSignUpOptions = {handleSignUpOption}></Header>
      {showOptions && <Cardheader clickOnLoginOption = {clickOnLoginOption}/>}
      {clickOption && <Student_Login/>}
      <Body></Body>
      {/* <Cardheader></Cardheader> */}
    </>
  );
};

export default App;
