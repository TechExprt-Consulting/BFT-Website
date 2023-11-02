import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const AbuDhabi = () => {
  return (
    <div className="mil-wrapper">
     <Navbar/>

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
            <h2 class="mil-uppercase">Abu Dhabi University</h2>
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
                <h6 class="mil-mb-15">Abu Dhabi University</h6>
                <div class="mil-divider mil-divider-left mil-mb-30"></div>
                <p class="mil-mb-10">Service</p>
                <h6 class="mil-mb-15">BlockChain</h6>
                <div class="mil-divider mil-divider-left mil-mb-30"></div>
                <p class="mil-mb-10">Industry</p>
                <h6 class="mil-mb-15">Education</h6>
                <div class="mil-divider mil-divider-left mil-mb-30"></div>
                <p class="mil-mb-10">Stack</p>
                <h6 className="mil-mb-15">React JS, Node JS, Block-chain</h6>

              </div>
            </div>
            <div class="col-lg-7 col-xl-8">
              {/* <span class="mil-suptitle mil-suptitle-2 mil-mb-30">Overviews</span> */}
              <h3 class="mil-mb-30">Overviews</h3>
              <p class="mil-mb-60 conten">
                Abu Dhabi University is the largest private university in the
                UAE. It is one of the region’s leading academic institutions and
                ranks in the top 3 universities in the UAE. The university
                attracts thousands of applications every year. And over the
                years as the cases of counterfeit degrees and other official
                documents increased the university officials started facing
                problems as well. When the university reached out to us, they
                wanted to implement a web-based application built on the
                Blockchain platform for the generation, approval, digital
                signing, storing, and verification of the graduation
                certificates issued to graduates from Abu Dhabi University.{" "}
              </p>
              <h3 class="mil-mb-30">Challenges</h3>

              <div class="row">
                <div class="col-xl-6">
                  <ul class="mil-check-icon-list mil-mb-15">
                    <li>
                    <img src="assets/icon/sm/1.svg" alt="icon" />
                      <span class="mil-dark">
                        The system should be able to integrate with the SIS{" "}
                      </span>
                    </li>
                    <li>
                    <img src="assets/icon/sm/1.svg" alt="icon" />
                      <span class="mil-dark">
                        Handling batch and individual certificate generation.{" "}
                      </span>
                    </li>
                  </ul>
                </div>
                <div class="col-xl-6 mil-mb-30">
                  <ul class="mil-check-icon-list">
                    <li>
                    <img src="assets/icon/sm/1.svg" alt="icon" />
                      <span class="mil-dark conten">
                        Certificate generation and verification application
                        should be a blockchain-based solution (The system) to be
                        made available on the ADU domain adu.ac.ae{" "}
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
                  Created a blockchain system that assigned distinct identities
                  to each document or degree, effectively preventing fraud.{" "}
                </p>
              </div>
            </div>
            <div class="col-xl-6 mil-mb-60">
              <div class="mil-project-cover">
                <img
                  src="assets/projects/10.jpg"
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


      {/* <div
            className="row justify-content-around align-items-center"
            id="cargo"
          >
            <div className="col-xl-6 mil-mb-60">
              <div className="mil-project-cover">
                <Link to="/abuDhabi">
                  <img src="assets/case/1.png" alt="Project" />
                </Link>
              </div>
             
            </div>
          </div>
          <div
            className="row justify-content-around align-items-center"
            id="cargo"
          >
            <div className="col-xl-6 mil-mb-60">
              <div className="mil-project-cover">
                <Link to="/abuDhabi">
                  <img src="assets/case/2.png" alt="Project" />
                </Link>
              </div>
             
            </div>
          </div> */}

      <Footer />
    </div>
  );
};

export default AbuDhabi;
