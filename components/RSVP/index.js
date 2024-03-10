import Image from "next/image";
import React, { useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import SectionTitle from "../../components/SectionTitle";
import { useForm } from "@formcarry/react";

import shape1 from "/public/images/rsvp/shape1.png";
import shape2 from "/public/images/rsvp/shape2.png";

const RSVP = (props) => {
  const [forms, setForms] = useState({
    name: "",
    preferences: "",
    attend: "attend", // Set a default value for attend
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validator = new SimpleReactValidator({
    className: "errorMessage",
  });
  const changeHandler = (e) => {
    const { name, value, type } = e.target;

    if (type === "radio") {
      // If the input type is 'radio', set the value directly
      setForms({ ...forms, [name]: value });
    } else {
      // For other input types, update the state as usual
      setForms({ ...forms, [name]: value });
    }

    validator.showMessages(); // Always show messages on change
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (validator.allValid()) {
      // Hide messages before sending the form
      validator.hideMessages();

      // Replace this with your own unique endpoint URL
      fetch("https://formcarry.com/s/LUcDb9nowe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(forms),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.code === 200) {
            setSubmitted(true);
          } else {
            setError(res.message);
          }
        })
        .catch((error) => setError(error));
    } else {
      validator.showMessages();
    }
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className={`wpo-contact-section ${props.pt}`} id="RSVP">
      <div className="container">
        <div className="wpo-contact-section-wrapper">
          <div className="wpo-contact-form-area">
            <SectionTitle MainTitle={"Are you attending?"} />
            {submitted ? (
              <p className="text-center">
                We've received your message, Thank you for your response!
              </p>
            ) : (
              <form
                onSubmit={(e) => submitHandler(e)}
                className="contact-validation-active"
              >
                <div className="form-field">
                  <input
                    value={forms.name}
                    type="text"
                    name="name"
                    onBlur={(e) => changeHandler(e)}
                    onChange={(e) => changeHandler(e)}
                    className="form-control"
                    placeholder="Your Name"
                  />
                  {validator.message(
                    "name",
                    forms.name,
                    "required|alpha_space"
                  )}
                </div>
                <div className="radio-buttons">
                  <p>
                    <input
                      type="radio"
                      id="attend"
                      name="attend"
                      value="attend" // Set the value for the 'attend' option
                      checked={forms.attend === "attend"} // Check if 'attend' is selected
                      onChange={changeHandler}
                    />
                    <label htmlFor="attend">Yes, I will be there</label>
                  </p>
                  <p>
                    <input
                      type="radio"
                      id="not"
                      name="attend"
                      value="not" // Set the value for the 'not' option
                      checked={forms.attend === "not"} // Check if 'not' is selected
                      onChange={changeHandler}
                    />
                    <label htmlFor="not">Sorry, I can’t come</label>
                  </p>
                </div>
                <div className="form-field">
                  <select
                    onBlur={(e) => changeHandler(e)}
                    onChange={(e) => changeHandler(e)}
                    value={forms.preferences}
                    type="text"
                    className="form-control"
                    name="preferences"
                  >
                    <option>Vegetarian</option>
                    <option>Non-Vegetarian</option>
                  </select>
                </div>
                <div className="submit-area">
                  <button type="submit" className="theme-btn">
                    Submit Now
                  </button>
                </div>
                <p className="text-center">
                  PS: Please confirm before 22nd March, 2024
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
      <div className="shape-1">
        <Image src={shape1} alt="" />
      </div>
      <div className="shape-2">
        <Image src={shape2} alt="" />
      </div>
    </section>
  );
};
export default RSVP;
