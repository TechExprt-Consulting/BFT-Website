import React from "react";
import "./Home.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import $ from "jquery";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    // Scroll event listener
    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 220) {
        $(".mil-top-panel.mil-animated").removeClass(
          "mil-top-panel-transparent"
        );
        $(".has-additional-panel").addClass("mil-hide-top");
      } else {
        $(".mil-top-panel.mil-animated").addClass("mil-top-panel-transparent");
        $(".has-additional-panel").removeClass("mil-hide-top");
      }
    });

    return () => {
      $(window).off("scroll");
    };
  }, []);

  return (
    <div className="mil-wrapper">
      {/* top bar */}
      <Navbar />

      {/* <!-- banner --> */}
      <div class="mil-banner mil-top-space-0">
        <div class="swiper-container mil-banner-slideshow">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img
                src="assets/photo/1.jpg"
                class="mil-background-image"
                style={{ objectPosition: "center" }}
                data-swiper-parallax="-100"
                data-swiper-parallax-scale="1.1"
                alt="image1"
              />
            </div>
            <div class="swiper-slide">
              <img
                src="assets/photo/2.jpg"
                class="mil-background-image"
                style={{ objectPosition: "center" }}
                data-swiper-parallax="-100"
                data-swiper-parallax-scale="1.1"
                alt="image1"
              />
            </div>
            <div class="swiper-slide">
              <img
                src="assets/photo/3.jpg"
                class="mil-background-image"
                style={{ objectPosition: "center" }}
                data-swiper-parallax="-100"
                data-swiper-parallax-scale="1.1"
                alt="image1"
              />
            </div>
          </div>
        </div>
        <div class="mil-overlay"></div>

        <div class="mil-banner-content">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-xl-8">
                <span class="mil-suptitle mil-mb-60">
                  <span class="mil-light">The Next</span>{" "}
                  <span class="mil-accent">Gen</span>
                </span>
                <h1 class="mil-mb-60">
                  <span class="mil-uppercase mil-light">
                    We Provide Services <br />
                    and Solutions
                  </span>{" "}
                  <span class="mil-font-3 mil-accent">To Enterprise</span>
                </h1>
                <div class="mil-flex-hori-center">
                  <div>
                    <Link to="/Contact" class="mil-button mil-border mil-light">
                      <span>Let’s Talk</span>
                    </Link>
                  </div>
                  <p class="mil-button-descr mil-light-soft">
                    BytesFarms Technologies, a leading Software Development
                    Company, offers 20+ years of expertise. We optimize
                    operations, enhance customer engagement, and drive growth
                    with Software Development, Salesforce, Web/Mobile dev, Cloud
                    & DevOps, and Blockchain solutions.
                  </p>
                </div>
              </div>
              <div class="col-xl-4">
                <div class="mil-illustration-1">
                  <div class="mil-item mil-item-1">
                    <div class="mil-plus">
                      <div class="mil-hover-window">
                        <div class="mil-window-content">
                          <h5 class="mil-dark mil-mb-15">Experts</h5>
                          <div class="mil-divider mil-divider-left mil-mb-15"></div>
                          <p class="mil-text-sm">
                            And here's some amazing content. It's very engaging.
                            Right?
                          </p>
                        </div>
                      </div>
                      <div class="mil-item-hover">
                        <div class="mil-plus-icon">+</div>
                        <h6 class="mil-light">Dedicated Team</h6>
                      </div>
                    </div>
                  </div>
                  <div class="mil-item mil-item-2">
                    <div class="mil-plus">
                      <div class="mil-hover-window">
                        <div class="mil-window-content">
                          <h5 class="mil-dark mil-mb-15">Experts</h5>
                          <div class="mil-divider mil-divider-left mil-mb-15"></div>
                          <p class="mil-text-sm">
                            And here's some amazing content. It's very engaging.
                            Right?
                          </p>
                        </div>
                      </div>
                      <div class="mil-item-hover">
                        <div class="mil-plus-icon">+</div>
                        <h6 class="mil-light">Developers</h6>
                      </div>
                    </div>
                  </div>
                  <div class="mil-item mil-item-3">
                    <div class="mil-plus">
                      <div class="mil-hover-window">
                        <div class="mil-window-content">
                          <h5 class="mil-dark mil-mb-15">Experts</h5>
                          <div class="mil-divider mil-divider-left mil-mb-15"></div>
                          <p class="mil-text-sm">
                            And here's some amazing content. It's very engaging.
                            Right?
                          </p>
                        </div>
                      </div>
                      <div class="mil-item-hover">
                        <div class="mil-plus-icon">+</div>
                        <h6 class="mil-light">Designers</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* partners start*/}

      <div className=" mil-p-90-60">
        <div className="container">
          <div className="mil-partners-frame">
            <Link to="">
              <img
                src="assets/partner/4.png"
                alt="partner"
                style={{ height: "90px" }}
              />
            </Link>
            <Link to="/dmc">
              <img
                src="assets/partner/5.png"
                alt="partner"
                style={{ height: "75px" }}
              />
            </Link>
            <Link to="/cargosprint">
              <img
                src="assets/partner/3.png"
                alt="partner"
                style={{ width: "165px" }}
              />
            </Link>
            <Link to="/nexum">
              <img
                src="assets/partner/1.png"
                alt="partner"
                style={{ width: "165px" }}
              />
            </Link>
            <Link to="/continuum">
              <img
                src="assets/partner/2.png"
                alt="partner"
                style={{ width: "165px" }}
              />
            </Link>
            <Link to="/abuDhabi">
              <img
                src="assets/partner/6.png"
                alt="partner"
                style={{ height: "75px" }}
              />
            </Link>
            <Link to="">
              <img
                src="assets/partner/7.png"
                alt="partner"
                style={{ height: "80px" }}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* partners end */}

      <div className="container">
        <div className="mil-divider"></div>
      </div>

      {/* <!-- services --> */}
      <section className="mil-services mil-p-120-90">
        <div className="mil-deco" style={{ top: "0", right: "20%" }}></div>
        <div className="container">
          <h2 className="mil-mb-30">
            How We Can <span className="mil-accent">Help You</span>
          </h2>
          <div className="row">
            <div className="col-lg-6 col-xl-6">
              <h4 className="mil-mb-60 mil-mt-30">IT Services</h4>
              <div className="mil-divider mil-divider-left"></div>
              <div className="mil-service-item">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <img src="assets/icon/1.svg" alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">01</span> Salesforce
                    Developement
                  </h5>
                  <p>
                    Salesforce is a leading customer relationship management
                    (CRM) platform that helps businesses manage their sales,
                    customer service, and marketing needs efficiently.
                  </p>
                </div>
              </div>
              <div className="mil-divider mil-divider-left"></div>
              <div className="mil-service-item">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <img src="assets/icon/16.svg" alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">02</span> Deveops
                  </h5>
                  <p>
                    DevOps practices combine development and IT operations,
                    emphasizing collaboration and automation, leading to faster
                    software development, continuous integration, and delivery.
                  </p>
                </div>
              </div>
              <div className="mil-divider mil-divider-left"></div>
              <div className="mil-service-item">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <img src="assets/icon/15.svg" alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">03</span> Cloud Migration
                  </h5>
                  <p>
                    Cloud Migration involves transferring data, applications,
                    and workloads from on-premises servers to cloud-based
                    infrastructure, offering scalability, flexibility, and cost
                    efficiency to businesses.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <h4 className="mil-mb-60 mil-mt-30">IT Solutions</h4>
              <div className="mil-divider mil-divider-left"></div>
              <div className="mil-service-item">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <img src="assets/icon/4.svg" alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">04</span> Blockchain Consulting
                  </h5>
                  <p>
                    Blockchain technology ensures secure, transparent, and
                    tamper-proof record-keeping, revolutionizing various
                    industries by enabling decentralized transactions and smart
                    contracts.
                  </p>
                </div>
              </div>
              <div className="mil-divider mil-divider-left"></div>
              <div className="mil-service-item">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <img src="assets/icon/24.svg" alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">05</span> Artificial
                    Intelligence
                  </h5>
                  <p>
                    Artificial Intelligence involves the simulation of human
                    intelligence in machines, enabling them to perform tasks
                    that typically require human intelligence, like speech
                    recognition, problem-solving, and learning.
                  </p>
                </div>
              </div>
              <div className="mil-divider mil-divider-left"></div>
              <div className="mil-service-item">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <img src="assets/icon/22.svg" alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">06</span> Mobile App
                    Developement
                  </h5>
                  <p>
                    Mobile app development refers to the process of creating
                    software applications that run on mobile devices, catering
                    to diverse platforms like iOS and Android, facilitating
                    seamless user experiences and access to services on the go.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="mil-divider"></div>
      </div>

      <section className="mil-p-120-120">
        <div className="container">
          <div class="col-md-6 col-xl-6">
            <h2 class="mil-mb-30 mb-3">Case Studies</h2>
          </div>
          <div
            className="row justify-content-around align-items-center"
            id="cargo"
          >
            <div className="col-xl-5 mil-mb-60">
              <div className="mil-project-cover">
                <Link to="/continuum">
                  <img src="assets/partner/2.png" alt="Project" />
                </Link>
                &nbsp;
              </div>
              <h3 className="mt-3">
                <span className="mil-accent">
                  <Link to="/continuum">Continumm</Link>
                </span>
              </h3>
              <p>Tech Stack: React, Java, Springboot</p>
            </div>

            <div className="col-xl-5 mil-mb-60">
              <div className="mil-project-cover">
                <Link to="/dmc">
                  {" "}
                  <img
                    src="assets/partner/5.png"
                    alt="Project"
                    style={{ width: "500px", height: "250px" }}
                  />
                </Link>
              </div>
              <h3 className="mt-3">
                <span className="mil-accent">
                  <Link to="/dmc">DMC</Link>
                </span>
              </h3>
              <p>Tech Stack: Salesforce, FSL,LWC, Apex</p>
            </div>
          </div>

          <div
            className="row justify-content-around align-items-center"
            id="cargo"
          >
            <div className="col-xl-5 mil-mb-60">
              <div className="mil-project-cover">
                <Link to="/cargosprint">
                  <img src="assets/partner/3.png" alt="Project" />
                </Link>
                &nbsp;
              </div>
              <h3 className="mt-3">
                <span className="mil-accent">
                  <Link to="/cargosprint">Cargo Sprint</Link>
                </span>
              </h3>
              <p>Tech Stack: Apex, Custom REST API, Finalcial Force, GCP</p>
            </div>
            <div className="col-xl-5 mil-mb-60">
              <div className="mil-project-cover">
                <Link to="/nexum">
                  <img src="assets/partner/1.png" alt="Project" />
                </Link>
              </div>
              <h3 className="mt-3">
                <span className="mil-accent">
                  <Link to="/nexum">Nexum</Link>
                </span>
              </h3>
              <p>Tech Stack: React JS, Node JS, MySQL,AWS</p>
            </div>
          </div>

          <div
            className="row justify-content-around align-items-center"
            id="cargo"
          >
            <div className="col-xl-5 mil-mb-60">
              <div className="mil-project-cover">
                <Link to="/abuDhabi">
                  <img src="assets/projects/10.jpg" alt="Project" />
                </Link>
              </div>
              <h3 className="mt-3">
                <span className="mil-accent">
                  <Link to="/abuDhabi">Abu Dhabi University</Link>
                </span>
              </h3>
              <p>Tech Stack:React JS, Node JS , BlockChain</p>
            </div>
          </div>

          <div className="mil-divider mil-mb-60"></div>
        </div>
      </section>

      {/* <!-- portfolio end --> */}

      <section className="mil-how-it-works mil-deep-bg mil-p-120-90">
        <div className="mil-deco" style={{ top: "0", right: "20%" }}></div>
        <div
          className="mil-deco"
          style={{ bottom: "0", left: "30%", transform: "rotate(180deg)" }}
        ></div>
        <div className="container">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
            Discover Our Company
          </span>
          <h2 className="mil-mb-90">
            How We <span className="mil-accent">Collaborate</span> With You
          </h2>
          <div className="row">
            <div className="col-md-6 col-xl-3">
              <div className="mil-mb-60">
                <div className="mil-icon-box-head mil-mb-30">
                  <div className="mil-icon-frame mil-icon-frame-sm">
                    <img src="assets/icon/sm/1.svg" alt="icon" />
                  </div>
                  <h5>Thinking Big</h5>
                </div>
                <p>
                  At BytesFarms Technologies, we believe in thinking big. We
                  envision grand solutions that have the power to transform
                  businesses.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="mil-mb-60">
                <div className="mil-icon-box-head mil-mb-30">
                  <div className="mil-icon-frame mil-icon-frame-sm">
                    <img src="assets/icon/sm/2.svg" alt="icon" />
                  </div>
                  <h5>Starting Small</h5>
                </div>
                <p>
                  We understand that every significant achievement begins with a
                  single step. That's why at BytesFarms Technologies, we
                  emphasize the importance of starting small.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="mil-mb-60">
                <div className="mil-icon-box-head mil-mb-30">
                  <div className="mil-icon-frame mil-icon-frame-sm">
                    <img src="assets/icon/sm/3.svg" alt="icon" />
                  </div>
                  <h5>Creating Fast</h5>
                </div>
                <p>
                  Our agile development methodologies, coupled with a talented
                  team of developers, enable us to bring your ideas to life
                  quickly and efficiently.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="mil-mb-60">
                <div className="mil-icon-box-head mil-mb-30">
                  <div className="mil-icon-frame mil-icon-frame-sm">
                    <img src="assets/icon/sm/4.svg" alt="icon" />
                  </div>
                  <h5>Innovating Scale</h5>
                </div>
                <p>
                  Innovation is at the heart of everything we do. We not only
                  innovate; we innovate at scale. Our forward-thinking approach
                  allows us to develop IT solutions that are not only
                  groundbreaking but also scalable.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6 col-xl-6"></div>
            <div className="col-md-6 col-xl-6">
              <div className="mil-adaptive-right">
                <Link to="/Blog" className="mil-button mil-border mil-mb-30">
                  <span>How We Work</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- how it works end --> */}

      {/* <!-- skills --> */}
      <section className="mil-skills mil-p-120-90">
        <div className="container">
          <div className="row align-items-end mil-mb-90">
            <div className="col-xl-6">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Our Skill
              </span>
              <h2>
                Business <span className="mil-accent">Success</span> With <br />
                Technology
              </h2>
            </div>
            <div className="col-xl-6">
              <p className="mil-mt-60-adapt">
                At BytesFarms Technologies, we go beyond being just an IT
                services firm. We are your partners in innovation and
                transformation. Leveraging over two decades of industry
                experience, we have positioned ourselves as leaders in
                delivering cutting-edge solutions that empower businesses to
                thrive in the digital age.
              </p>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-md-6 col-xl-3">
              <h6 className="mil-mb-30">Software Development</h6>

              <div className="mil-skill-frame mil-mb-60">
                <div className="mil-skill-track">
                  <div
                    className="mil-skill-prog"
                    style={{ width: "65%" }}
                  ></div>
                </div>
                <div className="mil-text-sm">65%</div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <h6 className="mil-mb-30">Web Development</h6>

              <div className="mil-skill-frame mil-mb-60">
                <div className="mil-skill-track">
                  <div
                    className="mil-skill-prog"
                    style={{ width: "90%" }}
                  ></div>
                </div>
                <div className="mil-text-sm">90%</div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <h6 className="mil-mb-30">UX / UI Design</h6>

              <div className="mil-skill-frame mil-mb-60">
                <div className="mil-skill-track">
                  <div
                    className="mil-skill-prog"
                    style={{ width: "50%" }}
                  ></div>
                </div>
                <div className="mil-text-sm">50%</div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <h6 className="mil-mb-30">App Development</h6>

              <div className="mil-skill-frame mil-mb-60">
                <div className="mil-skill-track">
                  <div
                    className="mil-skill-prog"
                    style={{ width: "95%" }}
                  ></div>
                </div>
                <div className="mil-text-sm">95%</div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <h6 className="mil-mb-30">Internet of Things</h6>

              <div className="mil-skill-frame mil-mb-60">
                <div className="mil-skill-track">
                  <div
                    className="mil-skill-prog"
                    style={{ width: "60%" }}
                  ></div>
                </div>
                <div className="mil-text-sm">60%</div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <h6 className="mil-mb-30">Artificial Intelligence</h6>

              <div className="mil-skill-frame mil-mb-60">
                <div className="mil-skill-track">
                  <div
                    className="mil-skill-prog"
                    style={{ width: "90%" }}
                  ></div>
                </div>
                <div className="mil-text-sm">90%</div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <h6 className="mil-mb-30">Blockchain</h6>

              <div className="mil-skill-frame mil-mb-60">
                <div className="mil-skill-track">
                  <div
                    className="mil-skill-prog"
                    style={{ width: "80%" }}
                  ></div>
                </div>
                <div className="mil-text-sm">80%</div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3 mil-text-center">
              {/* <Link to="" className="mil-link mil-mb-30">
                <span>More</span>
                <i className="fas fa-arrow-right"></i>
              </Link> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- skills end --> */}

      <div className="container">
        <div className="mil-divider"></div>
      </div>

      {/* <!-- contact --> */}
      <section className="mil-contact mil-gradient-bg mil-p-120-0">
        <div
          className="mil-deco mil-deco-accent"
          style={{ top: "0", right: "10%" }}
        ></div>
        <div className="container">
          <h2 className="mil-light mil-mb-90">
            Contact <span class="mil-accent">Us</span>
          </h2>
          <form id="formFeedback" method="post" enctype="multipart/form-data">
            <div className="row">
              <div className="col-lg-6">
                <div className="mil-input-frame mil-mb-30">
                  <label>
                    <span class="mil-light">Name</span>
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
                    <span class="mil-light-soft">Optional</span>
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
                    <span class="mil-accent">Required</span>
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
                    class="mil-checkbox"
                    id="checkbox-1"
                    type="checkbox"
                    name="agree"
                    value="1"
                    required
                  />
                  <label for="checkbox-1" className="mil-text-sm mil-light">
                    I would like to be contacted with news and updates about
                    your{" "}
                    <Link to="" class="mil-accent">
                      events and services
                    </Link>
                  </label>
                </div>
              </div>
              <div class="col-12">
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
      {/* <!-- contact end --> */}

      <Footer />
    </div>
  );
};

export default Home;
