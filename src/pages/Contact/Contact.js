import React, { useRef } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
const Contact = () => {
  const [verified, setVerified] = useState(false);
  const form = useRef();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    category: "",
    message: "",
    budget: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    if (!verified) {
      alert("Please complete the reCAPTCHA before submitting.");
      return;
    }
    emailjs
      .sendForm(
        "service_zocqpui",
        "template_g13uw2j",
        form.current,
        "20UFju62he0ixUwo6"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");

          setFormData({
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            company: "",
            role: "",
            category: "",
            message: "",
            budget: "",
          });
          setVerified(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true);
  }
 function handleSubmit(){
  setVerified(false);
 }
  return (
    <div className="mil-wrapper">
      <Navbar />
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
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">Contact Us</Link>
              </li>
            </ul>
            <h2 className="mil-uppercase"> Let's discuss your opportunity</h2>
          </div>
          <div className="mil-fixed-button-container">
            <button className="mil-vertical-button text-dark ">
              Get a Free Quote!
            </button>
          </div>
        </div>
      </div>

      {/* <!-- banner end --> */}

      {/* <!-- contact --> */}
      <section className="mil-contact mil-p-120-0">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-8 col-xl-8 mil-mb-120">
              <form ref={form} onSubmit={sendEmail}>
                <h3 className="mil-mb-60 mil-uppercase">Contact Us</h3>
                <h4 className="mil-mb-60">
                  <span className="mil-accent">01.</span> Tell Us About Yourself
                </h4>

                <div className="row">
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      {/* <label className="mil-h6 mil-dark">
                        <span>First Name</span>
                      </label> */}
                      <input
                        type="text"
                        name="first_name"
                        required
                        value={formData.first_name}
                        onChange={handleChange}
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      {/* <label className="mil-h6">
                        <span>Last Name</span>
                      </label> */}
                      <input
                        type="text"
                        name="last_name"
                        required
                        value={formData.last_name}
                        onChange={handleChange}
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      {/* <label className="mil-h6">
                        <span>Email Address</span>
                      </label> */}
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="youremail@gmail.com"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      {/* <label className="mil-h6">
                        <span>Phone</span>
                      </label> */}
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      {/* <label className="mil-h6 mil-dark">
                        <span>Company</span>
                      </label> */}
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 mil-mb-30">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      {/* <label className="mil-h6 mil-dark">
                        <span>Role</span>
                      </label> */}
                      <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        placeholder="Your role"
                      />
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
                      {/* <label className="mil-h6 mil-dark">
                        <span>Project Category</span>
                      </label> */}
                      <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
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
                      {/* <label className="mil-h6">
                        <span>Project Description</span>
                      </label> */}
                      <textarea
                        type="text"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        name="message"
                        className="mil-shortened"
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-lg-12 mil-mb-30">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      {/* <label className="mil-h6 mil-dark">
                        <span>Project Budget</span>
                      </label> */}
                      <input
                        type="number"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        placeholder="Budget"
                      />
                    </div>
                  </div>
                  {/* <div className="border border-danger col-lg-4 p-0" > */}
                  <ReCAPTCHA
                    // sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    sitekey="6LfvBCgpAAAAANELCXHqfBHhfPB_YWUjZmP78A-K"
                    onChange={onChange}
                    
                  />
                  {/* </div> */}
                  <div className="col-lg-12">
                    <button
                      type="submit"
                      className="mil-button mil-border mil-fw mt-4"
                      disabled={!verified}
                      
                    >
                      Submit Now
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
                <h5 className="mil-list-title1 mil-mb-30">Support Request</h5>
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
                <h5 className="mil-list-title1 mil-mb-30">Need Help?</h5>
                <p>
                  For technical questions or billing questions, please contact
                  Customer Care.
                </p>
              </div>

              <div className="mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="assets/icon/9.svg" alt="icon" />
                </div>
                <h5 className="mil-list-title1 mil-mb-30">Needs More Info?</h5>
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
