import React from "react";
import "./Faq.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
const Faq = () => {
  return (
    <div className="mil-wrapper">
      <div className="mil-top-position mil-fixed ">
        <div className="mil-top-panel ">
          <div className="container">
            <Link
              to="/home"
              className="mil-logo"
              style={{ width: "200px", height: "80px" }}
            ></Link>
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
                <Link to="/Faq">FAQs</Link>
              </li>
            </ul>
            <h2 className="mil-uppercase">FAQS</h2>
          </div>
        </div>
      </div>
      {/* <!-- banner end --> */}

      {/* <!-- faq --> */}
      <section className="mil-faqs mil-p-0-120">
        <div
          className="mil-deco"
          style={{ bottom: "0", left: "10%", transform: "rotate(180deg)" }}
        ></div>
        <div className="container">
          <div className="mil-tabs">
            <input type="radio" name="tabs" id="tab1" checked="checked" />
            <label for="tab1">Information</label>
            <div className="mil-tab">
              <div className="row justify-content-between">
                <div className="col-lg-4">
                  <h3 className="mil-up-font mil-mb-30">
                    <span className="mil-accent">BytesFarms Connects</span> The
                    Entire Organization From End To End.
                  </h3>
                  <p className="mil-mb-60">
                    Let’s come together to work on building goal-oriented
                    solutions.
                  </p>
                </div>
                <div className="col-lg-7">
                  <div className="mil-accordion">
                    <h6>Information about BytesFarms Technology</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>

                  <div className="mil-accordion">
                    <h6>What are the benefits of using BytesFarms?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>

                  <div className="mil-accordion">
                    <h6>How much does BytesFarms cost?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>

                  <div className="mil-accordion">
                    <h6>Who owns the information created by staff?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>

                  <div className="mil-accordion">
                    <h6>How do I delete my account?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <input type="radio" name="tabs" id="tab2" />
            <label for="tab2">Pricing Plans</label>
            <div className="mil-tab">
              <div className="row justify-content-between">
                <div className="col-lg-4">
                  <p>
                    <span className="mil-accent">Find out more</span>
                  </p>
                  <h3 className="mil-up-font mil-mb-30">
                    Get The Answers to your questions
                  </h3>
                  <p className="mil-mb-60">
                    Let’s come together to work on building goal-oriented
                    solutions.
                  </p>
                </div>
                <div className="col-lg-7">
                  <div className="mil-accordion">
                    <h6>How much does BytesFarms cost?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>

                  <div className="mil-accordion">
                    <h6>What are the benefits of using BytesFarms?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>

                  <div className="mil-accordion">
                    <h6>Information about BytesFarms</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>

                  <div className="mil-accordion">
                    <h6>Lorem Ipsum, you need to be sure there</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>

                  <div className="mil-accordion">
                    <h6>How do I delete my account?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <input type="radio" name="tabs" id="tab3" />
            <label for="tab3">Data and Privacy</label>
            <div className="mil-tab">
              <div className="row justify-content-between">
                <div className="col-lg-4">
                  <p>
                    <span className="mil-accent">Find out more</span>
                  </p>
                  <h3 className="mil-up-font mil-mb-30">
                    Get The Answers to your questions
                  </h3>
                  <p className="mil-mb-60">
                    Let’s come together to work on building goal-oriented
                    solutions.
                  </p>
                </div>
                <div className="col-lg-7">
                  <div className="mil-accordion">
                    <h6>What are the benefits of using BytesFarms?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>

                  <div className="mil-accordion">
                    <h6>Who owns the information created by staff?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>

                  <div className="mil-accordion">
                    <h6>How much does BytesFarms cost?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>

                  <div className="mil-accordion">
                    <h6>How do I delete my account?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>

                  <div className="mil-accordion">
                    <h6>Information about BytesFarms</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <input type="radio" name="tabs" id="tab4" />
            <label for="tab4">Security</label>
            <div className="mil-tab">
              <div className="row justify-content-between">
                <div className="col-lg-4">
                  <p>
                    <span className="mil-accent">Find out more</span>
                  </p>
                  <h3 className="mil-up-font mil-mb-30">
                    Get The Answers to your questions
                  </h3>
                  <p className="mil-mb-60">
                    Let’s come together to work on building goal-oriented
                    solutions.
                  </p>
                </div>
                <div className="col-lg-7">
                  <div className="mil-accordion">
                    <h6>Information about BytesFarms</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>

                  <div className="mil-accordion">
                    <h6>What are the benefits of using BytesFarms?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>

                  <div className="mil-accordion">
                    <h6>How much does BytesFarms cost?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>

                  <div className="mil-accordion">
                    <h6>Who owns the information created by staff?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>

                  <div className="mil-accordion">
                    <h6>How do I delete my account?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- faq end --> */}

      {/* <!-- contact --> */}
      <section className="mil-contact mil-gradient-bg mil-p-120-0">
        <div
          className="mil-deco mil-deco-accent"
          style={{ top: "0", right: "10%" }}
        ></div>
        <div className="container">
          <h2 className="mil-light mil-mb-90">
            Contact <span className="mil-accent">Me</span>
          </h2>
          <form id="formFeedback" method="post" enctype="multipart/form-data">
            <div className="row">
              <div className="col-lg-6">
                <div className="mil-input-frame mil-mb-30">
                  <label>
                    <span className="mil-light">Name</span>
                    <span className="mil-accent">Required</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter Your Name Here"
                  />
                </div>
                <div className="mil-input-frame mil-mb-30">
                  <label>
                    <span className="mil-light">Email Adress</span>
                    <span className="mil-accent">Required</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    id="email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mil-input-frame mil-mb-60">
                  <label>
                    <span className="mil-light">Phone</span>
                    <span className="mil-light-soft">Optional</span>
                  </label>
                  <input type="tel" name="phone" placeholder="Your Phone" />
                </div>
                <div className="mil-attach-frame mil-mb-60">
                  <i className="fas fa-paperclip"></i>
                  <label className="mil-custom-file-input">
                    <span>Attach your file</span>
                    <input
                      type="file"
                      name="userfile"
                      accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,
                                    text/plain, application/pdf, image/*"
                      id="mil-file-input"
                    />
                  </label>
                  <p className="mil-text-sm mil-light-soft">up to 20MB</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mil-input-frame mil-mb-30">
                  <label>
                    <span className="mil-light">Your Message</span>
                    <span className="mil-accent">Required</span>
                  </label>
                  <textarea
                    placeholder="Your Message"
                    name="message"
                  ></textarea>
                </div>
                <p className="mil-text-sm mil-light-soft mil-mb-15">
                  We will process your personal information in accordance with
                  our Privacy Policy.
                </p>

                <div className="mil-checbox-frame mil-mb-60">
                  <input
                    className="mil-checkbox"
                    id="checkbox-1"
                    type="checkbox"
                    name="agree"
                    value="1"
                    required
                  />
                  <label for="checkbox-1" className="mil-text-sm mil-light">
                    I would like to be contacted with news and updates about
                    your{" "}
                    <Link to="" className="mil-accent">
                      events and services
                    </Link>
                  </label>
                </div>
              </div>
              <div className="col-12">
                <button
                  type="submit"
                  className="mil-button mil-accent-bg mil-fw"
                >
                  <span>Send Message Now</span>
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
      </section>
      {/* <!-- contact end -->*/}
      <Footer />
    </div>
  );
};

export default Faq;
