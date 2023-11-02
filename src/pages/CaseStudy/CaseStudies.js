import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "../components/Navbar";
const CaseStudies = () => {
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
                <Link to="/case">Works</Link>
              </li>
            </ul>
            <h2 className="mil-uppercase">Case Studies</h2>
          </div>
        </div>
      </div>
      {/* <!-- banner end --> */}

      {/* <!-- portfolio --> */}
      <section className="mil-p-120-120">
        <div className="container">
          <div
            className="row justify-content-between align-items-center"
            id="cargo"
          >
            <div className="col-xl-6 mil-mb-60">
              <div className="mil-project-cover">
               <Link to='/cargosprint'> <img src="assets/projects/2.jpg" alt="Project" /></Link>
              </div>
            </div>
            <div className="col-xl-5 mil-mb-60">
              <h4 className="mil-mb-30">
                Streamlining Payment Data Integration for Cargosprint{" "}
              </h4>
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Industry - Cargo &nbsp;
              </span>
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Segment – B2B, B2C{" "}
              </span>

              <p>
                We developed a Custom APEX based REST API integration solution
                to handle incoming/outgoing payment data requests from Google
                Cloud Platform and process them asynchronously to create records
                in Salesforce.
              </p>
              <Link to="/cargosprint" className="mil-button-with-label">
                <div className="mil-button mil-border mil-icon-button">
                  <span>
                    <i className="fas fa-plus"></i>
                  </span>
                </div>
                <span className="mil-dark">See More</span>
              </Link>
            </div>
          </div>

          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-60">
              <div className="mil-project-cover mil-type-2" id="dmc">
                <Link to='/dmc'><img
                  src="assets/projects/5.jpg"
                  alt="Project"
                  style={{ width: "500px", height: "250px" }}
                /></Link>
              </div>
            </div>
            <div className="col-xl-5 mil-mb-60">
              <h4 className="mil-mb-30">
                Enhancing Field Service Operations with Salesforce Field Service
                Lightning{" "}
              </h4>
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Industry – Health and Fitness &nbsp;
              </span>
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Segment - B2B{" "}
              </span>

              <p>
                By implementing Salesforce Field Service Lightning, we
                successfully addressed these critical problems and achieved
                substantial improvements in their field service operations.{" "}
              </p>
              <Link to="/dmc" className="mil-button-with-label">
                <div className="mil-button mil-border mil-icon-button">
                  <span>
                    <i className="fas fa-plus"></i>
                  </span>
                </div>
                <span className="mil-dark">See More</span>
              </Link>
            </div>
          </div>

          <div
            className="row justify-content-between align-items-center"
            id="continum"
          >
            <div className="col-xl-6 mil-mb-60">
              <div className="mil-project-cover">
                <Link to='/continuum'><img src="assets/projects/1.jpg" alt="Project" /></Link>
              </div>
            </div>
            <div className="col-xl-5 mil-mb-60">
              <h4 className="mil-mb-30">
                {" "}
                Hassles of B2B manual return process{" "}
              </h4>

              <p>
                Designed a software that dedicatedly works in this direction and
                solves all the problems related to return in B2B{" "}
              </p>
              <Link to="/continuum" className="mil-button-with-label">
                <div className="mil-button mil-border mil-icon-button">
                  <span>
                    <i className="fas fa-plus"></i>
                  </span>
                </div>
                <span className="mil-dark">See More</span>
              </Link>
            </div>
          </div>
          <div
            className="row flex-sm-row-reverse justify-content-between align-items-center"
            id="nexum"
          >
            <div className="col-xl-6 mil-mb-60">
              <div
                className="mil-project-cover mil-type-2"
                
              >
               <Link to='/nexum'> <img src="assets/projects/7.jpg" alt="Project" /></Link>
              </div>
            </div>

            <div className="col-xl-5 mil-mb-60">
              <h4 className="mil-mb-30">
                Developed a website for roaster to connect directly with the
                producer
              </h4>

              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Industry - Food &nbsp;
              </span>
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Segment - B2B{" "}
              </span>

              <p>
                Developed a detailed platform filled with the intricacies of
                each segment and yet keeping it simple and accessible{" "}
              </p>
              <Link to="/nexum" className="mil-button-with-label">
                <div className="mil-button mil-border mil-icon-button">
                  <span>
                    <i className="fas fa-plus"></i>
                  </span>
                </div>
                <span className="mil-dark">See More</span>
              </Link>
            </div>
          </div>
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-60">
              <div className="mil-project-cover">
                <Link to='/abuDhabi'><img src="assets/projects/10.jpg" alt="Project" id="abu" /></Link>
              </div>
            </div>

            <div className="col-xl-5 mil-mb-60">
              <h4 className="mil-mb-30">
                Digital Certificates for ADU (Blockchain)
              </h4>

              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Industry - Education &nbsp;
              </span>

              <p>
                Created a blockchain system that assigned distinct identities to
                each document or degree, effectively preventing fraud.{" "}
              </p>
              <Link to="/abuDhabi" className="mil-button-with-label">
                <div className="mil-button mil-border mil-icon-button">
                  <span>
                    {" "}
                    <i className="fas fa-plus"></i>
                  </span>
                </div>
                <span className="mil-dark">See More</span>
              </Link>
            </div>
          </div>
          <div className="mil-divider mil-mb-60"></div>
        </div>
      </section>
      {/* <!-- portfolio end --> */}
      <Footer />
    </div>
  );
};

export default CaseStudies;
