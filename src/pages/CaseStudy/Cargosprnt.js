import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
const CargoSprint = () => {
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
      <div class="mil-banner-sm mil-deep-bg">
        <img
          src="assets/deco/map.png"
          alt="background"
          class="mil-background-image"
        />
        <div
          class="mil-deco mil-deco-accent"
          style={{ top: "47%", right: "10%", transform: "rotate(90deg)" }}
        ></div>
        <div class="mil-banner-content">
          <div class="container mil-relative">
            <Link to="/Case" class="mil-link link-left mil-mb-30">
              <i class="fas fa-arrow-left"></i>
              <span>All Cases</span>
            </Link>
            <h2 class="mil-uppercase">Cargosprint</h2>
          </div>
        </div>
      </div>
      {/* <!-- banner end --> */}

      {/* <!-- project --> */}
      <section class="mil-p-120-90">
        <div class="container">
          <div class="row flex-sm-row-reverse justify-content-between">
            <div class="col-lg-4 col-xl-3">
              <div class="mil-project-info mil-mb-60">
                <h5 class="mil-list-title mil-mb-30">Project Info</h5>

                <p class="mil-mb-10">Client</p>
                <h6 class="mil-mb-15">Cargosprint</h6>
                <div class="mil-divider mil-divider-left mil-mb-30"></div>
                <p class="mil-mb-10">Service</p>
                <h6 class="mil-mb-15">Salesforce</h6>
                <div class="mil-divider mil-divider-left mil-mb-30"></div>
                <p class="mil-mb-10">Industry</p>
                <h6 class="mil-mb-15">Cargo</h6>
                <div class="mil-divider mil-divider-left mil-mb-30"></div>
                <p class="mil-mb-10">Stack</p>
                <h6 className="mil-mb-15">SalesCloud, Apex, Azure</h6>
              </div>
            </div>
            <div class="col-lg-7 col-xl-8">
              {/* <span class="mil-suptitle mil-suptitle-2 mil-mb-30">Overviews</span> */}
              <h3 class="mil-mb-30">Overviews</h3>
              <p class="mil-mb-60">
                Cargosprint is a leading payment intermediary with a vast array
                of user interfaces and apps that enable clients to make seamless
                payments. The existing process involved sending payment data to
                Google Cloud, where it was stored and subsequently integrated
                into Salesforce. However, the client faced challenges due to the
                complexity of custom codes and classes that had been developed
                to manage this integration. The need for a more standardized and
                efficient solution led to the adoption of Financial Force
                (Certinia), a managed package in Salesforce optimized to keep
                track of your financial transactions. The objective was to
                establish a smooth data flow from Google Cloud to Salesforce
                using minimal custom functionalities.{" "}
              </p>
              <h3 class="mil-mb-30">Challenges</h3>

              <div class="row">
                <div class="col-xl-6">
                  <ul class="mil-check-icon-list mil-mb-15">
                    <li>
                    <img src="assets/icon/sm/1.svg" alt="icon" />
                      <span class="mil-dark">
                        Complex and error-prone custom code in Salesforce for
                        Payment data integration.{" "}
                      </span>
                    </li>
                    <li>
                    <img src="assets/icon/sm/1.svg" alt="icon" />
                      <span class="mil-dark">
                        Inefficient bug handling and optimization due to the
                        custom code.{" "}
                      </span>
                    </li>
                  </ul>
                </div>
                <div class="col-xl-6 mil-mb-30">
                  <ul class="mil-check-icon-list">
                    <li>
                    <img src="assets/icon/sm/1.svg" alt="icon" />
                      <span class="mil-dark">
                        The need for standardized Salesforce functionality to
                        facilitate seamless data integration.{" "}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- project end --> */}

      <div class="container">
        <div class="mil-divider"></div>
      </div>

      {/* <!-- project --> */}
      <section class="mil-p-120-60">
        <div class="container">
          <div class="row justify-content-between align-items-center">
            <div class="col-xl-5 mil-mb-60">
              <h3 class="mil-mb-30">The Solution</h3>

              <div class="mil-icon-box-head mil-long mil-mb-15">
                <div class="mil-icon-frame mil-icon-frame-sm">
                  <img src="assets/icon/sm/3.svg" alt="icon" />
                </div>
                <p class="mil-dark">
                  Developed a REST API that served as the bridge between Google
                  Cloud and Salesforce.{" "}
                </p>
              </div>
              <div class="mil-icon-box-head mil-long mil-mb-15">
                <div class="mil-icon-frame mil-icon-frame-sm">
                  <img src="assets/icon/sm/2.svg" alt="icon" />
                </div>
                <p class="mil-dark">
                  Implemented OAuth 2.0 authorization using Salesforce Connected
                  Apps to ensure security.{" "}
                </p>
              </div>
              <div class="mil-icon-box-head mil-long mil-mb-15">
                <div class="mil-icon-frame mil-icon-frame-sm">
                  <img src="assets/icon/sm/5.svg" alt="icon" />
                </div>
                <p class="mil-dark">
                  Leveraged Salesforce's Queueable interface to process data
                  requests asynchronously.{" "}
                </p>
              </div>
              <div class="mil-icon-box-head mil-long mil-mb-15">
                <div class="mil-icon-frame mil-icon-frame-sm">
                  <img src="assets/icon/sm/6.svg" alt="icon" />
                </div>
                <p class="mil-dark">Prioritized credential security. </p>
              </div>
            </div>
            <div class="col-xl-6 mil-mb-60">
              <div class="mil-project-cover">
                <img
                  src="assets/partner/3.png"
                  alt="Project"
                  
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- project end --> */}

      <div class="container">
        <div class="mil-divider"></div>
      </div>

      {/* <!-- conclusion --> */}
      <section class="mil-p-120-60">
        <div class="mil-deco" style={{ top: "0", left: "30%" }}></div>
        <div class="container">
          <div class="row align-items-end mil-mb-90">
            <div class="col-xl-6">
              <h2 class="mil-mb-30">Conclusion</h2>

              <p>
                By transitioning to Financial Force (Certinia) and implementing
                REST API integration with Salesforce, Cargosprint achieved a
                streamlined and secure payment data integration process. It
                helps them handle bulk records without bothering about
                credential security, unexpected errors and duplicate requests.
                The utilization of best practices and adherence to Salesforce's
                governor limits ensured the solution's efficiency and
                scalability.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- conclusion end --> */}

      <div class="container">
        <div class="mil-divider mil-mb-60"></div>
      </div>

      <Footer />
    </div>
  );
};

export default CargoSprint;
