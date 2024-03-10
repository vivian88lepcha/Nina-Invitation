import React from "react";
import LocationParking from "../Modal1";
import LocationVenue from "../Modal2";
import SectionTitleS2 from "../SectionTitleS2";

const Events = [
  {
    title: "Parking Location",
    li1: "Saturday, 13th April, 2024,",
    li2: "Dieselvej 40, Parking is Free for 2hrs",
    li3: "Kobenhavn SV, 2450",
    map: <LocationParking />,
  },
  {
    title: "The Party Location",
    li1: "Saturday, 13th April, 2024,",
    li2: "Teglholmsgade 70A, Next to Home",
    li3: "Kobenhavn SV, 2450",
    map: <LocationVenue />,
  },
];

const EventSection = (props) => {
  return (
    <section
      className={`wpo-event-section section-padding ${props.eClass}`}
      id="event"
    >
      <div className="container">
        <SectionTitleS2 MainTitle={"When & Where"} />
        <div className="wpo-event-wrap">
          <div className="row">
            {Events.map((event, eitem) => (
              <div className="col col-lg-6 col-md-6 col-12" key={eitem}>
                <div className="wpo-event-item">
                  <div className="wpo-event-text">
                    <h2>{event.title}</h2>
                    <ul>
                      <li>{event.li1}</li>
                      <li>{event.li2}</li>
                      <li>{event.li3}</li>
                      <li>{event.map}</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
