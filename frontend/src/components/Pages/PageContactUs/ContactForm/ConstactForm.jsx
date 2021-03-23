import React, { useState } from "react";
import axios from "axios";
import errorCleanup from "../../../../utils/errorCleanup";
import ErrorNotice from "../../../ErrorNotice/ErrorNotice";
import image_valid from "./Icon_Valid.svg";
import "./ContactForm.css";

const ContactForm = () => {
  // UI states
  const [errorMsg, setErrorMsg] = useState(undefined);
  const [addPhone, setAddPhone] = useState(false);
  const [addDetails, setAddDetails] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form toggles
  const togglePhone = () => {
    setAddPhone(true);
  };
  const toggleDetails = () => {
    setAddDetails(!addDetails);
  };

  // Submit event
  const postMe = (e) => {
    e.preventDefault(e);

    // Create POST object
    // Adjust based on UI changes
    let toSubmit = {
      FullName: e.target.input_fullname.value,
      EmailAddress: e.target.input_email.value,
      PhoneNumbers: [e.target.input_phone_01.value],
      Message: e.target.input_message.value,
      bIncludeAddressDetails: addDetails,
    };
    if (addPhone) {
      toSubmit.PhoneNumbers.push(e.target.input_phone_02.value);
    }
    if (addDetails) {
      toSubmit = {
        ...toSubmit,
        AddressDetails: {
          AddressLine1: e.target.input_address_01.value,
          AddressLine2: e.target.input_address_02.value,
          CityTown: e.target.input_city.value,
          StateCounty: e.target.input_state.value,
          Postcode: e.target.input_postcode.value,
          Country: e.target.input_country.value,
        },
      };
    }

    // API POST call
    axios
      .post(
        "https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit",
        toSubmit
      )
      .then((res) => {
        // If submission is successful then remove any error msg and change UI
        setErrorMsg(undefined);
        setSubmitted(true);
      })
      .catch((err) => {
        // If there is an error then notify user
        const errorMsg = err.response.data.Errors[0];
        const cleanErrorMsg = errorCleanup(errorMsg);
        setErrorMsg(cleanErrorMsg);
      });
  };

  return (
    <React.Fragment>
      <div className="contact-form-div">
        <h3>Contact us</h3>
        <p>
          Qui ea sint veniam cillum voluptate labore nostrud minim elit proident
          ullamco non officia.
        </p>
        {errorMsg && <ErrorNotice errorMsg={errorMsg} />}
        {submitted ? (
          <div className="submit-success">
            <div className="img-valid-div">
              <img
                className="img-valid"
                src={image_valid}
                alt="valid submission"
              />
            </div>
            <h3>Your message has been sent</h3>
            <p>We will be in contact with you within 24 hours</p>
          </div>
        ) : (
          <form id="contact_form" onSubmit={postMe}>
            <label className="label-fullname">Full Name</label>
            <input id="input_fullname" type="text" />
            <label className="label-email">Email</label>
            <input id="input_email" type="text" />
            <label className="label-phone-01">
              Phone number 01 - <em>optional</em>
            </label>
            <input id="input_phone_01" type="text" maxLength="20" />

            {addPhone ? (
              <React.Fragment>
                <label className="label-phone-02">
                  Phone number 02 - <em>optional</em>
                </label>
                <input id="input_phone_02" type="text" maxLength="20" />
              </React.Fragment>
            ) : (
              <button className="add-phone" onClick={togglePhone}>
                Add new phone number
              </button>
            )}
            <label className="label-message">Message</label>
            <label className="label-message-valid">
              Maximum text length is 500 characters
            </label>
            <textarea id="input_message" maxLength="500"></textarea>
            <div className="add-details">
              <input type="checkbox" onClick={toggleDetails} />
              <label>Add address details</label>
            </div>
            {addDetails ? (
              <div className="add-details-div">
                <label className="label-address-01">Address line 1</label>
                <input id="input_address_01" type="text" />
                <label className="label-address-02">
                  Address line 2 - <em>optional</em>
                </label>
                <input id="input_address_02" type="text" />
                <label className="label-city">City/Town</label>
                <input id="input_city" type="text" />
                <label className="label-state">State/County</label>
                <input id="input_state" type="text" />
                <label className="label-postcode">Postcode</label>
                <input id="input_postcode" type="text" />
                <label className="label-country">Country</label>
                <input id="input_country" type="text" />
              </div>
            ) : null}
            <button className="btn-submit" type="submit">
              Submit
            </button>
          </form>
        )}
      </div>
    </React.Fragment>
  );
};

export default ContactForm;
