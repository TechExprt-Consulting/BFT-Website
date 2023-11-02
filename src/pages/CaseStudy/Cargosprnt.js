import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import $ from "jquery";

const CargoSprint = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Scroll event listener
    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 220) {
        $(".mil-top-panel.mil-animated").removeClass(
          "mil-top-panel-transparent"
        );
        $(".has-additional-panel").addClass("mil-hide-top");
      } else {
        $(".mil-top-panel.mil-animated").addClass("mil-top-panel-transparent");
        $(".has-additional-panel").removeClass("mil-hide-top");
      }
    });

    return () => {
      $(window).off("scroll");
    };
  }, []);

  return (
    <div className="mil-wrapper">
      <Navbar />

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
                <h6 className="mil-mb-15">
                  Apex, Custom REST API, Financial Force, GCP
                </h6>
              </div>
            </div>
            <div class="col-lg-7 col-xl-8">
              {/* <span class="mil-suptitle mil-suptitle-2 mil-mb-30">Overviews</span> */}
              <h3 class="mil-mb-30">Overviews</h3>
              <p class="mil-mb-60 conten">
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
                      <span class="mil-dark conten">
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
                      <span class="mil-dark conten">
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
            <div class="col-xl-5 mil-mb-60 conten">
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
                <img src="assets/partner/3.png" alt="Project" />
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

      {/* screenshot */}

      <div className="row justify-content-around align-items-center">
        <div className="col-xl-7  mil-mb-60">
          <div className="mil-project-cover">
            <img src="assets/img/cargo.png" alt="Project" />
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

export default CargoSprint;
