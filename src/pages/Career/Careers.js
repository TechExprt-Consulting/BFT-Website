import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
const Careers = () => {
  return (
    <div className="mil-wrapper">
      <div className="mil-top-position mil-fixed ">
        <div className="mil-top-panel ">
          <div className="container">
            <Link
              to="/home"
              className="mil-logo"
              style={{ width: "250px", height: "90px" }}            ></Link>
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
            <div className="col-xl-4">
              <p>
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
              <div className="row">
                <div className="col-md-6 col-lg-4 col-xl-4 mil-mb-30">
                  <div className="mil-vacancy-head mil-mb-15">
                    <span className="mil-badge">Full Time</span>
                    <span className="mil-text-sm mil-dark">Indore</span>
                  </div>
                  <h4>UI and Web Developer</h4>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-4 mil-mb-30">
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
                <div className="col-md-6 col-lg-4 col-xl-4 mil-mb-30">
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
                <div className="col-md-6 col-lg-4 col-xl-4 mil-mb-30">
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
                <div className="col-md-6 col-lg-4 col-xl-4 mil-mb-30">
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
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Work With Us
              </span>
              <h2 className="mil-mb-30">
                Why <span className="mil-accent">Choose</span> Us?
              </h2>
              <p className="mil-mb-15">
                {" "}
                At Bytesfarms Technologies, we stand out in the crowded digital
                landscape by delivering cutting-edge solutions tailored to your
                unique requirements. With a team of skilled professionals, we
                bring years of industry experience to the table, ensuring
                top-notch quality and efficiency in every project we undertake.{" "}
              </p>
              <p className="mil-mb-15">
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

      {/* <!-- counters --> */}
      <section className="mil-counters mil-deep-bg mil-p-120-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <div className="mil-mb-30">
                <h2 className="mil-mb-20">14</h2>
                <div className="mil-divider mil-divider-left mil-mb-30"></div>
                <p>Years of Experience In The IT Industry</p>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="mil-mb-30">
                <h2 className="mil-mb-20">705</h2>
                <div className="mil-divider mil-divider-left mil-mb-30"></div>
                <p>Satisfied Clients We Have Served Globally</p>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="mil-mb-30">
                <h2 className="mil-mb-20">280</h2>
                <div className="mil-divider mil-divider-left mil-mb-30"></div>
                <p>Recognitions Over Two Decades</p>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="mil-mb-30">
                <h2 className="mil-mb-20">72</h2>
                <div className="mil-divider mil-divider-left mil-mb-30"></div>
                <p>Awards & Certifications Of Our Work</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- counters end --> */}

      <Footer />
    </div>
  );
};

export default Careers;
