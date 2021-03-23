import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <div id="footer-tl">AVAMAE Submission</div>
        <div id="footer-tr">Created by Lucas Loudon</div>
        <div id="footer-bl">
          {/* EMAIL ICON */}
          <a id="gmail" href="mailto: lucasloudon@gmail.com" target="_blank">
            <i className="fas fa-envelope"></i>
          </a>
          {/* GITHUB ICON */}
          <a id="github" href="https://github.com/heyLukey" target="_blank">
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div id="footer-br">
          {/* LINKEDIN ICON */}
          <a
            id="linkedin"
            href="https://www.linkedin.com/in/lucas-loudon-048b2012b/"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          {/* TWITTER ICON */}
          <a id="twitter" href="https://twitter.com/hey_Lukey_" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
