import React from "react";
import { useHistory } from "react-router-dom";
import logo from "./Logo.svg";
import "./Navbar.css";

// Basic Navbar with nav buttons
const Navbar = () => {
  // Navigation button events
  const history = useHistory();
  const toHome = () => {
    history.push("/");
  };
  const toAboutUs = () => {
    history.push("/about-us");
  };
  const toContactUs = () => {
    history.push("/contact-us");
  };

  return (
    <React.Fragment>
      <nav>
        <div className="title-div">
          <img src={logo} alt="logo" onClick={toHome} />
        </div>
        <div className="nav-div">
          <button className="btn-nav" onClick={toHome}>
            HOME
          </button>
          <button className="btn-nav" onClick={toAboutUs}>
            ABOUT US
          </button>
          <button className="btn-nav" onClick={toContactUs}>
            CONTACT US
          </button>
          <button className="btn-login-nav">Login</button>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
