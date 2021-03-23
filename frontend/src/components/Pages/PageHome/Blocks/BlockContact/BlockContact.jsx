import React from "react";
import { useHistory } from "react-router-dom";
import "./BlockContact.css";

// Contact block
// Contains 3 blocks of text and navigation button
const BlockContact = () => {
  // Send to ContactUs page
  const history = useHistory();
  const toContactUs = () => {
    history.push("/contact-us");
    window.scrollTo(0, 0);
  };

  return (
    <React.Fragment>
      <div id="block-contact">
        <div className="title">
          <h2>Laborum ea irure officia cillum.</h2>
          <h4>
            Id ad in cupidatat proident dolor et commodo sit sit ipsum officia.
          </h4>
        </div>
        <div className="text-block-1">
          <p>
            Sit ad incididunt irure non exercitation amet amet ex incididunt
            consectetur ad ut. Commodo non et reprehenderit sint aute. Mollit
            nulla qui tempor pariatur nisi sunt sint do ut voluptate eu eiusmod
            est. Dolor Lorem deserunt in mollit eiusmod duis in sunt quis Lorem.
            Id nisi esse nulla labore laboris veniam cillum. Ex nisi eu ullamco
            non mollit est. Proident anim amet nostrud sint consequat dolore
            irure enim sunt excepteur anim consequat duis.
          </p>
        </div>
        <div className="text-block-2">
          <p>
            Eu dolor occaecat voluptate excepteur laborum amet. Lorem enim
            mollit adipisicing excepteur aliquip ipsum consectetur nostrud
            nostrud id nostrud qui id. Non aliquip do laborum culpa excepteur.
            Aliquip aliqua ea mollit voluptate non ullamco. Cupidatat qui mollit
            labore non amet dolor minim nulla nisi fugiat sit ipsum
            exercitation. Irure anim esse dolor in quis pariatur velit dolor
            incididunt culpa consectetur officia officia magna. Voluptate cillum
            est consectetur exercitation nisi tempor officia non labore ipsum
            fugiat.
          </p>
        </div>
        <div className="text-block-3">
          <p>
            Do quis sunt incididunt Lorem culpa qui non nisi mollit ad irure. Ex
            laboris deserunt occaecat reprehenderit aute eu Lorem aliquip ea
            irure reprehenderit officia irure. Magna excepteur esse aliqua
            excepteur laborum fugiat ea ipsum quis eiusmod voluptate
            reprehenderit velit ipsum. Occaecat laborum est elit Lorem nisi aute
            magna est sunt est consequat.
          </p>
        </div>
        <div className="btn-div">
          <button className="btn-contact" onClick={toContactUs}>
            Contact us
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlockContact;
