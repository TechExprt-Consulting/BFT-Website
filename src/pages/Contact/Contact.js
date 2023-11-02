import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  

  const handleSubmit = (event) => {
    event.preventDefault();
  };

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
                <Link to="/Contact">Contact Us</Link>
              </li>
            </ul>
            <h2 className="mil-uppercase">Let’s discuss your opportunity</h2>
          </div>
        </div>
      </div>
      {/* <!-- banner end --> */}

      {/* <!-- contact --> */}
      <section className="mil-contact mil-p-120-0">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-8 col-xl-8 mil-mb-120">
              <form
                id="formContact"
                method="post"
                enctype="multipart/form-data"
              >
                <h4 className="mil-mb-60">
                  <span className="mil-accent">01.</span> Tell Us About Yourself
                </h4>

                <div className="row">
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6 mil-dark">
                        <span>First Name</span>
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        required
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6">
                        <span>Last Name</span>
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        required
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6">
                        <span>Email Address</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="youremail@gmail.com"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6">
                        <span>Phone</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6 mil-dark">
                        <span>Company</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 mil-mb-30">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6 mil-dark">
                        <span>Role</span>
                      </label>
                      <input type="text" name="role" placeholder="Your role" />
                    </div>
                  </div>
                </div>

                <h4 className="mil-mb-60">
                  <span className="mil-accent">02.</span> What Can We Help You
                  With?
                </h4>

                <div className="row">
                  <div className="col-lg-6 mil-mb-30">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6 mil-dark">
                        <span>Project Category</span>
                      </label>
                      <input
                        type="text"
                        name="category"
                        placeholder="Product Design"
                      />
                    </div>
                  </div>
                </div>

                <h4 className="mil-mb-60">
                  <span className="mil-accent">03.</span> Tell Us About Your
                  Project
                </h4>

                <div className="row">
                  <div className="col-lg-12">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6">
                        <span>Project Description</span>
                      </label>
                      <textarea
                        placeholder="Your Message"
                        name="message"
                        className="mil-shortened"
                      ></textarea>
                    </div>
                  </div>

                  
                  <div className="col-lg-6 mil-mb-30">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6 mil-dark">
                        <span>Project Budget</span>
                      </label>
                      <input type="number" name="budget" placeholder="123" />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <button
                      type="submit"
                      className="mil-button mil-border mil-fw"
                    >
                      <span>Submit Now</span>
                    </button>
                  </div>
                </div>

                <div className="alert-success" style={{ display: "none" }}>
                  <h5>Thanks, your message is sent successfully.</h5>
                </div>
                <div className="alert-error" style={{ display: "none" }}>
                  <h5>Error! Message could not be sent.</h5>
                </div>
              </form>
            </div>
            <div className="col-lg-4 col-xl-3 mil-mb-120">
              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">Support Request</h5>
                <p className="mil-mb-20">
                  Our experts are ready to answer your questions.
                </p>
                <a
                  href="mailto:connect@bytesfarms.com"
                  className="mil-link mil-link-sm"
                >
                  <span>Support Now</span>
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>

              <div className="mil-divider mil-mb-60"></div>

              <div className="mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="assets/icon/8.svg" alt="icon" />
                </div>
                <h5 className="mil-list-title mil-mb-30">Need Help?</h5>
                <p>
                  For technical questions or billing questions, please contact
                  Customer Care.
                </p>
              </div>

              <div className="mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="assets/icon/9.svg" alt="icon" />
                </div>
                <h5 className="mil-list-title mil-mb-30">Needs More Info?</h5>
                <p>
                  For technical questions or billing questions, please contact
                  Customer Care.
                </p>
              </div>

              <div className="mil-divider mil-mb-60"></div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- contact end --> */}

      {/* <!-- map --> */}
      <div>
        <div className="mil-map-frame">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14718.182783990356!2d75.892227!3d22.7451213!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdce5c8a35a9%3A0xa14c8742df30e4ba!2sBytesFarms%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1697115056572!5m2!1sen!2sin"
            width="800px"
            height=""
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>{" "}
        </div>

        <div className="container"></div>
      </div>
      {/* <!-- map end --> */}
      <Footer />
    </div>
  );
};

export default Contact;
