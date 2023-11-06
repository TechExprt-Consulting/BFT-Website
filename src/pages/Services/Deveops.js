import React from "react";
import "./Service.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Deveops = () => {
  return (
    <div className="mil-wrapper">
      <Navbar/>

      {/* <!-- banner --> */}
      
<div className="mil-banner-sm bg-white shadow shadow-bottom shadow-md">
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
          <Link to="/Salesforce">Devops</Link>
        </li>
      </ul>
      <div className="d-flex flex-column-reverse flex-md-row">
        <div className="d-flex flex-column ">
          <h2 className="mil-uppercase mt-2" style={{ color: "#1B2F5B" }}>
          DevOps Consulting
          </h2>

          <p className="conten">
          Are you ready to supercharge your business operations and
                  boost your development processes? Look no further than our
                  top-tier DevOps consulting services. At BytesFarms, we
                  understand the critical role that DevOps plays in modern
                  software development and IT management. Our expert team is
                  dedicated to helping you achieve operational excellence
                  through tailored DevOps solutions.
          </p>

          <div className="mil-quote-button ">
            <button className="mil-vertical-button text-dark ">
             <Link to='/contact'> Get a Free Quote!</Link>
            </button>
          </div>
        </div>
        <img
          src="assets/mockup/devops.png"
          alt="mus"
          className="col-md-4 mockup"
        />
      </div>
    </div>
  </div>
</div>
      {/* <!-- banner end --> */}

      

      {/* <div className="container">
        <div className="mil-divider"></div>
      </div> */}

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
                Our Devops Consulting Services Let You Win Big
              </h2>
              <p className="mil-dark">
                DevOps practices combine development and IT operations,
                emphasizing collaboration and automation, leading to faster
                software development, continuous integration, and delivery.
              </p>
            </div>
          </div>
          <div className="row mil-mb-30-adapt">
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <div className="mil-number-icon mil-circle mil-mb-30">
                  <span>01</span>
                </div>
                <h4 className="mil-mb-15">ACCELERATE DELIVERY</h4>
                <p className="conten">
                  Get your software and updates to market faster, ensuring that
                  you're always one step ahead of your competitors.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <div className="mil-number-icon mil-lines mil-mb-30">
                  <span>02</span>
                </div>
                <h4 className="mil-mb-15">ENHANCE COLLABORATION</h4>
                <p className="conten">
                  Break down silos between development and IT teams, promoting
                  seamless communication and collaboration.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <div className="mil-number-icon mil-mb-30">
                  <span>03</span>
                </div>
                <h4 className="mil-mb-15">IMPROVE QUALITY</h4>
                <p className="conten">
                  Deliver higher-quality software with fewer defects, leading to
                  greater customer satisfaction.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <div className="mil-number-icon mil-mb-30">
                  <span>04</span>
                </div>
                <h4 className="mil-mb-15">INCREASE SCALABILITY</h4>
                <p className="conten">
                  Scale your infrastructure as needed, whether you're handling a
                  sudden surge in traffic or planning for long-term growth.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <div className="mil-number-icon mil-circle mil-mb-30">
                  <span>05</span>
                </div>
                <h4 className="mil-mb-15">NHANCE SECURITY</h4>
                <p className="conten">
                  Bolster your defenses with robust security practices
                  integrated throughout the development lifecycle.
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
            Our Approach To <span className="mil-accent">Devops</span>{" "}
            Consulting
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
                    <span className="mil-accent">01</span>Expertise
                  </h5>
                  <p className="conten">
                    Our team of skilled developers brings a wealth of experience
                    and knowledge to the table. We stay updated with the latest
                    industry trends and technologies to deliver cutting-edge
                    solutions.
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
                    <span className="mil-accent">02</span> Client-Centric
                    Approach
                  </h5>
                  <p className="conten">
                    Your satisfaction is our priority. We work closely with you,
                    keeping you involved at every stage of development to ensure
                    that the final product exceeds your expectations.
                  </p>
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
                    <span className="mil-accent">03</span> Guarantee Of Quality
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
                    <img src="assets/icon/4.svg" alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">04</span> Timely Delivery
                  </h5>
                  <p className="conten">
                    We value your time as much as you do. Our streamlined
                    development process ensures that your website is delivered
                    within the agreed-upon timeframe.
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-md-6 col-xl-6">
                <Link to="/Contact" className="mil-button mil-border mil-mb-30">
                  <span>Talk To Our Devops Experts</span>
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
                src="assets/project/20.png"
                alt="partner"
                style={{ height: "100px" }}
              />
            </a>
            <a href="#.">
              <img src="assets/project/10.png" alt="partner" />
            </a>
          </div>
        </div>
      </div>
      {/* <!-- partners end --> */}
      {/* <!-- services --> */}
      <section className="bg-white mil-deco-right mil-p-120-0">
        <div
          className="mil-deco mil-deco-accent"
          style={{ top: "0", left: "5%" }}
        ></div>
        <div className="container">
          <div className="mil-text-center mil-mb-90">
            {/* <span className="mil-suptitle  mil-light mil-suptitle-2 mil-mb-30">
              Always The Best
            </span> */}
            <h2 className="mil-ligh mil-mb-30">
              {" "}
              Why Choose our{" "}
              <span className="mil-accent">Devops Applications</span>{" "}
            </h2>
            <p className="mil-light-soft">
              With years of experience and a proven track record, BytesFarms is
              your trusted partner for DevOps consulting.
              <br /> Our dedicated team of experts is committed to delivering
              results that matter, helping you achieve efficiency, agility, and
              innovation in your organization.
            </p>
          </div>
          <div className="row mil-mb-30-adapt">
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-ligh">
                  <img src="assets/icon/sm/6.svg" alt="icon" />
                </div>
                <p className="mil-ligh">Experienced Team</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-ligh">
                  <img src="assets/icon/sm/6.svg" alt="icon" />
                </div>
                <p className="mil-ligh">Customized Solutions</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-ligh">
                  <img src="assets/icon/sm/6.svg" alt="icon" />
                </div>
                <p className="mil-ligh">Stay Ahead of the Curve</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-ligh">
                  <img src="assets/icon/sm/6.svg" alt="icon" />
                </div>
                <p className="mil-ligh">End-to-End Support</p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-ligh">
                  <img src="assets/icon/sm/6.svg" alt="icon" />
                </div>
                <p className="mil-ligh">Assessment and Strategy Design</p>
              </div>
            </div>
          </div>
          {/* <div className="mil-text-center">
            <Link
              to="/Contact"
              className="mil-button mil-border mil-ligh mil-mb-30"
            >
              <span>Talk To Our Devops Experts</span>
            </Link>
          </div> */}
        </div>
      </section>
      {/* <!-- services end --> */}

      <Footer />
    </div>
  );
};

export default Deveops;
