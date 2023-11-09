import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Managed = () => {
  return (
    <div className="mil-wrapper">
      <Navbar />

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
                <Link to="/Salesforce">Managed Service</Link>
              </li>
            </ul>
            <div className="d-flex flex-column-reverse flex-md-row">
              <div className="d-flex flex-column ">
                <h2 className="mil-uppercase mt-2" style={{ color: "#1B2F5B" }}>
                  Managed Services
                </h2>

                <p className="conten col-md-10">
                  Staying updated and well-versed with all aspects of new and
                  old industry tech can be troublesome for many organizations
                  and that is where we step in with our most preferred Managed
                  services. With our developer on board businesses can be rest
                  assured on the front of tech assistance and can more intensely
                  focus on their prime product or services. This delegation
                  helps businesses enhance their workflow and efficiency.
                </p>

                <div className="mil-quote-button ">
                  <button className="mil-vertical-button text-dark ">
                    <Link to="/contact"> Get a Free Quote!</Link>
                  </button>
                </div>
              </div>
              <img
                src="assets/mockup/managed.png"
                alt="mus"
                className="col-md-4 mockup"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- banner end --> */}

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
            What We <span className="mil-accent">Offer</span>{" "}
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
                  <h5 className="mil-mb-30 ">
                    <span className="mil-accent">01</span>
                    Software Development
                  </h5>
                  <p className="conten">
                    Our developers create custom software solutions to enhance
                    your business operations, from web applications to mobile
                    apps.
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
                    <span className="mil-accent">02</span>Application Support
                  </h5>
                  <p className="conten">
                    We provide ongoing support and maintenance for your existing
                    software, ensuring it remains up to date and performs
                    optimally.
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
                    <span className="mil-accent">03</span>Database Management
                  </h5>
                  <p className="conten">
                    We manage and maintain your databases, ensuring data
                    availability, reliability, and security.
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
                    <span className="mil-accent">04</span>System Integration
                  </h5>
                  <p className="conten">
                    We seamlessly integrate your IT systems, enabling efficient
                    data flow and collaboration across various platforms. 
                  </p>
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
                    <span className="mil-accent">05</span>
                    Cloud Services
                  </h5>
                  <p className="conten">
                    Our cloud experts help you migrate to the cloud and manage
                    your infrastructure most cost-effectively and securely.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="mil-service-item mil-without-lines mil-mb-60">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <img src="assets/icon/6.svg" alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">06</span>Consultation and
                    Strategy
                  </h5>
                  <p className="conten">
                    We offer expert consultation to help you develop a
                    comprehensive IT strategy aligned with your business goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- services end --> */}
      <section className="mil-services mil-p-120-90">
        {/* <div
        className="mil-deco"
        style={{ bottom: "0", right: "40%", transform: "rotate(180deg)" }}
      ></div> */}
        <div className="container">
          <h2 className="mil-mb-90">
            Why Choose Our IT Developer{" "}
            <span className="mil-accent">Managed Services</span>{" "}
          </h2>
          <div className="row mil-mb-30-adapt">
            <div className="col-lg-6 col-xl-6">
              <div className="mil-service-item mil-without-lines mil-mb-60">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <img src="assets/icon/5.svg" alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30 ">
                    <span className="mil-accent">01</span> Expertise
                  </h5>
                  <p className="conten">
                    Our team of IT developers has years of experience and a deep
                    understanding of various programming languages,
                    technologies, and platforms. We're here to make sure your IT
                    systems are not just operational but also optimized for your
                    specific business needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="mil-service-item mil-without-lines mil-mb-60">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <img src="assets/icon/6.svg" alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">02</span> Cost-Efficiency
                  </h5>
                  <p className="conten">
                    Outsourcing your IT developer-managed services to us can
                    significantly reduce operational costs. You don't need to
                    hire and train an in-house team, and you can scale our
                    services as your business grows.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="mil-service-item mil-without-lines mil-mb-60">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <img src="assets/icon/7.svg" alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">03</span>Proactive Maintenance
                  </h5>
                  <p className="conten">
                    We monitor your IT systems 24/7, addressing potential issues
                    before they become critical problems. Our proactive approach
                    ensures minimal downtime and disruption to your operations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="mil-service-item mil-without-lines mil-mb-60">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <img src="assets/icon/9.svg" alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">04</span>Security
                  </h5>
                  <p className="conten">
                    Data security is a top priority for us. We implement the
                    latest security protocols and measures to protect your
                    sensitive information and ensure compliance with industry
                    regulations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="mil-service-item mil-without-lines mil-mb-60">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <img src="assets/icon/10.svg" alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">05</span>Custom Solutions
                  </h5>
                  <p className="conten">
                    We provide IT developer-managed services tailored to your
                    unique needs, including software development, application
                    support, and system integration.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="mil-service-item mil-without-lines mil-mb-60">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <img src="assets/icon/11.svg" alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">06</span>Scalability
                  </h5>
                  <p className="conten">
                    Our services are flexible and scalable, allowing you to
                    quickly adapt to changing business demands, whether
                    expanding or streamlining your IT resources. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className=" mil-mb-30">
          <h4 className="conten ">
            When you choose <span className="mil-accent">BytesFarms Technologies</span>, you gain a dedicated
            partner committed to the success of your business. Let us handle
            your needs while you focus on growing your business and serving your
            customers.
          </h4>{" "}
        </div>
        <div className=" mil-mb-30">
          <h4 className="conten">
            

Contact us today to learn about our IT developer-managed services and how we can help you achieve your business goals.  
          </h4>{" "}
        </div>
      </div>
     
      <Footer />
    </div>
  );
};

export default Managed;
