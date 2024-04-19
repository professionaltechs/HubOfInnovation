import React from "react";
import * as styles from "../styles/ContactUs.css";

const ContactUs = () => {
  return (
    <>
      <div className="ContactUsSection">
        <div className="ContactUsDetails">
          <h1>Reach Out to Us.</h1>
          <div className="ContactUsInputs">
            <input type="text" placeholder="Full name" />
            <input type="text" placeholder="E-mail address" />
          </div>
          <div className="ContactUsMessageContainer">
            <textarea
              name="Message"
              id=""
              placeholder="Write us a message"
            ></textarea>
          </div>
          <button class="btn-6">
            <span className="spanbtn"> Send Message</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
