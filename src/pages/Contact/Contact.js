import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
// import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

const Contact = () => {
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (captchaValue) {
      console.log("Form submitted successfully!");
    } else {
      alert("Please complete the CAPTCHA.");
    }
  };
  return (
    <div className="mil-wrapper">
      <div className="mil-top-position mil-fixed ">
        <div className="mil-top-panel ">
          <div className="container">
            <Link
              to="/home"
              className="mil-logo"
              style={{ width: "250px", height: "90px" }}             ></Link>
            <div className="mil-navigation">
              <nav>
                <ul>
                  <li>
                    <Link to="/home">Home</Link>
                  </li>

                  <li className="mil-has-children">
                    <Link to="/">Enterprise</Link>
                    <ul>
                      <li>
                        <Link to="/about">About us</Link>
                      </li>
                      <li>
                        <Link to="/team"> Our Team</Link>
                      </li>
                      <li>
                        <Link to="/career">Careers</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/case">Case Studies</Link>
                  </li>

                  <li className="mil-has-children">
                    <Link to="/">Services</Link>
                    <ul>
                      <li>
                        <Link to="/salesforce">Salesforce Services</Link>
                      </li>
                      <li>
                        <Link to="/digital">Digital Marketing</Link>
                      </li>

                      <li>
                        <Link to="/blockChain">Blockchain Developement</Link>
                      </li>
                      <li>
                        <Link to="/cloud">Cloud Migration</Link>
                      </li>
                      <li>
                        <Link to="/deveops">Devops Consulting</Link>
                      </li>
                      <li>
                        <Link to="/mobileApp">Mobile App Developement</Link>
                      </li>
                      <li>
                        <Link to="/webApp">Web Developement</Link>
                      </li>
                    </ul>
                  </li>
                  {/* <li>
                    <Link to="/Faq">FAQ</Link>
                  </li> */}

                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
                <div className="mil-search-icon">
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20.5848 19.7029C20.3908 19.8999 20.1358 19.997 19.8808 19.997C19.6268 19.997 19.3718 19.8999 19.1778 19.7029L15.5118 16.2199C13.9778 17.2549 12.3798 17.997 9.92584 17.997C4.98484 17.997 0.964844 13.959 0.964844 8.99695C0.964844 4.34995 4.98484 0.199951 9.92584 0.199951C14.8668 0.199951 18.8858 4.34995 18.8858 8.99695C18.8858 11.118 18.1468 13.68 16.9188 14.608L20.5848 18.29C20.9738 18.681 20.9738 19.3129 20.5848 19.7029ZM9.92584 1.99695C6.82984 1.99695 2.95684 5.13695 2.95684 8.99695C2.95684 12.857 6.82984 15.998 9.92584 15.998C11.8398 15.998 13.5758 15.217 14.8368 13.957C14.8408 13.952 14.8418 13.945 14.8468 13.941C14.8518 13.936 14.8578 13.935 14.8628 13.93C16.1168 12.663 16.8948 10.92 16.8948 8.99695C16.8948 5.13695 13.7678 1.99695 9.92584 1.99695Z"
                    />
                  </svg>
                </div>
              </nav>
            </div>
            <div className="mil-menu-btn">
              <span></span>
            </div>
          </div>
        </div>
      </div>
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
                        placeholder="John"
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
                        placeholder="Jones"
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
                        placeholder="doe@mydomain.com"
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

                  {/* <div className="col-lg-12">
                    <div className="mil-attach-frame mil-dark mil-mb-30">
                      <i className="fas fa-paperclip"></i>
                      <label className="mil-custom-file-input">
                        <span>Attach your file</span>
                        <input
                          type="file"
                          name="userfile"
                          id="mil-file-input"
                          accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,
                                              text/plain, application/pdf, image/*"
                        />
                      </label>
                      <p className="mil-text-sm mil-light-soft">up to 20MB</p>
                    </div>
                  </div> */}
                  {/* <ReCAPTCHA
        sitekey="YOUR_RECAPTCHA_SITE_KEY"
        onChange={handleCaptchaChange}
      /> */}

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
