import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const DMC = () => {
  return (
    <div className="mil-wrapper">
      <Navbar/>

      {/* <!-- banner --> */}
      {/* <div class="mil-banner-sm mil-deep-bg">
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
            <h2 class="mil-uppercase">DMC(Delta Marketing Company)</h2>
          </div>
        </div>
        <div className="mil-fixed-button-container">
          <button className="mil-vertical-button text-dark ">
            Get a Free Quote!
          </button>
        </div>
        
      </div> */}
      <div className="mil-banner-sm bg-white shadow shadow-bottom shadow-md">
        <div className="mil-banner-content position-relative">
          <div className="container ">
            <div className="d-flex flex-column-reverse flex-md-row col-md-6">
              <div className="d-flex flex-column mt-3">
              <Link to="/Case" class="mil-link link-left mil-mb-30">
              <i class="fas fa-arrow-left"></i>
              <span>All Cases</span>
            </Link>

                <h2 className="mil-uppercase" style={{ color: "#1B2F5B" }}>
                DMC(Delta Marketing Company)
                                </h2>
              </div>
            </div>
            <div className="mil-fixed-button-container">
              <button className="mil-vertical-button text-dark ">
                <Link to="/contact">Get a Free Quote!</Link>
              </button>
            </div>{" "}
            <img
              src="assets/casestudy/DMC.png"
              alt="mus"
              className="col-md-5  pt-5  mil-banner-image"
            />
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
                <h6 class="mil-mb-15">DMC</h6>
                <div class="mil-divider mil-divider-left mil-mb-30"></div>
                <p class="mil-mb-10">Service</p>
                <h6 class="mil-mb-15">Salesforce</h6>
                <div class="mil-divider mil-divider-left mil-mb-30"></div>
                <p class="mil-mb-10">Industry</p>
                <h6 class="mil-mb-15">Health and Fitness</h6>
                <div class="mil-divider mil-divider-left mil-mb-30"></div>
                <p class="mil-mb-10">Stack</p>
                <h6 className="mil-mb-15">Salesforce FSL, LWC, Apex</h6>
              </div>
            </div>
            <div class="col-lg-7 col-xl-8">
              {/* <span class="mil-suptitle mil-suptitle-2 mil-mb-30">Overviews</span> */}
              <h3 class="mil-mb-30">Overviews</h3>
              <p class="mil-mb-60 conten">
                Delta Marketing Company (DMC) was established in 1984 and is
                part of the Alireza family of companies based in Jeddah, Saudi
                Arabia. DMC leads a successful and complimentary portfolio of
                activities in the field of retail, distribution, recreational
                facilities and events management, providing its customers with
                products and services that enrich their daily lives. DMC joined
                hands with BytesFarms, to enhance their field service operations
                and customer services.{" "}
              </p>
              <h3 class="mil-mb-30">Challenges</h3>

              <div class="row">
                <div class="col-xl-6">
                  <ul class="mil-check-icon-list mil-mb-15">
                    <li>
                    <img src="assets/icon/sm/1.svg" alt="icon" />
                      <span class="mil-dark">
                        Inefficient Work Order Management{" "}
                      </span>
                    </li>
                    <li>
                    <img src="assets/icon/sm/1.svg" alt="icon" />
                      <span class="mil-dark">Inefficient Work Plan </span>
                    </li>
                    <li>
                    <img src="assets/icon/sm/1.svg" alt="icon" />
                      <span class="mil-dark">
                        Generating Signed service Reports 
                      </span>
                    </li>
                  </ul>
                </div>
                <div class="col-xl-6 mil-mb-30">
                  <ul class="mil-check-icon-list">
                    <li>
                    <img src="assets/icon/sm/1.svg" alt="icon" />
                      <span class="mil-dark conten">
                        Getting the feedback form filled in without asking their
                        customer for the Salesforce credentials to the Customer.{" "}
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
            <div class="col-xl-5 mil-mb-60 conten">
              <h3 class="mil-mb-30">The Solution</h3>

              <div class="mil-icon-box-head mil-long mil-mb-15">
                <div class="mil-icon-frame mil-icon-frame-sm">
                  <img src="assets/icon/sm/3.svg" alt="icon" />
                </div>
                <p class="mil-dark">
                  Introduced Salesforce Field Service Lightning introduced a
                  streamlined work order management system.{" "}
                </p>
              </div>
              <div class="mil-icon-box-head mil-long mil-mb-15">
                <div class="mil-icon-frame mil-icon-frame-sm">
                  <img src="assets/icon/sm/2.svg" alt="icon" />
                </div>
                <p class="mil-dark">
                  Created the Work Plans and the Service Reports and with the
                  help of FSL App in the Salesforce, making it visible to
                  technicians so that they can see the procedure to perform the
                  task and mark it as completed.{" "}
                </p>
              </div>
              <div class="mil-icon-box-head mil-long mil-mb-15">
                <div class="mil-icon-frame mil-icon-frame-sm">
                  <img src="assets/icon/sm/5.svg" alt="icon" />
                </div>
                <p class="mil-dark">
                  Altered the configurations for service report templates in the
                  Salesforce org, enabling customers to sign digitally.{" "}
                </p>
              </div>
              <div class="mil-icon-box-head mil-long mil-mb-15">
                <div class="mil-icon-frame mil-icon-frame-sm">
                  <img src="assets/icon/sm/6.svg" alt="icon" />
                </div>
                <p class="mil-dark">
                  Enabled customers to get mail on their personal email address,
                  facilitating them to fill and submit the response without
                  salesforce credentials.{" "}
                </p>
              </div>
            </div>
            <div class="col-xl-6 mil-mb-60">
              <div class="mil-project-cover">
                <img
                  src="assets/casestudy/DMC.png"
                  alt="Project"
                  style={{ width: "500px", height: "250px" }}
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
            <div class="">
              <h2 class="mil-mb-30">Conclusion</h2>

              <p className="conten">
                By implementing Salesforce Field Service Lightning, we
                successfully addressed the critical problems and achieved
                substantial improvements in their field service operations. They
                experienced reduced service delivery times, increased technician
                productivity, enhanced parts management, and improved customer
                satisfaction. Field Service Lightning not only streamlined their
                processes but also empowered them with data-driven insights,
                enabling continuous improvement and a competitive edge in their
                industry.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- conclusion end --> */}

      <div className="row justify-content-around align-items-center">
        <div className="col-xl-7  mil-mb-60">
          <div className="mil-project-cover">
            <img src="assets/img/dmc.png" alt="Project" />
          </div>
        </div>
      </div>

      <div class="container">
        <div class="mil-divider mil-mb-60"></div>
      </div>

      <Footer />
    </div>
  );
};

export default DMC;
