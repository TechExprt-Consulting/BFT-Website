import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Testimonial from "../components/Testimonial";
const Nexum = () => {
  return (
    <div className="mil-wrapper">
      <Navbar/>

      {/* <!-- banner --> */}
      <div className="mil-banner-sm bg-white shadow shadow-bottom shadow-md">
        <div className="mil-banner-content position-relative">
          <div className="container ">
            <div className="d-flex flex-column-reverse flex-md-row col-md-6">
              <div className="d-flex flex-column mt-3">
              <Link to="/case-study" class="mil-link link-left mil-mb-30">
              <i class="fas fa-arrow-left"></i>
              <span>All Cases</span>
            </Link>

                <h2 className="mil-uppercase" style={{ color: "#1B2F5B" }}>
                Nexum
                                </h2>
              </div>
            </div>
            <div className="mil-fixed-button-container">
              <button className="mil-vertical-button text-dark ">
                <Link to="/contact">Get a Free Quote!</Link>
              </button>
            </div>{" "}
            <img
              src="/assets/casestudy/nexum.png"
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
                <h6 class="mil-mb-15">Nexum Coffee</h6>
                <div class="mil-divider mil-divider-left mil-mb-30"></div>
                <p class="mil-mb-10">Service</p>
                <h6 class="mil-mb-15">Web Developement</h6>
                <div class="mil-divider mil-divider-left mil-mb-30"></div>
                <p class="mil-mb-10">Industry</p>
                <h6 class="mil-mb-15">Food</h6>
                <div class="mil-divider mil-divider-left mil-mb-30"></div>
                <p class="mil-mb-10">Stack</p>
                <h6 className="mil-mb-15">React JS, Node JS, MySQL, AWS</h6>

              </div>
            </div>
            <div class="col-lg-7 col-xl-8">
              {/* <span class="mil-suptitle mil-suptitle-2 mil-mb-30">Overviews</span> */}
              <h3 class="mil-mb-30">Overviews</h3>
              <p class="mil-mb-60">
                Nexum Coffee was yet another revolutionary idea that could turn
                the tables when brought to execution. When the client approached
                us with the idea, he wanted us to design a digital space where
                the coffee roaster could directly connect with the producer. On
                learning about the variety of coffee beans, the client was
                willing to cater, we knew we had signed up for a herculean task.
                Backed with the best of best tech professionals we completed the
                project in the given time frame.{" "}
              </p>
              <h3 class="mil-mb-30">Challenges</h3>

              <div class="row">
                <div class="col-xl-6">
                  <ul class="mil-check-icon-list mil-mb-15">
                    <li>
                    <img src="/assets/icon/sm/1.svg" alt="icon" />
                      <span class="mil-dark">
                        Integrating Stripe's Payments API{" "}
                      </span>
                    </li>
                    <li>
                    <img src="/assets/icon/sm/1.svg" alt="icon" />
                      <span class="mil-dark">
                        Managing Product and Lot Relations{" "}
                      </span>
                    </li>
                    <li>
                    <img src="/assets/icon/sm/1.svg" alt="icon" />
                      <span class="mil-dark">
                        Implementing Chat Functionality  
                      </span>
                    </li>
                  </ul>
                </div>
                <div class="col-xl-6 mil-mb-30">
                  <ul class="mil-check-icon-list">
                    <li>
                    <img src="/assets/icon/sm/1.svg" alt="icon" />
                      <span class="mil-dark">User Login Functionality </span>
                    </li>
                    <li>
                    <img src="/assets/icon/sm/1.svg" alt="icon" />
                      <span class="mil-dark">Admin Portal Creation </span>
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
                  <img src="/assets/icon/sm/3.svg" alt="icon" />
                </div>
                <p class="mil-dark">Stripe API Integration</p>
              </div>
              <div class="mil-icon-box-head mil-long mil-mb-15">
                <div class="mil-icon-frame mil-icon-frame-sm">
                  <img src="/assets/icon/sm/2.svg" alt="icon" />
                </div>
                <p class="mil-dark">
                  Establish a calculation system to determine product quantity
                  based on lot quantities, typically using SKU numbers.{" "}
                </p>
              </div>
              <div class="mil-icon-box-head mil-long mil-mb-15">
                <div class="mil-icon-frame mil-icon-frame-sm">
                  <img src="/assets/icon/sm/5.svg" alt="icon" />
                </div>
                <p class="mil-dark">
                  Develop a messaging component integrated into the farmer
                  details page.{" "}
                </p>
              </div>
              <div class="mil-icon-box-head mil-long mil-mb-15">
                <div class="mil-icon-frame mil-icon-frame-sm">
                  <img src="/assets/icon/sm/6.svg" alt="icon" />
                </div>
                <p class="mil-dark">
                  Implement a secure user login and registration system.{" "}
                </p>
              </div>
              <div class="mil-icon-box-head mil-long mil-mb-15">
                <div class="mil-icon-frame mil-icon-frame-sm">
                  <img src="/assets/icon/sm/6.svg" alt="icon" />
                </div>
                <p class="mil-dark">Admin Portal Development </p>
              </div>
            </div>
            <div class="col-xl-6 mil-mb-60">
              <div class="mil-project-cover">
                <img
                  src="/assets/partner/1.png"
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

              <p>
              We designed and developed a comprehensive platform, delving deep into the intricacies of each segment, while maintaining a user-friendly interface. Our developers diligently ensured that no piece of detail was left unnoticed. From creating a room for every variety of coffee to implementing precise calculation systems, we worked through every aspect of the experience.    
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- conclusion end --> */}

      {/* <div className="row justify-content-around align-items-center">
        <div className="col-xl-7  mil-mb-60">
          <div className="mil-project-cover">
            <img src="assets/img/1.png" alt="Project" />
          </div>
        </div>
        <div className="col-xl-7  mil-mb-60">
          <div className="mil-project-cover">
            <img src="assets/img/2.png" alt="Project" />
          </div>
        </div>
        <div className="col-xl-7  mil-mb-60">
          <div className="mil-project-cover">
            <img src="assets/img/3.png" alt="Project" />
          </div>
        </div>
        <div className="col-xl-7  mil-mb-60">
          <div className="mil-project-cover ">
            <img src="assets/img/4.png" alt="Project" />
          </div>
        </div>
        <div className="col-xl-7  mil-mb-60">
          <div className="mil-project-cover ">
            <img src="assets/img/5.png" alt="Project" />
          </div>
        </div>
        <div className="col-xl-7  mil-mb-60">
          <div className="mil-project-cover ">
            <img src="assets/img/6.png" alt="Project" />
          </div>
        </div>
        <div className="col-xl-7  mil-mb-60">
          <div className="mil-project-cover ">
            <img src="assets/img/7.png" alt="Project" />
          </div>
        </div>
        <div className="col-xl-7  mil-mb-60">
          <div className="mil-project-cover ">
            <img src="assets/img/8.png" alt="Project" />
          </div>
        </div>
        <div className="col-xl-7  mil-mb-60">
          <div className="mil-project-cover ">
            <img src="assets/img/9.png" alt="Project" />
          </div>
        </div>
        <div className="col-xl-7  mil-mb-60">
          <div className="mil-project-cover ">
            <img src="assets/img/10.png" alt="Project" />
          </div>
        </div>
        <div className="col-xl-7  mil-mb-60">
          <div className="mil-project-cover ">
            <img src="assets/img/11.png" alt="Project" />
          </div>
        </div>
        <div className="col-xl-7  mil-mb-60">
          <div className="mil-project-cover ">
            <img src="assets/img/12.png" alt="Project" />
          </div>
        </div>
        <div className="col-xl-7  mil-mb-60">
          <div className="mil-project-cover ">
            <img src="assets/img/13.png" alt="Project" />
          </div>
        </div>
      </div>




      <div class="container">
        <div class="mil-divider mil-mb-60"></div>
      </div> */}

      <Testimonial/>

      <Footer />
    </div>
  );
};

export default Nexum;
