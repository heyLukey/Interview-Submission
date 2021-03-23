import React from "react";
import "./BlockLogin.css";

// Login block
// Contains text, background image and dummy login button
const BlockLogin = () => {
  return (
    <React.Fragment>
      <div id="block-login">
        <div className="login-text">
          <h2>Laborum cillum sunt adipisicing elit.</h2>
          <p>
            Eu enim ullamco nulla eiusmod Lorem ad culpa sunt dolore excepteur.
            Voluptate esse et minim enim tempor ex amet enim. Incididunt
            deserunt proident proident nisi ea duis. Non amet non elit occaecat
            consequat consectetur amet officia in dolor in. Reprehenderit cillum
            qui irure magna ad elit. Non dolor occaecat ea minim ex nostrud
            deserunt labore sunt tempor sunt ut ipsum eu. Do minim laborum
            voluptate ut in excepteur excepteur ipsum dolore. Est tempor enim
            nulla voluptate excepteur.
          </p>
          <button className="btn-login">Log in</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlockLogin;
