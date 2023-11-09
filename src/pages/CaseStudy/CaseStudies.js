import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
const CaseStudies = () => {
  return (
    <div className="mil-wrapper">
      <div className="mil-top-position mil-fixed ">
        <div className="mil-top-panel ">
          <div className="container">
            <Link
              to="/home"
              className="mil-logo"
              style={{ width: "250px", height: "90px" }}             ></Link>
            <div className="mil-navigation">
              <nav>
                <ul>
                  <li>
                    <Link to="/home">Home</Link>
                  </li>

                  <li className="mil-has-children">
                    <Link to="/">Enterprise</Link>
                    <ul>
                      <li>
                        <Link to="/about">About us</Link>
                      </li>
                      <li>
                        <Link to="/team"> Our Team</Link>
                      </li>
                      <li>
                        <Link to="/career">Careers</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/case">Case Studies</Link>
                  </li>

                  <li className="mil-has-children">
                    <Link to="/">Services</Link>
                    <ul>
                      <li>
                        <Link to="/salesforce">Salesforce Services</Link>
                      </li>
                      <li>
                        <Link to="/digital">Digital Marketing</Link>
                      </li>

                      <li>
                        <Link to="/blockChain">Blockchain Developement</Link>
                      </li>
                      <li>
                        <Link to="/cloud">Cloud Migration</Link>
                      </li>
                      <li>
                        <Link to="/deveops">Devops Consulting</Link>
                      </li>
                      <li>
                        <Link to="/mobileApp">Mobile App Developement</Link>
                      </li>
                      <li>
                        <Link to="/webApp">Web Developement</Link>
                      </li>
                    </ul>
                  </li>
                  {/* <li>
                    <Link to="/Faq">FAQ</Link>
                  </li> */}

                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
                <div className="mil-search-icon">
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20.5848 19.7029C20.3908 19.8999 20.1358 19.997 19.8808 19.997C19.6268 19.997 19.3718 19.8999 19.1778 19.7029L15.5118 16.2199C13.9778 17.2549 12.3798 17.997 9.92584 17.997C4.98484 17.997 0.964844 13.959 0.964844 8.99695C0.964844 4.34995 4.98484 0.199951 9.92584 0.199951C14.8668 0.199951 18.8858 4.34995 18.8858 8.99695C18.8858 11.118 18.1468 13.68 16.9188 14.608L20.5848 18.29C20.9738 18.681 20.9738 19.3129 20.5848 19.7029ZM9.92584 1.99695C6.82984 1.99695 2.95684 5.13695 2.95684 8.99695C2.95684 12.857 6.82984 15.998 9.92584 15.998C11.8398 15.998 13.5758 15.217 14.8368 13.957C14.8408 13.952 14.8418 13.945 14.8468 13.941C14.8518 13.936 14.8578 13.935 14.8628 13.93C16.1168 12.663 16.8948 10.92 16.8948 8.99695C16.8948 5.13695 13.7678 1.99695 9.92584 1.99695Z"
                    />
                  </svg>
                </div>
              </nav>
            </div>
            <div className="mil-menu-btn">
              <span></span>
            </div>
          </div>
        </div>
      </div>

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
                <img src="assets/projects/2.jpg" alt="Project" />
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
                <img
                  src="assets/projects/5.jpg"
                  alt="Project"
                  
                />
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
                <img src="assets/projects/1.jpg" alt="Project" />
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
                <img src="assets/projects/7.jpg" alt="Project" />
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
                <img src="assets/projects/10.jpg" alt="Project" id="abu" />
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
