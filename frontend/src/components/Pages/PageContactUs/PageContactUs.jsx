import React from "react";
import ContactForm from "./ContactForm/ConstactForm";
import image1 from "./Img_Contact.png";
import "./PageContactUs.css";

// Contact us Page
// Contains a form and a given image
const PageContactUs = () => {
  return (
    <React.Fragment>
      <div id="page-contactus">
        <ContactForm></ContactForm>
        <div className="contact-img-div">
          <img src={image1} alt="spiral art" className="contact-img" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default PageContactUs;
