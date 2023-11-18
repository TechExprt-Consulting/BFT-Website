import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../components/Navbar";
const Team = () => {
  return (
    <div className="mil-wrapper">
     <Navbar/>
      {/* <!-- banner --> */}
      <div className="mil-banner-sm mil-deep-bg">
        <img
          src="assets/deco/map.png"
          alt="background"
          className="mil-background-image"
        />
        <div
          className="mil-deco mil-deco-accent"
          style={{ top: "47%", right: "10%", transform: "rotate(90deg)" }}
        ></div>
        <div className="mil-banner-content">
          <div className="container mil-relative">
            <ul className="mil-breadcrumbs mil-mb-30">
              <li>
                <Link to="/Home">Home</Link>
              </li>
              <li>
                <Link to="/Team">Team</Link>
              </li>
            </ul>
            <h2 className="mil-uppercase">Leadership Team</h2>
          </div>
        </div>
        <div className="mil-fixed-button-container">
          <button className="mil-vertical-button text-dark ">
            <Link to='/contact'>Get a Free Quote!</Link>
          </button>
        </div>
      </div>
      {/* <!-- banner end --> */}

      {/* <!-- team --> */}
      <section className="mil-team mil-p-120-60">
        <div className="container">
          <h3 className="mil-text-center mil-mb-120">
            DISCOVER THE PASSIONATE MINDS BEHIND <br />
            <span className="mil-accent">BYTESFARMS TECHNOLOOGIES</span>{" "}
          </h3>
          <div className="row">
            <div className="col-sm-5 col-lg-3">
              <Link to="/Team" className="mil-team-card mil-mb-60">
                <div className="mil-image-frame mil-mb-30">
                  <img src="assets/faces/1.jpg" alt="Team member" />
                  <div className="mil-team-circle"></div>
                </div>
                <h4 className="mil-mb-10">Pratyoosh Saxena</h4>
                <p>Senior Developer</p>
              </Link>
            </div>
            <div className="col-sm-5 col-lg-3">
              <Link to="/Team" className="mil-team-card mil-mb-60">
                <div className="mil-image-frame mil-mb-30">
                  <img src="assets/faces/2.jpg" alt="Team member" />
                  <div className="mil-team-circle"></div>
                </div>
                <h4 className="mil-mb-10">Ankit Godha</h4>
                <p>Co-Founder</p>
              </Link>
            </div>
            <div className="col-sm-5 col-lg-3">
              <Link to="/Team" className="mil-team-card mil-mb-60 mil-mb-30">
                <div className="mil-image-frame mil-mb-30">
                  <img src="assets/faces/3.jpg" alt="Team member" />
                  <div className="mil-team-circle"></div>
                </div>
                <h4 className="mil-mb-10">Amit Maheshwari</h4>
                <p>
                  Program & Delivery
                  <br /> Manager
                </p>
              </Link>
            </div>
            <div className="col-sm-5 col-lg-3">
              <Link to="/Team" className="mil-team-card mil-mb-60">
                <div className="mil-image-frame mil-mb-30">
                  <img src="assets/faces/4.jpg" alt="Team member" />
                  <div className="mil-team-circle"></div>
                </div>
                <h4 className="mil-mb-10">Rajesh Rathore</h4>
                <p>Offshore/Onshore Expert</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- team end --> */}

      <div className="container">
        <div className="mil-divider"></div>
      </div>

      {/* <!-- icon boxes --> */}
      <section className="mil-icon-boxes mil-p-120-60">
        <div className="container">
          <div className="row align-items-center justify-content-between mil-mb-90">
            <div className="col-xl-6">
              <h2>
                Values that <span className="mil-accent">Lead Us</span>
              </h2>
            </div>
            <div className="col-xl-5">
              <p>
                At Bytes Farms, we take pride in our team’s diverse talents,
                united by the common goal of driving excellence in everything we
                do.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-3">
              <div className="mil-icon-box mil-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="assets/icon/5.svg" alt="icon" />
                </div>
                <h5 className="mil-mb-20">
                  <span className="mil-accent">01.</span>&nbsp; Productivity
                </h5>
                <p>
                  Our team thrives on a culture of productivity, where each
                  member is driven to achieve excellence in their work.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="mil-icon-box mil-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="assets/icon/5.svg" alt="icon" />
                </div>
                <h5 className="mil-mb-20">
                  <span className="mil-accent">02.</span>&nbsp; Transparency
                </h5>
                <p>
                  Transparency is at the core of our
                  <br /> team's ethos. We believe in open communication,
                  honesty, and accountability.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="mil-icon-box mil-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="assets/icon/5.svg" alt="icon" />
                </div>
                <h5 className="mil-mb-20">
                  <span className="mil-accent">03.</span>&nbsp; Personality
                </h5>
                <p>
                  At BytesFarms Technologies, we celebrate diversity and
                  individuality.
                  <br /> Our team is not just a group of professionals; we are a
                  collection of unique personalities.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="mil-icon-box mil-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="assets/icon/5.svg" alt="icon" />
                </div>
                <h5 className="mil-mb-20">
                  <span className="mil-accent">04.</span>&nbsp; Volition
                </h5>
                <p>
                  Volition is the driving force behind <br />
                  our team's success. We are not just employees; we are
                  passionate individuals with a strong sense of purpose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- icon boxes end --> */}

      {/* <!-- call to action --> */}
      <section className="call-to-action mil-gradient-bg mil-p-120-0 ">
        {/* <div
          className="mil-deco mil-deco-accent"
          style={{ top: "0", left: "15%" }}
        ></div> */}
        <div className="container mil-text-center">
          <div className="mil-cta-frame">
            <div className="mil-icon-frame mil-icon-frame-md mil-mb-60">
              <img src="assets/icon/6.svg" alt="icon" />
            </div>
            <p className="mil-light mil-mb-30">Leadership Team</p>
            <h2 className="mil-light mil-mb-30">
              Let’s <span className="mil-accent">Open the World</span> of IT to
              You
            </h2>
            <p className="mil-light-soft mil-mb-60">
              . Experience the difference with BytesFarms Technologies <br />{" "}
              where innovation meets excellence.
              <br />{" "}
            </p>
            <Link to="/Contact" className="mil-button mil-border mil-light mb-3">
              <span >Book an Appointment</span>
            </Link>
          </div>
        </div>
      </section>
      {/* <!-- call to action end --> */}
      <Footer />
    </div>
  );
};

export default Team;
