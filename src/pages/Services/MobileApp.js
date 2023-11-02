import React from "react";
import "./Service.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MobileApp = () => {
  return (
    <div className="mil-wrapper">
      <Navbar/>

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
                <Link to="/MobileApp">Mobile App</Link>
              </li>
            </ul>
            <h2 className="mil-uppercase">Mobile App Developement</h2>
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
                <h6 className="conten">
                  Are you searching for a trusted app development company that
                  can turn your groundbreaking app idea into a reality? Look no
                  further! At BytesFarms, we are a dedicated team of experts
                  with a proven track record in delivering top-notch app
                  development services. We believe that successful app
                  development goes beyond just writing code. It's about
                  understanding your vision, your target audience, and the
                  problem your app aims to solve.
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

      {/* <!-- steps --> */}
      <section className="mil-p-120-90">
        <div
          className="mil-deco"
          style={{ bottom: "0", right: "35%", transform: "rotate(180deg)" }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-12 mil-mb-90">
              
              <h2 className="mil-mb-30">
                Our Mobile App Developement Services Let You Win Big
              </h2>
              <p className="mil-dark">
                Top-Tier App Development Company Offering Unparalleled App
                Development Services.
              </p>
            </div>
          </div>
          <div className="row mil-mb-30-adapt">
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <div className="mil-number-icon mil-circle mil-mb-30">
                  <span>01</span>
                </div>
                <h4 className="mil-mb-15">EXPERTISE IN DIVERSE PLATFORMS</h4>
                <p className="conten">
                  Our seasoned app developers are proficient in a wide range of
                  platforms, including iOS, Android, and cross-platform
                  development. Whether you need a sleek iOS app or a versatile
                  Android solution, we have you covered.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <div className="mil-number-icon mil-lines mil-mb-30">
                  <span>02</span>
                </div>
                <h4 className="mil-mb-15">CUSTOM SOLUTIONS</h4>
                <p className="conten">
                  We understand that every business is unique. That's why we
                  tailor our app development services to match your specific
                  requirements. From design to functionality, your app will be a
                  one-of-a-kind masterpiece
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <div className="mil-number-icon mil-mb-30">
                  <span>03</span>
                </div>
                <h4 className="mil-mb-15">USER-CENTRIC DESIGN</h4>
                <p className="conten">
                  User experience is at the heart of what we do. Our designers
                  create intuitive, user-friendly interfaces that keep your
                  audience engaged and coming back for more.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <div className="mil-number-icon mil-mb-30">
                  <span>04</span>
                </div>
                <h4 className="mil-mb-15">SEAMLESS INTEGRATION</h4>
                <p className="conten">
                  Our app development services ensure seamless integration with
                  existing systems, providing a hassle-free experience for both
                  you and your users.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <div className="mil-number-icon mil-circle mil-mb-30">
                  <span>05</span>
                </div>
                <h4 className="mil-mb-15">RIGOROUS TESTING</h4>
                <p className="conten">
                  Quality assurance is paramount. We subject every app to
                  rigorous testing procedures to ensure it performs flawlessly
                  on all devices and platforms.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <div className="mil-number-icon mil-circle mil-mb-30">
                  <span>06</span>
                </div>
                <h4 className="mil-mb-15">TIMELY DELIVERY</h4>
                <p className="conten">
                  We understand the importance of meeting deadlines. Our team
                  works diligently to deliver your app on time and within
                  budget.
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6 col-xl-6">
              <Link to="/Contact" className="mil-button mil-border mil-mb-30">
                <span>Tell us about your project</span>
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
      {/* <!-- steps end --> */}

      <div className="container">
        <div className="mil-divider"></div>
      </div>

      <div className="container">
        <div className="mil-divider"></div>
      </div>

      {/* <!-- services --> */}
      <section className="mil-services mil-p-120-90">
        {/* <div
          className="mil-deco"
          style={{ bottom: "0", right: "40%", transform: "rotate(180deg)" }}
        ></div> */}
        <div className="container">
          
          <h2 className="mil-mb-90">
            Our Approach To <span className="mil-accent">Mobile App</span>{" "}
            Developement
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
                    <span className="mil-accent">01</span>Guarantee Of Quality
                  </h5>
                  <p className="conten">
                    Our commitment to unwavering quality ensures a steadfast
                    100% surety in all our undertakings.
                  </p>
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
                    <span className="mil-accent">02</span>24/7 Of Support
                  </h5>
                  <p className="conten">
                    Uninterrupted help available 24/7, ensuring your queries are
                    always attended to.
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-md-6 col-xl-6">
                <Link to="/Contact" className="mil-button mil-border mil-mb-30">
                  <span>Talk To Our Mobile App Experts</span>
                </Link>
              </div>
              <div className="col-md-6 col-xl-6">
                <div className="mil-adaptive-right">
                  {/* <Link to="" className="mil-link mil-mb-30"><span>See More</span><i className="fas fa-arrow-right"></i></Link> */}
                </div>
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
                src="assets/project/1.png"
                alt="partner"
                style={{ width: "130px" }}
              />
            </a>
            <a href="#.">
              <img src="assets/project/2.png" alt="partner" />
            </a>
            <a href="#.">
              <img
                src="assets/project/3.png"
                alt="partner"
                style={{ height: "100px" }}
              />
            </a>
            <a href="#.">
              <img src="assets/project/15.png" alt="partner" />
            </a>
            <a href="#.">
              <img
                src="assets/project/13.png"
                alt="partner"
                style={{ width: "80px" }}
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
              <span className="mil-accent">Mobile Applications</span>{" "}
            </h2>
            <p className="mil-light-soft">
              Mobile app development refers to the process of creating software
              applications that run on mobile devices, catering to diverse
              platforms like iOS and Android, facilitating seamless user
              experiences and access to services on the go.
            </p>
          </div>
          <div className="row mil-mb-30-adapt">
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="assets/icon/sm/6.svg" alt="icon" />
                </div>
                <p className="mil-light">Consultation</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="assets/icon/sm/2.svg" alt="icon" />
                </div>
                <p className="mil-light">Design</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="assets/icon/sm/7.svg" alt="icon" />
                </div>
                <p className="mil-light">Development</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="assets/icon/sm/3.svg" alt="icon" />
                </div>
                <p className="mil-light">Testing</p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="assets/icon/sm/1.svg" alt="icon" />
                </div>
                <p className="mil-light">Launch</p>
              </div>
            </div>
          </div>
          <div className="mil-text-center">
            <Link
              to="/Contact"
              className="mil-button mil-border mil-light mil-mb-30"
            >
              <span>Talk To Our Mobile App Experts</span>
            </Link>
          </div>
        </div>
      </section>
      {/* <!-- services end --> */}

      <Footer />
    </div>
  );
};

export default MobileApp;
