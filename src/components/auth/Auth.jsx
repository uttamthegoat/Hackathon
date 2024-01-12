import React, { useState } from "react";
import "./Auth.css";

const Auth = () => {
  const [isRightPanelActive, setRightPanelActive] = useState(false);
  const [mobile, setMobile] = useState(false);

  const handleSignUpClick = () => {
    setRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setRightPanelActive(false);
  };
  const showSignin = () => {
    setMobile(true);
  };
  const showSignup = () => {
    setMobile(false);
  };
  return (
    <div className="my-10 sm:px-4 ">
      <div
        className={`w-full flex flex-col sm:flex-row md:w-10/12 lg:w-[900px] auth-container  mx-auto ${
          isRightPanelActive ? "right-panel-active" : ""
        }`}
        id="auth-container"
      >
        <div
          className={`auth-form-container w-full sm:w-1/2 sign-up-container ${mobile?"hidden":"block"}`}
        >
          <form className="auth-form px-4" action="#">
            <h1>Create Account</h1>

            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="auth-button my-3">Sign Up</button>
            <span className="text-black">OR</span>

            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <button
              className="auth-button block sm:hidden"
              onClick={showSignin}
            >
              Sign In
            </button>
          </form>
        </div>
        <div className={`auth-form-container w-full sm:w-1/2 sign-in-container ${mobile?"block":"hidden"}`}>
          <form className="auth-form px-4" action="#">
            <h1>Sign in</h1>

            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button className="auth-button my-3">Sign In</button>
            <span className="text-black">OR</span>

            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <button
              className="auth-button block sm:hidden"
              onClick={showSignup}
            >
              Sign up
            </button>
          </form>
        </div>
        <div className="overlay-container hidden sm:block">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost auth-button mt-3"
                onClick={handleSignInClick}
                id="signIn"
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost auth-button mt-3"
                onClick={handleSignUpClick}
                id="signUp"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
