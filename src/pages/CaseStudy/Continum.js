import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Continuum = () => {
  return (
    <div className="mil-wrapper">
      <Navbar/>

      {/* <!-- banner --> */}
      <div className="mil-banner-sm bg-white shadow shadow-bottom shadow-md">
        <div className="mil-banner-content position-relative">
          <div className="container ">
            <div className="d-flex flex-column-reverse flex-md-row col-md-6">
              <div className="d-flex flex-column mt-3">
              <Link to="/caseStudy" class="mil-link link-left mil-mb-30">
              <i class="fas fa-arrow-left"></i>
              <span>All Cases</span>
            </Link>

                <h2 className="mil-uppercase" style={{ color: "#1B2F5B" }}>
                Continuum
                                </h2>
              </div>
            </div>
            <div className="mil-fixed-button-container">
              <button className="mil-vertical-button text-dark ">
                <Link to="/contact">Get a Free Quote!</Link>
              </button>
            </div>{" "}
            <img
              src="/assets/casestudy/Continuum.png"
              alt="image"
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
                <h5 class="mil-list-title1 mil-mb-30">Project Info</h5>

                <p class="mil-mb-10">Client</p>
                <h6 class="mil-mb-15">Continuum</h6>
                <div class="mil-divider mil-divider-left mil-mb-30"></div>
                <p class="mil-mb-10">Service</p>
                <h6 class="mil-mb-15">Web Developement</h6>
                <div class="mil-divider mil-divider-left mil-mb-30"></div>
                <p class="mil-mb-10">Industry</p>
                <h6 class="mil-mb-15"></h6>
                <div class="mil-divider mil-divider-left mil-mb-30"></div>
                <p class="mil-mb-10">Stack</p>
                <h6 className="mil-mb-15">React, Java, Springboot</h6>

              </div>
            </div>
            <div class="col-lg-7 col-xl-8">
              {/* <span class="mil-suptitle mil-suptitle-2 mil-mb-30">Overviews</span> */}
              <h3 class="mil-mb-30">Overviews</h3>
              <p class="mil-mb-60 conten">
                Continuum was just an idea where our client wanted to work
                rigorously on providing solutions to efface the hurdles of the
                B2B manual return process. His mission is to ease the process
                and minimize the efforts involved. He wanted to optimize the
                continuous transactions that happen post Purchase Order, address
                the issues of longer TAT due to delays or missed information,
                repeated errors as everything had to be manually. He onboarded
                BytesFarms to help him design and devise a software that could
                easily manage all the diversities and complexities of the system
                and yet come across as a much more feasible alternative.{" "}
              </p>
              <h3 class="mil-mb-30">Challenges</h3>

              <div class="row">
                <div class="col-xl-6">
                  <ul class="mil-check-icon-list mil-mb-15">
                    <li>
                    <img src="/assets/icon/sm/1.svg" alt="icon" />
                      <span class="mil-dark">
                        Digitalizing a process that has been highly dependent on
                        manual labor for years{" "}
                      </span>
                    </li>
                    <li>
                    <img src="/assets/icon/sm/1.svg" alt="icon" />
                      <span class="mil-dark">
                        Developing an interface that can be easily accessible by
                        the workforce{" "}
                      </span>
                    </li>
                  </ul>
                </div>
                <div class="col-xl-6 mil-mb-30">
                  <ul class="mil-check-icon-list">
                    <li>
                    <img src="/assets/icon/sm/1.svg" alt="icon" />
                      <span class="mil-dark">
                        Mapping and integrating all essential steps, making it a
                        complete solution{" "}
                      </span>
                    </li>
                    <li>
                    <img src="/assets/icon/sm/1.svg" alt="icon" />
                      <span class="mil-dark">Ensure scalability </span>
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
                  <img src="/assets/icon/sm/3.svg" alt="icon" />
                </div>
                <p class="mil-dark">Developed REST APIs for order returns.</p>
              </div>
              <div class="mil-icon-box-head mil-long mil-mb-15">
                <div class="mil-icon-frame mil-icon-frame-sm">
                  <img src="/assets/icon/sm/2.svg" alt="icon" />
                </div>
                <p class="mil-dark">Integrated ERP for multiple tenants.</p>
              </div>
              <div class="mil-icon-box-head mil-long mil-mb-15">
                <div class="mil-icon-frame mil-icon-frame-sm">
                  <img src="/assets/icon/sm/5.svg" alt="icon" />
                </div>
                <p class="mil-dark">
                  Single Sign-On (SSO) feature, so users can log in to continuum
                  without any further authentication in the software.{" "}
                </p>
              </div>
              <div class="mil-icon-box-head mil-long mil-mb-15">
                <div class="mil-icon-frame mil-icon-frame-sm">
                  <img src="/assets/icon/sm/6.svg" alt="icon" />
                </div>
                <p class="mil-dark">
                  JWT authorization on login, ensuring that only authenticated
                  users with the proper permissions can interact with the
                  system.{" "}
                </p>
              </div>
              <div class="mil-icon-box-head mil-long mil-mb-15">
                <div class="mil-icon-frame mil-icon-frame-sm">
                  <img src="/assets/icon/sm/6.svg" alt="icon" />
                </div>
                <p class="mil-dark">
                  Leveraging Velocity Templates with Java for email
                  communication.{" "}
                </p>
              </div>
            </div>
            <div class="col-xl-6 mil-mb-60">
              <div class="mil-project-cover">
                <img
                  src="/assets/partner/2.png"
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
            <div class="">
              <h2 class="mil-mb-30">Conclusion</h2>

              <p className="conten">
                With Continuum, we achieved a hassle-free B2B return model. A
                user-friendly interface for customers to access purchase order
                details and initiate the returns process, enabled a quick
                transition to the digital model. Warehouse routing based on the
                reasons for returns, saved a lot of time and resources. With
                automated entry of Return Merchandise Authorizations (RMAs) into
                the ERP system and provision to the customer, the rooms for
                error were minimized and resulted in saving tons of paper as
                well.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- conclusion end --> */}

      <div className="row justify-content-around align-items-center">
        <div className="col-xl-7  mil-mb-60">
          <div className="mil-project-cover">
            <img src="/assets/img/continum.png" alt="Project" />
          </div>
        </div>
        <div className="col-xl-7  mil-mb-60">
          <div className="mil-project-cover">
            <img src="/assets/img/continum2.png" alt="Project" />
          </div>
        </div>
        <div className="col-xl-7  mil-mb-60">
          <div className="mil-project-cover">
            <img src="/assets/img/continum3.png" alt="Project" />
          </div>
        </div>
        <div className="col-xl-7  mil-mb-60">
          <div className="mil-project-cover ">
            <img src="/assets/img/continum4.png" alt="Project" />
          </div>
        </div>
        <div className="col-xl-7  mil-mb-60">
          <div className="mil-project-cover ">
            <img src="/assets/img/continum5.png" alt="Project" />
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

export default Continuum;
