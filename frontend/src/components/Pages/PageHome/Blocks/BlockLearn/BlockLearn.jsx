import React from "react";
import { useHistory } from "react-router-dom";
import "./BlockLearn.css";
import image_1 from "./Office-2.png";

// Learn block
// Contains given image, text, and navigation button
const BlockLearn = () => {
  // Send to AboutUs page
  const history = useHistory();
  const toAboutUs = () => {
    history.push("/about-us");
    window.scrollTo(0, 0);
  };

  return (
    <React.Fragment>
      <div id="block-learn">
        <div className="learn-text">
          <h2>Excepteur quis esse minim sunt tempor.</h2>
          <p>
            Id ut veniam Lorem enim anim nulla laboris quis. Eu consequat fugiat
            veniam duis irure nisi sunt ex deserunt ullamco irure nostrud
            ullamco. Occaecat incididunt fugiat ullamco irure. Aliqua
            reprehenderit Lorem ullamco tempor est. Ea id eu do velit excepteur
            magna ea. Dolore fugiat adipisicing reprehenderit ut laboris sunt
            laboris Lorem voluptate ipsum occaecat.
            <br />
          </p>
          <ul>
            <li>Amet fugiat mollit aliquip duis pariatur duis velit.</li>
            <li>
              Id dolor occaecat esse nisi laborum enim tempor enim incididunt.
            </li>
            <li>Ad consequat est minim sint consectetur.</li>
            <li>Cupidatat nisi eiusmod eiusmod excepteur.</li>
          </ul>
          <button className="btn-learn" onClick={toAboutUs}>
            Learn more
          </button>
        </div>
        <div className="learn-img">
          <img src={image_1} alt="Some chairs" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlockLearn;
