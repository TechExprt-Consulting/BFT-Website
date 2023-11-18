import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Blog = () => {
  return (
    <div className=" mil-wrapper">
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
                <Link to="/About">Blog</Link>
              </li>
            </ul>
            <h2 className="mil-uppercase"> Our Blog</h2>
          </div>
          <div className="mil-fixed-button-container">
            <button className="mil-vertical-button text-dark ">
              Get a Free Quote!
            </button>
          </div>
        </div>
      </div>
            {/* <!-- banner end --> */}

      {/* <!-- blog --> */}
      <section className="mil-blog mil-p-120-0">
        <div className="container">
          <div className="row d-flex  justify-content-between">
            {/* <div
            className="row  "
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
          </div> */}

            {/* <div className="mil-divider mil-mb-60"></div> */}

            <div className="col-md-12 col-lg-8 col-xl-8 mil-mb-120">
              <Link to="" className="mil-card mil-mb-60">
                {/* <div className="mil-cover-frame">
                  <img src="assets/blog/1.jpg" alt="project" />
                </div>
                <div className="mil-description">
                  <div className="mil-card-title">
                    <ul className="mil-dot-list mil-text-sm mil-mb-15">
                      <li>Salesforce</li>
                      <li>25 Aug. 2023</li>
                    </ul>
                    <h4>How a beginner should start a Salesforce learning</h4>
                  </div>
                  <div className="mil-card-text">
                    <p>
                      Salesforce Learning Guide: Salesforce is one of the
                      leading Customer Relationship Management (CRM) platforms
                      in the world, used by businesses of all sizes to manage
                      their sales, marketing, and customer service processes.
                      For beginners who are interested in learning Salesforce,
                      it can be a rewarding journey that opens up numerous
                      career opportunities in the tech […]
                    </p>
                  </div>
                </div> */}
                <div className="row justify-content-around " id="cargo">
                  <div className="col-md-12 col-lg-6 col-xl-6 mil-mb-60 " >
                    <div className="mil-project-cover">
                      <Link to="">
                        <img src="assets/blog/1.jpg" alt="Project" className="image-fluid"/>
                      </Link>
                      &nbsp;
                    </div>
                    <ul className="mil-dot-list mil-text-sm mil-mb-15 pt-3 mil-list-title2">
                      <li >Salesforce</li>
                      <li>25 Aug. 2023</li>
                    </ul>
                    <h4 className="mt-3">
                      <span className="mil-accent">
                        <Link to="">
                          How a beginner should start a Salesforce learning
                        </Link>
                      </span>
                    </h4>
                    <p>
                      Salesforce Learning Guide: Salesforce is one of the
                      leading Customer Relationship Management (CRM) platforms
                      in the world […]
                    </p>
                  </div>

                  <div className="col-md-12 col-lg-6 col-xl-6 mil-mb-60" >
                    <div className="mil-project-cover">
                      <Link to="">
                        {" "}
                        <img
                          src="assets/blog/2.jpg"
                          alt="Project" className="image-fluid"
                          // style={{ width: "500px", height: "250px" }}
                        />
                      </Link>{" "}
                      &nbsp;
                    </div>
                    <ul className="mil-dot-list mil-text-sm mil-mb-15 pt-3 mil-list-title2 w-100">
                      <li>Web Developement</li>
                      <li>08 Aug. 2023</li>
                    </ul>
                    <h4 className="mt-3">
                      <span className="mil-accent">
                        <Link to="">
                          Understanding Mobile-first designs
                        </Link>
                      </span>
                    </h4>
                    <p>
                      In the ever-evolving landscape of web design, Mobile-First
                      Designs have emerged as a pivotal approach […]
                    </p>
                  </div>
                </div>
              </Link>

              <Link to="" className="mil-card mil-mb-60">
              <div className="row justify-content-around " id="cargo">
                  <div className="col-md-12 col-lg-6 col-xl-6 mil-mb-60 " >
                    <div className="mil-project-cover">
                      <Link to="">
                        <img src="assets/blog/7.jpg" alt="Project" className="image-fluid"/>
                      </Link>
                      &nbsp;
                    </div>
                    <ul className="mil-dot-list mil-text-sm mil-mb-15 pt-3 mil-list-title2">
                      <li>Web Developement</li>
                      <li>05 Aug. 2023</li>
                    </ul>
                    <h4 className="mt-3">
                      <span className="mil-accent">
                        <Link to="">
                        Key elements of responsive web design
                        </Link>
                      </span>
                    </h4>
                    <p>
                    Responsive Web Design for Seamless User Experiences In
                      today’s digital era, an increasing number of users access
                      the internet through various devices, ranging from
                      smartphones and tablets to laptops and desktops. […]
                    </p>
                  </div>

                  <div className="col-md-12 col-lg-6 col-xl-6 mil-mb-60" >
                    <div className="mil-project-cover">
                      <Link to="">
                        {" "}
                        <img
                          src="assets/blog/8.jpg"
                          alt="Project" className="image-fluid"
                          // style={{ width: "500px", height: "250px" }}
                        />
                      </Link>{" "}
                      &nbsp;
                    </div>
                    <ul className="mil-dot-list mil-text-sm mil-mb-15 pt-3 mil-list-title2">
                      <li>Salesforce</li>
                      <li>03 Aug. 2023</li>
                    </ul>
                    <h4 className="mt-3">
                      <span className="mil-accent">
                        <Link to="">
                        Demystifying chatter: Collaboratin in Salesforce
                        </Link>
                      </span>
                    </h4>
                    <p>
                    In today’s fast-paced business world, effective
                      communication and collaboration play a crucial role in an
                      organization’s success. As businesses strive to stay
                      competitive and adapt to changing market dynamics […]
                    </p>
                  </div>
                </div>
              </Link>

              <Link to="" className="mil-card mil-mb-60">
              <div className="row justify-content-around " id="cargo">
                  <div className="col-md-12 col-lg-6 col-xl-6 mil-mb-60 " >
                    <div className="mil-project-cover">
                      <Link to="">
                        <img src="assets/blog/10.jpg" alt="Project" className="image-fluid"/>
                      </Link>
                      &nbsp;
                    </div>
                    <ul className="mil-dot-list mil-text-sm mil-mb-15 pt-3 mil-list-title2">
                      <li>Salesforce</li>
                      <li>01 Aug. 2023</li>
                    </ul>
                    <h4 className="mt-3">
                      <span className="mil-accent">
                        <Link to="">
                        Measuring Success: Key metrics for salesforce
                      Implementation
                        </Link>
                      </span>
                    </h4>
                    <p>
                    If you’re in the business world, you’ve probably heard of
                      Salesforce. It’s like the Swiss Army knife of customer
                      relationship management (CRM) software[…]
                    </p>
                  </div>

                  <div className="col-md-12 col-lg-6 col-xl-6 mil-mb-60" >
                    <div className="mil-project-cover">
                      <Link to="">
                        {" "}
                        <img
                          src="assets/blog/9.jpg"
                          alt="Project" className="image-fluid"
                          // style={{ width: "500px", height: "250px" }}
                        />
                      </Link>{" "}
                      &nbsp;
                    </div>
                    <ul className="mil-dot-list mil-text-sm mil-mb-15 pt-3 mil-list-title2">
                      <li>Cloud</li>
                      <li>01 Aug. 2023</li>
                    </ul>
                    <h4 className="mt-3">
                      <span className="mil-accent">
                        <Link to="">
                        Build & Deploy applications using cloud platforms
                        </Link>
                      </span>
                    </h4>
                    <p>
                    Build and Deploy Applications Using Cloud Platforms The
                      advent of cloud computing has revolutionized the way we
                      build and deploy applications. Cloud platforms provide
                      scalable, cost-effective, […]
                    </p>
                  </div>
                </div>
              </Link>

              <div className="mil-divider mil-mb-60"></div>
            </div>

            {/* <div className="mil-divider mil-mb-60"></div> */}

            <div className="col-md-12 col-lg-4 col-xl-3 mil-mb-120">
              <div className="mil-mb-60">
                <h5 className="mil-list-title1 mil-mb-30">
                  About BytesFarms Technologies
                </h5>
                <p className="mil-mb-30">
                  BytesFarms Technologies, a leading IT services firm, offers
                  20+ years of expertise. We optimize operations, enhance
                  customer engagement, and drive growth with Salesforce,
                  Web/Mobile dev, Cloud & DevOps, and Blockchain solutions
                </p>
              </div>
              <div className="mil-divider mil-mb-60"></div>
              {/* <form className="mil-sidebar-input-frame mil-mb-60">
                <input
                  type="text"
                  className="mil-sidebar-input"
                  placeholder="Search here..."
                />
                <button type="submit">
                  <i className="fas fa-search"></i>
                </button>
              </form> 
               <div className="mil-divider mil-mb-60"></div> */}
              <div className="mil-mb-60">
                <h5 className="mil-list-title1 mil-mb-30">Popular Posts</h5>
                <Link
                  to="https://www.linkedin.com/posts/bytesfarms_changewithblockchain-blockchainforgood-positivechange-activity-7119931787731976192-l-Z9?utm_source=share&utm_medium=member_desktop"
                  className="mil-post-sm mil-mb-15"
                >
                  <div className="mil-cover-frame">
                    <img src="assets/blog/6.jpg" alt="cover" />
                  </div>
                  <div className="mil-description">
                    <h6>BlockChain for social good</h6>
                  </div>
                </Link>
                <Link
                  to="https://www.linkedin.com/posts/bytesfarms_itmanagement-automation-innovation-activity-7118104381337538560-ym9_?utm_source=share&utm_medium=member_desktop"
                  className="mil-post-sm mil-mb-15"
                >
                  <div className="mil-cover-frame">
                    <img src="assets/blog/5.jpg" alt="cover" />
                  </div>
                  <div className="mil-description">
                    <h6>Game Changing experience with cloud automation</h6>
                  </div>
                </Link>
                <Link
                  to="https://www.linkedin.com/posts/bytesfarms_blockchain-supplychain-innovation-activity-7117740235731447808-KzXb?utm_source=share&utm_medium=member_desktop"
                  className="mil-post-sm mil-mb-15"
                >
                  <div className="mil-cover-frame">
                    <img src="assets/blog/4.jpg" alt="cover" />
                  </div>
                  <div className="mil-description">
                    <h6>Exciting times in supply chain logistics</h6>
                  </div>
                </Link>
                {/* <Link
                  to="https://www.linkedin.com/posts/bytesfarms_webdesign-responsivedesign-mobilefriendly-activity-7117378185352114176-DpTQ?utm_source=share&utm_medium=member_desktop"
                  className="mil-post-sm mil-mb-15"
                >
                  <div className="mil-cover-frame">
                    <img src="assets/blog/3.jpg" alt="cover" />
                  </div>
                  <div className="mil-description">
                    <h6>
                      Just had an ""Aha!"" moment about mobile-friendly
                      websites!
                    </h6>
                  </div>
                </Link> */}
              </div>
              <div className="mil-divider mil-mb-60"></div>
              <div className="mil-mb-60">
                <h5 className="mil-list-title1 mil-mb-30">Categories</h5>
                <ul className="mil-hover-link-list">
                  <li>
                    <Link to="">Cloud</Link>
                  </li>
                  <li>
                    <Link to="">Salesforce</Link>
                  </li>
                  <li>
                    <Link to="">Web Development</Link>
                  </li>
                </ul>
              </div>
              <div className="mil-divider mil-mb-60"></div>
              <div className="mil-mb-60">
                <h5 className="mil-list-title1 mil-mb-30">Tags</h5>
                <ul className="mil-tags">
                  <li>
                    <Link to="">Build application</Link>
                  </li>
                  <li>
                    <Link to="">Chatter in Salesforce</Link>
                  </li>
                  <li>
                    <Link to="">Cloud</Link>
                  </li>
                  <li>
                    <Link to="">Deploy App</Link>
                  </li>
                  <li>
                    <Link to="">Deployment</Link>
                  </li>
                  <li>
                    <Link to="">Design</Link>
                  </li>
                  <li>
                    <Link to="">Implementation</Link>
                  </li>
                  <li>
                    <Link to="">Responsive Web Design</Link>
                  </li>
                  <li>
                    <Link to="">Salesforce</Link>
                  </li>
                  <li>
                    <Link to="">Salesforce Guide</Link>
                  </li>
                  <li>
                    <Link to="">Salesforce Key matrics</Link>
                  </li>
                  <li>
                    <Link to="">User Experience</Link>
                  </li>
                  <li>
                    <Link to="">UX</Link>
                  </li>
                  <li>
                    <Link to="">Web Design</Link>
                  </li>
                  <li>
                    <Link to="">Web Developement</Link>
                  </li>
                </ul>
              </div>
              <div className="mil-divider mil-mb-60"></div>
              {/* <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">Newsletter</h5>
                <form className="mil-sidebar-input-frame">
                  <input
                    type="text"
                    className="mil-sidebar-input"
                    placeholder="Your email address"
                  />
                  <button type="submit">
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </form>
              </div> */}
              {/* <div className="mil-divider mil-mb-60"></div> */}
              <h5 className="mil-list-title1 mil-mb-30">Contact us</h5>
              {/* <p className="mil-mb-30">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p> */}
              <p
                className="mil-light mil-light-soft text-dark"
                style={{ marginBottom: "45px" }}
              >
                <span className="mil-accent">USA </span>&nbsp;- 3795 GARDENSIDE
                CT, ALPHARETTA, GA 30004
                <br />
                <span className="mil-accent">INDIA</span>&nbsp; - 701, AIREN
                HEIGHTS, AB ROAD, INDORE
              </p>

              <ul className="mil-simple-list mil-mb-15">
                <li className="mil-light">
                  <span className="mil-accent">+01</span>&nbsp;
                  <span className="mil-light-soft text-dark">804 435 5595</span>
                </li>
                <li className="mil-light">
                  <span className="mil-accent">+91</span>&nbsp;
                  <span className="mil-light-soft text-dark">989 306 4124</span>
                </li>
                <li>
                  <span className="mil-accent"></span>
                  <a href="mailto:connect@bytesfarms.com">
                    <span className="mil-light mil-light-soft text-dark">
                      connect@bytesfarms.com
                    </span>
                  </a>
                </li>
              </ul>
<br/>
              {/* <Link to="/Contact" className="mil-link">
                <span>Send</span>
                <i className="fas fa-arrow-right"></i>
              </Link> */}
              <div className="mil-divider mil-mb-60"></div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- blog end --> */}
      <Footer />
    </div>
  );
};

export default Blog;
