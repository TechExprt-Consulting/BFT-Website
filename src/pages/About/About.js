import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const About = () => {
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
            <div className="col-lg-12 col-xl-8">
              <h4 className="mil-mb-60 conten">
                Fostering business growth and expansion, since 2003,{" "}
                <span className="mil-accent">Bytesfarms Technologies </span>{" "}
                firmly rests upon the robust foundations of technology and
                strategy. We enable businesses to strengthen their brand
                identity & presence in the market, optimize their operations,
                enhance customer engagement and drive growth with Digital
                Marketing, Strategic Consultation, Salesforce, Web/mobile dev,
                Cloud and DevOps and Blockchain solutions.
              </h4>
            </div>
            <div className="col-lg-12 col-xl-4">
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
      <section className="mil-deep-bg mil-p-120-601">
        <div className="mil-deco" style={{ top: "0", left: "35%" }}></div>
        <div className="container "  >
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 mil-mb-60">
              <div className="mil-circle-illustration">
                <div className="mil-circle-bg"></div>
                <div className="mil-image-frame">
                  <img src="assets/faces/t3.jpg" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 conten text-xl">
              
              <p className="" style={{fontSize:"20px"}} >
                Today, we live in the era of innovation and ceaseless change,
                where a new product or service makes its way to the market every
                day. With a plethora of services and products flooding the
                market on a daily basis, what is quintessential for businesses
                to sustain, is a skillful and strategic navigation through the
                ever-shifting market terrain.
              </p><br/><br/>
              <p style={{fontSize:"20px"}}>Businesses who have ahdapted to the technological changes and a strategic vision, often gain a competitive advantage and withstand the test of time. We leverage our expertise in technology, AI, market research, data analysis, strategy and marketing communications to help our clients optimize their business models and propelling their revenues and growth plans.</p>
              
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
                60<span className="mil-accent">+</span>
              </div>
              <h6 className="mil-mb-60">Years of combined <br/>Experience</h6>

              <h2 className="mil-mb-60">Your Tech and Strategy Partner</h2>
            </div>
            <div className="col-lg-6">
              <h3 className="mil-mb-60">
                Be it a raw idea, emerging concept or meticulously crafted idea,
                we are always thrilled to help businesses in achieving their
                goals.
              </h3>

              <div className="row">
                <div className="col-lg-6">
                  <h6 className="mil-mb-30">
                    <span className="mil-accent">60+</span>&nbsp; Years of combined
                    Experience
                  </h6>

                  <div className="mil-divider mil-divider-left mil-mb-60"></div>
                </div>
                <div className="col-lg-6">
                  <h6 className="mil-mb-30">
                    <span className="mil-accent">20+</span>&nbsp; Tech Stack
                    
                  </h6>

                  <div className="mil-divider mil-divider-left mil-mb-60"></div>
                </div>
                <div className="col-lg-6">
                  <h6 className="mil-mb-30">
                    <span className="mil-accent">30+</span>&nbsp; Professionals
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
            <h2>Vision</h2>
              <p>To empower business with the best tech and strategic resources.  </p>
              <h2>Mission</h2>
              <p>Helps business grow and flourish at an exponential rate </p>
              
              {/* <h2 className="mil-mb-50">Our Mission</h2> */}

              <p className="mil-mb-50 conten">
                Fascinated by the art and science of customisation, we knew that
                in today's fast-paced world, it will give us an edge in the
                market. While the world is busy chasing and celebrating
                innovation of scales, we do believe even the slight
                customisations and strategic implementation can turn the tables
                for our clients. Our strength lies in 
              </p>

              <ul className="mil-simple-list">
                <li>Our chase for customisation</li>
                <li>Strategic consultation </li>
                <li>Diversified resources </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- about end --> */}

      {/* <!-- features --> */}
      <section className="mil-p-120-120">
        <div className="container">
          
          <h2 className="mil-mb-120 mb-3">Values</h2>

          <div className="mil-divider"></div>
          <div className="mil-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="assets/icon/6.svg" alt="icon" />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">Integrity</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                Our honesty, ethical behavior and transparent approach have proven to be an indispensable asset for us. 
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
                <h4 className="mil-mb-30">Adaptability</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                In an industry that is ever-evolving, we promote a work culture that is agile and flexible.
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
                <h4 className="mil-mb-30">Responsibility</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                We take complete responsibilities not only in context to the work that we deliver but for the consequences that might follow after.
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
                <h4 className="mil-mb-30">Inclusivity</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30 conten">
                We understand that individuality is as crucial as team spirit, and so be it in the process of decision-making or even mere executions, we diligently make a point that there is equal opportunity for everyone to voice their opinion.
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
                <h4 className="mil-mb-30">Foresightedness </h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                The ability to foresee, helps us get a much clearer understanding and design a more concrete plan of action accordingly.
                </p>
              </div>
            </div>
          </div>
          <div className="mil-divider"></div>
        </div>
        
      </section>
      <div className="mil-divider"></div>

      {/* <!-- features end --> */}


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
              
              <h2 className="mil-mb-50">Life at BytesFarms</h2>

              <p className="mil-mb-50 conten">
              At BytesFarms, we are building a culture that promotes a healthy environment for our team members to learn, grow and achieve their goals along with the organizational goals.  
              </p>
              <p className="mil-mb-50 conten">
              We promote a 5 day work culture at our offices, celebrate all big and small moments with the team. We aspire to be a significant part of our team’s journey.  
                            </p>

             
            </div>
          </div>
        </div>
      </section>


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
                    className="place1 place2"
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
                    className="place1 place2"
                  />
                </div>
                <div className="mil-input-frame mil-mb-60">
                  <label>
                    <span className="mil-light">Phone</span>
                    <span className="mil-light-soft">Optional</span>
                  </label>
                  <input type="tel" name="phone" placeholder="Your Phone"className="place1 place2" />
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
                    rows="4"
                    className="place1 place2"
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
