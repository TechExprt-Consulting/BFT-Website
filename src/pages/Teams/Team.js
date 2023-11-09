import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
const Team = () => {
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
                <Link to="/Team">Team</Link>
              </li>
            </ul>
            <h2 className="mil-uppercase">Leadership Team</h2>
          </div>
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
      <section className="call-to-action mil-gradient-bg mil-p-120-0">
        <div
          className="mil-deco mil-deco-accent"
          style={{ top: "0", left: "15%" }}
        ></div>
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
            <Link to="/Contact" className="mil-button mil-border mil-light">
              <span>Book an Appointment</span>
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
