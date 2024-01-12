import React, { useState } from "react";
import "./profile.css"; // Import your styles

const Profile = () => {
  const [activeSection, setActiveSection] = useState("#about");

  const handleButtonClick = (targetSection) => {
    setActiveSection(targetSection);
  };

  return (
    <div
      className={`card ${activeSection === "#about" ? "is-active" : ""}`}
      data-state={activeSection}
    >
      <div className="card-header">
        <div
          className="card-cover"
          style={{
            backgroundImage:
              'url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.eWqElUE3K_dQiFjrWVoaywHaEo%26pid%3DApi&f=1&ipt=02e21480ac0a26a57b854f28b2fcf1b24dcf548dc4b6362d945bafa34ac5b576&ipo=images")',
          }}
        ></div>
        <img
          className="card-avatar"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.eWqElUE3K_dQiFjrWVoaywHaEo%26pid%3DApi&f=1&ipt=02e21480ac0a26a57b854f28b2fcf1b24dcf548dc4b6362d945bafa34ac5b576&ipo=images"
          alt="avatar"
        />
        <h2 className="card-jobtitle text-3xl text-black">ShopLyft</h2>
      </div>
      <div
        className={`card-section ${
          activeSection === "#about" ? "is-active" : ""
        }`}
        id="about"
      >
        <div className="card-content">
          <p className="card-desc">
            <p className=" text-black text-xl">Name: Sumanth Krishna</p>
            <p className=" text-black text-xl">Gender: Male</p>
            <p className=" text-black text-xl">DOB: 8 May, 2003</p>
            <p className=" text-black text-xl">Address: Hell</p>
          </p>
        </div>
      </div>

      <div
        className={`card-section ${
          activeSection === "#contact" ? "is-active" : ""
        }`}
        id="contact"
      >
        <div className="card-content">
          <div className="card-subtitle">CONTACT</div>
          <div className="card-contact-wrapper">
            <div className="card-contact flex flex-col space-y-4">
              <p>Email: 19516uttam@gmail.com</p>
              <p>Contact: +91 8618555625</p>
              <p>Instagram: @uttamthegoat</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card-buttons">
        <button
          onClick={() => handleButtonClick("#about")}
          className={`is-active ${
            activeSection === "#about" ? "is-active" : ""
          }`}
        >
          ABOUT
        </button>
        <button
          onClick={() => handleButtonClick("#contact")}
          className={`is-active ${
            activeSection === "#contact" ? "is-active" : ""
          }`}
        >
          CONTACT
        </button>
      </div>
    </div>
  );
};

export default Profile;
