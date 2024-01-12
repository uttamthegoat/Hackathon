import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container my-10 mx-auto">
      <div className="contact-inner-container w-full md:w-11/12 flex flex-col md:flex-row" >
        <div className="contact-info-container w-full md:w-1/2">
          <h1 className="contact-heading">Say Hello!</h1>
          <p className="contact-description">
            We're open for any suggestion or just to have a chat.
          </p>
          <div className="line"></div>

          <div className="contact-details">
            <h3>
              <i className="fa fa-map-maker"></i> Address
            </h3>
            <p>Manglore Institute Of Technology and Engineering</p>
          </div>
          <hr />

          <div className="contact-details">
            <h3>
              <i className="fa fa-envelope"></i> Email
            </h3>
            <p>vipulnayak1192@gmail.com</p>
          </div>
          <hr />

          <div className="contact-details">
            <h3>
              <i className="fa fa-phone"></i> Lets Talk
            </h3>
            <p>+91 6366245017</p>
          </div>
          <hr />

          <div className="social-link-container">
            <i className="fa fa-instagram"></i>
            <i className="fa fa-facebook"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-linkedin"></i>
          </div>
        </div>

        <div className="contact-form w-8/12 md:w-1/2 py-12 md:px-10">
          <form className="form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="input-field form-input"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="input-field form-input"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                rows="5"
                className="input-field form-input"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="form-group">
              <input
                type="submit"
                className="input-field submit-btn"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
