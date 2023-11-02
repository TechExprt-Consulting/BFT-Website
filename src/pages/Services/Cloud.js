import React from "react";
import "./Service.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Cloud = () => {
  return (
    <div className="mil-wrapper">
     <Navbar/>
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
                  Are you ready to elevate your business operations to the next
                  level? Embracing the power of the cloud can be a
                  transformative journey, and our dedicated Cloud Migration
                  Services are here to guide you every step of the way. Whether
                  you're a small startup or a large enterprise, our expert team
                  is committed to delivering a seamless and efficient transition
                  to the cloud, unlocking unparalleled scalability, flexibility,
                  and cost savings for your organization.
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
        {/* <div
          className="mil-deco"
          style={{ bottom: "0", right: "40%", transform: "rotate(180deg)" }}
        ></div> */}
        <div className="container">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
            High Quality and Performance
          </span>
          <h2 className="mil-mb-90">
            Our Approach To <span className="mil-accent">Cloud</span> Migration
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
                  <p className="conten">
                    Our experienced architects create a detailed migration plan
                    that outlines each step of the process. This plan considers
                    factors like data security , application performance, and
                    compliance to ensure a successful migration.
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
                    <span className="mil-accent">02</span> Comprehensive
                    Assessment
                  </h5>
                  <p className="conten">
                    We start by gaining a deep understanding of your existing
                    infrastructure, applications, and business goals. This
                    assessment helps us tailor a migration strategy that aligns
                    perfectly with your needs.
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
                    <span className="mil-accent">03</span> Testing And
                    Validation
                  </h5>
                  <p className="conten">
                    Before the final transition, we rigorously test all migrated
                    systems and applications to identify and address any issues.
                    This guarantees a seamless experience for your end-users
                    once the migration is complete.
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
                    <span className="mil-accent">04</span> Go-Live And Support
                  </h5>
                  <p className="conten">
                    When everything is ready, we execute the migration with
                    precision. Our support doesn't stop there – we provide
                    post-migration assistance to ensure your operations continue
                    without a hitch.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-md-6 col-xl-6">
              <Link to="/Contact" className="mil-button mil-border mil-mb-30">
                <span>Talk To Our Cloud Migration Experts</span>
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
                src="assets/project/18.png"
                alt="partner"
                style={{ width: "130px" }}
              />
            </a>
            <a href="#.">
              <img src="assets/project/19.jpg" alt="partner" />
            </a>
            {/* <a href="#.">
              <img
                src="assets/project/3.png"
                alt="partner"
                style={{ height: "100px" }}
              />
            </a> */}
            <a href="#.">
              <img
                src="assets/project/5.png"
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
              <span className="mil-accent">Cloud Migration Applications</span>
            </h2>
            <p className="mil-light-soft">
              Migrating your systems and applications to the cloud might seem
              daunting, but with our proven approach,
              <br /> it becomes a smooth and painless experience. Here's how we
              make it happen
            </p>
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
              <span>Talk To Our Cloud Migration Experts</span>
            </Link>
          </div>
        </div>
      </section>
      {/* <!-- services end --> */}

      <Footer />
    </div>
  );
};

export default Cloud;
