import React, { useState } from "react";
import "../App.css";

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
        <img className="logo" alt="logo" href="logo.png" />
        <nav>
          <p>SHIKSHA SHARTHI</p>
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
          </ul>
          <button className="open-modal-btn" onClick={openModal}>
            Login/Signup
          </button>
        </nav>

        {/* Modal */}
        {isModalOpen && (
          <div className="modal" onClick={handleOutsideClick}>
            <div className="modal-content">
              <button className="close-btn" onClick={closeModal}>
                &times;
              </button>
              <h2>Signup</h2>
              <form className="signup-form">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                />
                <input
                  type="text"
                  placeholder="User Name"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                />
                <input
                  type="number"
                  placeholder=" Contact"
                  required
                />
                <input
                  type="text"
                  placeholder="Gender"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  required
                />
                <button type="submit">Signup</button>
              </form>
            </div>
          </div>
        )}

        <div className="signup">
          <button
            onClick={onSignUpOptions}
            className="button"
            type="button"
          >
            Sign Up
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
