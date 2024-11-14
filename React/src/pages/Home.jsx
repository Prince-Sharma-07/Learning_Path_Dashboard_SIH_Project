import React, { useState } from 'react';
import Header from "../components/Header";
import Body from "../components/body";
import Cardheader from "../components/Cardheader";
import Student_Login from "../components/Student_Login";

const Home = () => {
    const [showOptions, setShowOptions] = useState(false);
    const [clickOption, setClickOption] = useState(false);

    const clickOnLoginOption = () => {
        setClickOption(true);
        setShowOptions(false); // hide options when moving to login
    }

    const handleSignUpOption = () => {
        setShowOptions(!showOptions); // for the toggle effect 
    }
    
    return (
        <>
            <Header onSignUpOptions={handleSignUpOption} />
            {showOptions && <Cardheader clickOnLoginOption={clickOnLoginOption} />}
            {clickOption ? <Student_Login /> : <Body />}
        </>
    );
}

export default Home;
