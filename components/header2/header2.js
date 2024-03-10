import React from "react";
import NavLink from "next/link";
import { Link } from "react-scroll";

const Header2 = (props) => {
  return (
    <header id="header">
      <div className={`wpo-site-header ${props.hclass}`}>
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block"></div>
              <div className="col-lg-2 col-md-6 col-6">
                <div className="navbar-header">
                  <NavLink className="navbar-brand logo" href="/">
                    <small>Nina</small>
                    <span>
                      <i className="fi flaticon-balloon"></i>
                    </span>
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-8 col-md-1 col-1"></div>
              <div className="col-lg-2 d-none d-lg-block">
                <div className="header-right ">
                  <Link
                    activeClass="active"
                    to="RSVP"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="theme-btn"
                  >
                    <span className="text">Attend</span>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header2;
