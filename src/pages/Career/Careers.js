import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Careers = () => {
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
                <Link to="/Career">Careers</Link>
              </li>
            </ul>
            <h2 className="mil-uppercase">Careers</h2>
          </div>
        </div>
      </div>
      {/* <!-- banner end --> */}

      {/* <!-- careers --> */}
      <section className="mil-careers mil-p-120-90">
        <div className="container">
          <div className="row justify-content-between mil-mb-90">
            <div className="col-xl-6">
              <h2 className="mil-mb-30 ">
                {" "}
                WE ARE HIRING
                <br />
                <span className="mil-accent">JOIN TO US</span>{" "}
              </h2>
            </div>
            <div className="col-xl-4 conten">
              <p >
                Bytesfarms Technologies is a pioneering IT services company,
                specializing in Salesforce, Web/Mobile development, Cloud &
                DevOps, and Blockchain solutions. We revolutionize operations,
                elevate customer engagement, and foster exponential growth. Join
                us in reshaping the future of technology and innovation.
              </p>
            </div>
          </div>
          <ul className="mil-vacancies-frame">
            <li className="mil-vacancy">
              <div className="row ">
                <div className="col-md-6 col-lg-4 col-xl-4 mil-mb-30">
                  <div className="mil-vacancy-head mil-mb-15">
                    <span className="mil-badge">Full Time</span>
                    <span className="mil-text-sm mil-dark">Indore</span>
                  </div>
                  <h4>UI and Web Developer</h4>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-4 mil-mb-30 conten">
                  <p>
                    Web developers specialize in building websites and web
                    applications, using programming languages like HTML, CSS,
                    and JavaScript to create responsive and interactive online
                    experiences.
                  </p>
                </div>
                <div className="col-md-12 col-lg-4 col-xl-4 mil-mb-30">
                  <div className="mil-adaptive-right">
                    <Link to="" className="mil-button mil-border">
                      <span>Apply Now</span>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="mil-vacancy">
              <div className="row">
                <div className="col-md-6 col-lg-4 col-xl-4 mil-mb-30">
                  <div className="mil-vacancy-head mil-mb-15">
                    <span className="mil-badge">Full Time</span>
                    <span className="mil-text-sm mil-dark">Indore</span>
                  </div>
                  <h4>AI Developer</h4>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-4 mil-mb-30 conten">
                  <p>
                    AI (Artificial Intelligence) involves the simulation of
                    human intelligence in machines, enabling them to perform
                    tasks that typically require human intelligence, like speech
                    recognition, problem-solving, and learning.
                  </p>
                </div>
                <div className="col-md-12 col-lg-4 col-xl-4 mil-mb-30">
                  <div className="mil-adaptive-right">
                    <Link to="" className="mil-button mil-border">
                      <span>Apply Now</span>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="mil-vacancy">
              <div className="row">
                <div className="col-md-6 col-lg-4 col-xl-4 mil-mb-30">
                  <div className="mil-vacancy-head mil-mb-15">
                    <span className="mil-badge mil-badge-dark">Remote</span>
                    <span className="mil-text-sm mil-dark">Indore</span>
                  </div>
                  <h4>Salesforce Developer</h4>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-4 mil-mb-30 conten">
                  <p>
                    Salesforce is a leading customer relationship management
                    (CRM) platform that helps businesses manage their sales,
                    customer service, and marketing needs efficiently.
                  </p>
                </div>
                <div className="col-md-12 col-lg-4 col-xl-4 mil-mb-30">
                  <div className="mil-adaptive-right">
                    <Link to="" className="mil-button mil-border">
                      <span>Apply Now</span>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="mil-vacancy">
              <div className="row">
                <div className="col-md-6 col-lg-4 col-xl-4 mil-mb-30">
                  <div className="mil-vacancy-head mil-mb-15">
                    <span className="mil-badge">Full Time</span>
                    <span className="mil-text-sm mil-dark">Indore</span>
                  </div>
                  <h4>Deveops</h4>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-4 mil-mb-30 conten">
                  <p>
                    DevOps practices combine development and IT operations,
                    emphasizing collaboration and automation, leading to faster
                    software development, continuous integration, and delivery.
                  </p>
                </div>
                <div className="col-md-12 col-lg-4 col-xl-4 mil-mb-30">
                  <div className="mil-adaptive-right">
                    <Link to="" className="mil-button mil-border">
                      <span>Apply Now</span>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* <!-- careers end --> */}

      {/* <!-- about --> */}
      <section className="mil-about mil-deep-bg mil-p-120-0">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 mil-mb-60">
              
              <h2 className="mil-mb-30">
                Why <span className="mil-accent">Choose</span> Us?
              </h2>
              <p className="mil-mb-15 conten">
                {" "}
                At Bytesfarms Technologies, we stand out in the crowded digital
                landscape by delivering cutting-edge solutions tailored to your
                unique requirements. With a team of skilled professionals, we
                bring years of industry experience to the table, ensuring
                top-notch quality and efficiency in every project we undertake.{" "}
              </p>
              <p className="mil-mb-15 conten">
                Additionally, our dedication to customer satisfaction means you
                can expect prompt communication, transparent processes, and
                timely delivery of your projects.
              </p>
              <div className="mil-buttons-frame"></div>
            </div>
            <div className="col-xl-6">
              <div className="mil-about-illustration-2">
                <div className="mil-image-frame">
                  <img src="assets/photo/8.jpg" alt="Office" />
                </div>
                {/* <Link to="/" className="mil-play-button"><i className="fas fa-play"></i></Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- about end --> */}

      <div className="mil-divider mil-mb-60"></div>


      <Footer />
    </div>
  );
};

export default Careers;
