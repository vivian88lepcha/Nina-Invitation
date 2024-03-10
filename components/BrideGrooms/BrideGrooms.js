import Image from "next/image";
import React from "react";
import SectionTitle from "../SectionTitle";
import timg2 from "/public/images/team/1st.jpg";
import timg3 from "/public/images/team/2nd.jpg";
import timg4 from "/public/images/team/3rd.jpg";
import timg5 from "/public/images/team/4th.jpg";
import timg6 from "/public/images/team/5th.jpg";
import timg7 from "/public/images/team/6th.jpg";
import timg8 from "/public/images/team/7th.jpg";
import timg9 from "/public/images/team/8th.jpg";
import timg10 from "/public/images/team/9th.jpg";

import shape1 from "/public/images/team/shape1.jpg";
import shape2 from "/public/images/team/shape2.jpg";

const brideGrooms = [
  {
    id: "2",
    tImg: timg2,
    name: "1st Year",
    title: "2015",
  },
  {
    id: "3",
    tImg: timg3,
    name: "2nd Year",
    title: "2016",
  },
  {
    id: "4",
    tImg: timg4,
    name: "3rd Year",
    title: "2017",
  },
  {
    id: "5",
    tImg: timg5,
    name: "4th Year",
    title: "2018",
  },
  {
    id: "6",
    tImg: timg6,
    name: "5th Year",
    title: "2019",
  },
  {
    id: "7",
    tImg: timg7,
    name: "6th Year",
    title: "2020",
  },
  {
    id: "8",
    tImg: timg8,
    name: "7th Year",
    title: "2021",
  },
  {
    id: "9",
    tImg: timg9,
    name: "8th Year",
    title: "2022",
  },
  {
    id: "10",
    tImg: timg10,
    name: "9th Year",
    title: "2023",
  },
];

const BrideGrooms = (props) => {
  return (
    <section className={`wpo-team-section ${props.tClass}`}>
      <div className="container">
        <SectionTitle MainTitle={"Journey to Ten"} />
        <div className="wpo-team-wrap">
          <div className="row">
            {brideGrooms.map((brideGroom, tm) => (
              <div className="col col-lg-4 col-md-6 col-sm-12 col-12" key={tm}>
                <div className="wpo-team-item">
                  <div className="wpo-team-img">
                    <div className="wpo-team-img-inner">
                      <Image src={brideGroom.tImg} alt="" />
                    </div>
                    <div className="shape-1">
                      <Image src={shape1} alt="" />
                    </div>
                    <div className="shape-2">
                      <Image src={shape2} alt="" />
                    </div>
                  </div>
                  <div className="wpo-team-text">
                    <h3>{brideGroom.name}</h3>
                    <span>{brideGroom.title}</span>
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

export default BrideGrooms;
