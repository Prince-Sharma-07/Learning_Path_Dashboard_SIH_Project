import React, { useState } from "react";
import "../App.css";

const Body = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (event.target.className === "modal") {
      closeModal();
    }
  };

  return (
    <>
      <header>
        <section id="f-page1">
          <h1 id="imp">From Academic to admission</h1>
          <h1 id="imp" style={{ color: "rgb(251, 27, 165)" }}>
            Prepare with the best teachers and technology in the country
          </h1>
          <div>
            <button>View academic programs</button>
            <button>Start learning</button>
          </div>
          <div id="b-segment">
            <p>2.5 million+ student</p>
            <p>20 people experienced mentor</p>
            <p>2 million+ download the app</p>
            <p>1.8 lakh+ learning material</p>
          </div>
        </section>
        <button id="help" onClick={openModal}>
          ✌
        </button>
      </header>
      <section id="f-page-2">
        <h1>
          Complete program for secondary and higher secondary studies and exam
          preparation
        </h1>
        <h3>
          Get A+ preparation with live classes, live exams, class notes,
          animated videos from the country's best mentors throughout the year.
        </h3>
        <div id="hover-box-container">
          <div className="hover-box">BOX 1</div>
          <div className="hover-box">BOX 2</div>
          <div className="hover-box">BOX 3</div>
          <div className="hover-box">BOX 4</div>
          <div className="hover-box">BOX 5</div>
        </div>[]
      </section>
      <section id="f-page-3">
        <div id="f-page3-1-part">
          <div
            style={{
              height: "400px",
              width: "400px",
              textAlign: "center",
              backgroundColor: "skyblue",
            }}
          >
            hehe
          </div>
          <button id="gettoknowus">Get to know us</button>
        </div>
        <div id="f-page3-2-part">
          <p>Everyone is learning, everyone is winning with Shiksha Sharthi.</p>
          <p>
            Now, wherever you are, nothing matters! Because everyone is learning
            and winning with Shiksha Sharthi, the country's most trusted digital learning
            organization. But how? Watch the video below to find out from
            Chanchal Chowdhury!
          </p>
          <button id="gettoknowus">Get to know us</button>
        </div>
      </section>
      <section id="f-page-4">
        <div id="page4-box">
          <h1>Next WAVe</h1>
          <span>Are you the next Buetian? Find out with the test</span>
          <button id="gettoknowus">Get to know us</button>
        </div>
        <div id="page4-box">
          <h1>Next WAVe</h1>
          <span>Are you the next Buetian?</span>
          <span>Find out with the test</span>
          <button id="gettoknowus">Get to know us</button>
        </div>
      </section>
      <section id="f-page-5">
        <div id="page5-box1">hehehe</div>
        <div id="page5-box2"></div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="modal"
          style={{
            display: "flex",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
          onClick={handleOutsideClick}
        >
          <div
            className="modal-content"
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "4px",
              textAlign: "center",
              position: "relative",
            }}
          >
            <button
              id="closeModal"
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                cursor: "pointer",
              }}
            >
              &times;
            </button>
            <p>This is the modal content!</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Body;
