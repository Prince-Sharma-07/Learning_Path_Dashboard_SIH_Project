import React, { useState } from "react";
import "../App.css";
import myLogo from "../public/logo.png" 

const Header = ({ onSignUpOptions }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleOutsideClick = (event) => {
    if (event.target.className === "modal") {
      closeModal();
    }
  };

  return (
    <>
      <header className="header">
       <a href="http://localhost:5173/"><img className="logo" src={myLogo} alt="Shiksha Sarthi"/></a>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#allcourses">All Courses</a>
            </li>
            <li>
              <a href="#academicprograms">Academic Programs</a>
            </li>
            <li>
              <a href="#targetGPA">Target GPA %</a>
            </li>
            <li>
              <a href="#admissionprogram">Admission Program</a>
            </li>
            <li>
              <a href="#learnshop">Learn Shop</a>
            </li>
            <li>
              <a href="#aboutus">About Us</a>
            </li>
            <li><button className="signup" onClick={onSignUpOptions}>
            Login/Signup
          </button></li>
          </ul>
          
        </nav>

        {/* Modal */}
        {isModalOpen && (
          <div className="modal" onClick={handleOutsideClick}>
            <div className="modal-content">
              <button className="close-btn" onClick={closeModal}>
                &times;
              </button>
              <h2>Signup</h2>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
