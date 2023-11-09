import React from "react";
import "./Service.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
const Digital = () => {
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
                <Link to="">Service</Link>
              </li>
              <li>
                <Link to="/Cloud">Digital Marketing</Link>
              </li>
            </ul>
            <h2 className="mil-uppercase">Digital Marketing</h2>
          </div>
        </div>
      </div>
      {/* <!-- banner end --> */}

      {/* <!-- call to action --> */}
      <section className="mil-p-120-90">
        <div
          className="mil-deco"
          style={{ bottom: "0", right: "25%", transform: "rotate(180deg)" }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="mil-hori-box mil-mb-30">
                <div className="mil-mr-30">
                  <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg">
                    <img src="assets/icon/1.svg" alt="icon" />
                  </div>
                </div>
                <h6>
                  Wondering why odes? Well, just as special and personalized an
                  ode is, we customize our digital solutions similarly for our
                  clients. We believe that marketing is incomplete if it lacks
                  the reflection of the brand in it, and so we are always ready
                  to walk that extra mile for clients
                </h6>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mil-adaptive-right">
                <Link to="/Contact" className="mil-button mil-border mil-mb-30">
                  <span>Get in Touch</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- call to action end --> */}

      <div className="container">
        <div className="mil-divider"></div>
      </div>

      {/* <!-- services --> */}
      <section className="mil-services mil-p-120-90">
        <div
          className="mil-deco"
          style={{ bottom: "0", right: "40%", transform: "rotate(180deg)" }}
        ></div>
        <div className="container">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
            High Quality and Performance
          </span>
          <h2 className="mil-mb-90">
            Our Approach To <span className="mil-accent">Digital</span>{" "}
            Marketing
          </h2>
          <div className="row mil-mb-30-adapt">
            <div className="col-lg-6 col-xl-6">
              <div className="mil-service-item mil-without-lines mil-mb-60">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <img src="assets/icon/1.svg" alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">01</span>Strategic Planning
                  </h5>
                  <p>
                    Stepping on a digital landscape without a roadmap is like
                    finding a café in a foreign city. You are clueless, keep
                    asking for directions, sometimes you make it to the café,
                    while sometimes you are misled. We help you design the
                    roadmap, making your journey effortless and successful
                    across the digital landscape.
                  </p>
                  <div className="row align-items-end">
                    <div className="col-xl-7">
                      <ul className="mil-check-icon-list mil-mb-60">
                        <li>
                          <img src="assets/icon/sm/12.svg" alt="icon" />
                          <span className="mil-dark">Brand Strategy</span>
                        </li>
                        <li>
                          <img src="assets/icon/sm/12.svg" alt="icon" />
                          <span className="mil-dark">Content Strategy</span>
                        </li>
                        <li>
                          <img src="assets/icon/sm/12.svg" alt="icon" />
                          <span className="mil-dark">
                            Social Media Strategy
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="mil-service-item mil-without-lines mil-mb-60">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <img src="assets/icon/2.svg" alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">02</span> Conceptualization
                  </h5>
                  <p>
                    Thousands of posts are published on social media platforms
                    every second, making something that stops your customer from
                    scrolling is an uphill battle. Our team constantly works
                    through all algorithms, to design and deliver content of
                    exceptional standards.
                  </p>
                  <div className="row align-items-end">
                    <div className="col-xl-7">
                      <ul className="mil-check-icon-list mil-mb-60">
                        <li>
                          <img src="assets/icon/sm/12.svg" alt="icon" />
                          <span className="mil-dark">
                            Campaign Conceptualization
                          </span>
                        </li>
                        <li>
                          <img src="assets/icon/sm/12.svg" alt="icon" />
                          <span className="mil-dark">Creative Layouts</span>
                        </li>
                        <li>
                          <img src="assets/icon/sm/12.svg" alt="icon" />
                          <span className="mil-dark">UI/UX Designs</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="mil-service-item mil-without-lines mil-mb-60">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <img src="assets/icon/3.svg" alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">03</span> Execution
                  </h5>
                  <p>
                    Even the best of best plans are nothing more than fallacy if
                    lacks proper execution. We pay utmost attention to the
                    execution and ensure that executions come as flawless as our
                    strategy.
                  </p>
                  <div className="row align-items-end">
                    <div className="col-xl-7">
                      <ul className="mil-check-icon-list mil-mb-60">
                        <li>
                          <img src="assets/icon/sm/12.svg" alt="icon" />
                          <span className="mil-dark">
                            Social Media Management
                          </span>
                        </li>
                        <li>
                          <img src="assets/icon/sm/12.svg" alt="icon" />
                          <span className="mil-dark">
                            Search Engine Optimization
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-6">
              <div className="mil-service-item mil-without-lines mil-mb-60">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <img src="assets/icon/4.svg" alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">04</span> Promotion
                  </h5>
                  <p>
                    There will always be a campaign that has gone live a moment
                    before yours, and another going live right after yours. As
                    your marketing partner we ensure that your campaign makes it
                    to the right audience and doesn’t get lost in the myriad of
                    campaigns.
                  </p>
                  <div className="row align-items-end">
                    <div className="col-xl-7">
                      <ul className="mil-check-icon-list mil-mb-60">
                        <li>
                          <img src="assets/icon/sm/12.svg" alt="icon" />
                          <span className="mil-dark">Email Marketing</span>
                        </li>
                        <li>
                          <img src="assets/icon/sm/12.svg" alt="icon" />
                          <span className="mil-dark">
                            Social Media Marketing
                          </span>
                        </li>
                        <li>
                          <img src="assets/icon/sm/12.svg" alt="icon" />
                          <span className="mil-dark">Content Marketing</span>
                        </li>
                        <li>
                          <img src="assets/icon/sm/12.svg" alt="icon" />
                          <span className="mil-dark">
                            Search Engine Marketing
                          </span>
                        </li>
                        <li>
                          <img src="assets/icon/sm/12.svg" alt="icon" />
                          <span className="mil-dark">PPC</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="mil-service-item mil-without-lines mil-mb-60">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <img src="assets/icon/5.svg" alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">05</span> Data Analytics
                  </h5>
                  <p>
                    We live in the era where everything comes down data, our
                    team uses this data not just to create the best campaigns
                    but also to track and analyze the performance. We call it
                    our signature of success when the number speaks of the
                    impact we created with our campaigns.
                  </p>
                  <div className="row align-items-end">
                    <div className="col-xl-7">
                      <ul className="mil-check-icon-list mil-mb-60">
                        <li>
                          <img src="assets/icon/sm/12.svg" alt="icon" />
                          <span className="mil-dark">Google Analytics</span>
                        </li>
                        <li>
                          <img src="assets/icon/sm/12.svg" alt="icon" />
                          <span className="mil-dark">Social Analytics</span>
                        </li>
                        <li>
                          <img src="assets/icon/sm/12.svg" alt="icon" />
                          <span className="mil-dark">
                            Online Reputation Management
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-md-6 col-xl-6">
              <Link to="/Contact" className="mil-button mil-border mil-mb-30">
                <span>Talk To Our Digital Marketing Experts</span>
              </Link>
            </div>
            <div className="col-md-6 col-xl-6">
              <div className="mil-adaptive-right">
                {/* <Link to="" className="mil-link mil-mb-30"><span>See More</span><i className="fas fa-arrow-right"></i></Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- services end --> */}
      {/* <!-- partners --> */}
      <div class="mil-partners mil-partners-spaces">
        <div class="container">
          <div class="mil-partners-frame">
            <a href="#.">
              <img
                src="assets/project/6.png"
                alt="partner"
                style={{ width: "200px" }}
              />
            </a>
            <a href="#.">
              <img src="assets/project/m.jpg" alt="partner" />
            </a>
            <a href="#.">
              <img
                src="assets/project/8.png"
                alt="partner"
                style={{ height: "100px" }}
              />
            </a>
            <a href="#.">
              <img
                src="assets/project/9.png"
                alt="partner"
                style={{ width: "200px" }}
              />
            </a>
          </div>
        </div>
      </div>
      {/* <!-- partners end --> */}
      {/* <!-- services --> */}
      <section className="mil-gradient-bg mil-deco-right mil-p-120-0">
        <div
          className="mil-deco mil-deco-accent"
          style={{ top: "0", left: "5%" }}
        ></div>
        <div className="container">
          <div className="mil-text-center mil-mb-90">
            <span className="mil-suptitle  mil-light mil-suptitle-2 mil-mb-30">
              Always The Best
            </span>
            <h2 className="mil-light mil-mb-30">
              {" "}
              Why Choose our{" "}
              <span className="mil-accent">Digital Marketing Services</span>
            </h2>
          </div>
          <div className="row mil-mb-30-adapt">
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="assets/icon/sm/6.svg" alt="icon" />
                </div>
                <p className="mil-light"> Expertise</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="assets/icon/sm/2.svg" alt="icon" />
                </div>
                <p className="mil-light">Tailored Solutions</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="assets/icon/sm/7.svg" alt="icon" />
                </div>
                <p className="mil-light">Minimal Disruption</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="assets/icon/sm/3.svg" alt="icon" />
                </div>
                <p className="mil-light">Security First</p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="assets/icon/sm/1.svg" alt="icon" />
                </div>
                <p className="mil-light">Cost Efficiency</p>
              </div>
            </div>
          </div>
          <div className="mil-text-center">
            <Link
              to="/Contact"
              className="mil-button mil-border mil-light mil-mb-30"
            >
              <span>Talk To Our Digital Marketing Experts</span>
            </Link>
          </div>
        </div>
      </section>
      {/* <!-- services end --> */}

      <Footer />
    </div>
  );
};

export default Digital;
