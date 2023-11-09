import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
// import "./About.css";

const About = () => {
  return (
    <div className="mil-wrapper">
      <div className="mil-top-position mil-fixed ">
        <div className="mil-top-panel ">
          <div className="container">
            <Link
              to="/home"
              className="mil-logo"
              style={{ width: "250px", height: "90px" }}            ></Link>
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
                <Link to="/About">About us</Link>
              </li>
            </ul>
            <h2 className="mil-uppercase">Enterprise</h2>
          </div>
        </div>
      </div>
      {/* <!-- banner end --> */}

      {/* <!-- call to action --> */}
      <section className="mil-p-120-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-xl-6">
              <h4 className="mil-mb-60">
                <span className="mil-accent">Bytesfarms Technologies</span> a
                leading IT services firm, offers 20+ years of expertise. We
                optimize operations, enhance customer engagement, and drive
                growth with Salesforce, Web/Mobile dev, Cloud & DevOps, and
                Blockchain solutions.{" "}
              </h4>
            </div>
            <div className="col-lg-12 col-xl-6">
              <div className="mil-adaptive-right">
                <Link
                  to="/Contact"
                  className="mil-button mil-border mil-mr-15 mil-mb-30"
                >
                  <span>Talk To an Expert</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- call to action end --> */}

      {/* <!-- about --> */}
      <section className="mil-deep-bg mil-p-120-60">
        <div className="mil-deco" style={{ top: "0", left: "35%" }}></div>
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 mil-mb-60">
              <div className="mil-circle-illustration">
                <div className="mil-circle-bg"></div>
                <div className="mil-image-frame">
                  <img src="assets/faces/t3.jpg" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Firm Overview
              </span>
              <h2 className="mil-mb-50">
                We are leaders <br />
                in <span className="mil-accent">IT Solutions</span>{" "}
              </h2>

              <p className="mil-mb-50">
                At BytesFarms Technologies, we go beyond being just an IT
                services firm. We are your partners in innovation and
                transformation. Leveraging over two decades of industry
                experience, we have positioned ourselves as leaders in
                delivering cutting-edge solutions that empower businesses to
                thrive in the digital age.
              </p>

              <div className="row align-items-end">
                <div className="col-xl-7">
                  <ul className="mil-check-icon-list mil-mb-60">
                    <li>
                      <img src="assets/icon/sm/12.svg" alt="icon" />
                      <span className="mil-dark">Salesforce Solutions</span>
                    </li>
                    <li>
                      <img src="assets/icon/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                        Web and Mobile Development
                      </span>
                    </li>
                    <li>
                      <img src="assets/icon/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                        Cloud and DevOps Strategies
                      </span>
                    </li>
                    <li>
                      <img src="assets/icon/sm/12.svg" alt="icon" />
                      <span className="mil-dark">Blockchain Solutions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- about end --> */}

      {/* <!-- counters --> */}
      <section className="mil-p-120-60">
        <div className="mil-deco" style={{ top: "0", left: "25%" }}></div>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="mil-h1">
                14<span className="mil-accent">+</span>
              </div>
              <h6 className="mil-mb-60">Years Experience</h6>

              <h2 className="mil-mb-60">
                We Run All Kinds of IT Services That Vow Your Success
              </h2>
            </div>
            <div className="col-lg-6">
              <h3 className="mil-mb-60">
                Accelerate <span className="mil-accent">Innovation</span> with
                world className tech teams .Empowering{" "}
                <span className="mil-accent">
                  Buisness Growth and Technology
                </span>
              </h3>

              <div className="row">
                <div className="col-lg-6">
                  <h6 className="mil-mb-30">
                    <span className="mil-accent">334+</span>&nbsp; Finalized
                    Project
                  </h6>

                  <div className="mil-divider mil-divider-left mil-mb-60"></div>
                </div>
                <div className="col-lg-6">
                  <h6 className="mil-mb-30">
                    <span className="mil-accent">27+</span>&nbsp; Awards Winner
                  </h6>

                  <div className="mil-divider mil-divider-left mil-mb-60"></div>
                </div>
                <div className="col-lg-6">
                  <h6 className="mil-mb-30">
                    <span className="mil-accent">225+</span>&nbsp; Our Customers
                  </h6>

                  <div className="mil-divider mil-divider-left mil-mb-60"></div>
                </div>
                <div className="col-lg-6">
                  <h6 className="mil-mb-30">
                    <span className="mil-accent">14+</span>&nbsp; Years of
                    Experience
                  </h6>

                  <div className="mil-divider mil-divider-left mil-mb-60"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- counters end --> */}

      <div className="container">
        <div className="mil-divider"></div>
      </div>

      {/* <!-- about --> */}
      <section className="mil-deep-bg mil-p-120-60">
        <div className="mil-deco" style={{ top: "0", right: "15%" }}></div>
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 mil-mb-60">
              <div className="mil-circle-illustration">
                <div className="mil-circle-bg"></div>
                <div className="mil-image-frame">
                  <img src="assets/faces/t2.jpg" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mil-mb-60">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                IT Enterprise
              </span>
              <h2 className="mil-mb-50">Our Mission</h2>

              <p className="mil-mb-50">
                Our journey commenced with a vision to harness the power of
                technology to revolutionize business operations and customer
                connections. Through the years, we have refined our expertise
                and established a robust foundation across various domains,
                enabling us to offer a comprehensive suite of services
                addressing your unique technological requirements.
              </p>

              <ul className="mil-simple-list">
                <li>Accelerate innovation.</li>
                <li>With world className tech teams.</li>
                <li>Our all service offerings to enhance.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- about end --> */}

      {/* <!-- features --> */}
      <section className="mil-p-120-120">
        <div className="container">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
            Discover Our Company
          </span>
          <h2 className="mil-mb-120">Why Work With Us</h2>

          <div className="mil-divider"></div>
          <div className="mil-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="assets/icon/6.svg" alt="icon" />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">Top Expertise</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                  At Bytesfarms Technologies, we pride ourselves on our
                  top-notch expertise in the ever-evolving landscape of IT
                  solutions. Our team comprises skilled professionals with years
                  of experience and a deep understanding of cutting-edge
                  technologies. We stay ahead of the curve, constantly updating
                  our skills to provide you with innovative and tailored IT
                  services. With our top expertise, we deliver solutions that
                  not only meet but exceed your expectations, ensuring your
                  business stays competitive in the digital realm.
                </p>
              </div>
            </div>
          </div>
          <div className="mil-divider"></div>
          <div className="mil-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="assets/icon/10.svg" alt="icon" />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">Quality Management</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                  Quality is at the core of everything we do at Bytesfarms
                  Technologies. Our rigorous quality management processes are
                  designed to guarantee the highest standards in every project
                  we undertake. We adhere to industry best practices and employ
                  robust quality assurance measures to identify and resolve
                  potential issues before they impact your business.
                </p>
              </div>
            </div>
          </div>
          <div className="mil-divider"></div>
          <div className="mil-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="assets/icon/2.svg" alt="icon" />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">Utmost Flexibility</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                  We understand that every business is unique, and that's why we
                  offer utmost flexibility in our services. Whether you're a
                  startup, a mid-sized enterprise, or a large corporation, our
                  solutions are customizable to match your specific
                  requirements. We adapt to your changing needs, ensuring our IT
                  services align perfectly with your business goals.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="mil-divider"></div>
          <div className="mil-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="assets/icon/4.svg" alt="icon" />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">Agility</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                  In the fast-paced world of technology, agility is key. At
                  Bytesfarms Technologies, we embrace agility in both our
                  approach and solutions. We respond promptly to market
                  dynamics, enabling your business to seize new opportunities
                  and navigate challenges with ease. Our agile methodologies
                  empower us to deliver results quickly without compromising
                  quality
                </p>
              </div>
            </div>
          </div>
          <div className="mil-divider"></div>
          <div className="mil-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="assets/icon/5.svg" alt="icon" />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">Innovation</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                  As technology evolves, our commitment to staying at the
                  forefront of innovation remains unwavering. Our passion for
                  exploring new possibilities drives us to continuously expand
                  our skill set and stay ahead of industry trends. We serve as
                  your digital transformation allies, guiding you through every
                  step of your technological journey.
                </p>
              </div>
            </div>
          </div>
          <div className="mil-divider"></div>
        </div>
      </section>
      <div className="mil-divider"></div>

      {/* <!-- features end --> */}

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
      <Footer />
    </div>
  );
};

export default About;
