import React from "react";
import TimeCountDown from "../countdown";

const Hero5 = (props) => {
  return (
    <section className="wpo-hero-style-4">
      <div className="wedding-announcement">
        <div className="couple-text">
          <h2>Nina</h2>
          <p>
            <span>"Peace out single digit"</span>{" "}
          </p>
          <p className="px-2">Join us to celebrate Nina's 10th birthday</p>
          <div className="wpo-wedding-date">
            <div className="clock-grids">
              <TimeCountDown />
            </div>
          </div>
          <p className="py-4">"Dress Code: Light Blue and White"</p>
        </div>
      </div>
    </section>
  );
};

export default Hero5;
