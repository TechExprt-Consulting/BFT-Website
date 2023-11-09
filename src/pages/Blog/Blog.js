import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
const Blog = () => {
  return (
    <div className=" mil-wrapper">
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
                <Link to="/Careers">Pages</Link>
              </li>
              <li>
                <Link to="/Careers">Blog</Link>
              </li>
            </ul>
            <h2 className="mil-uppercase">Our Blog</h2>
          </div>
        </div>
      </div>
      {/* <!-- banner end --> */}

      {/* <!-- blog --> */}
      <section className="mil-blog mil-p-120-0">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-8 col-xl-8 mil-mb-120">
              <Link to="" className="mil-card mil-mb-60">
                <div className="mil-cover-frame">
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
                </div>
              </Link>

              <Link to="" className="mil-card mil-mb-60">
                <div className="mil-cover-frame">
                  <img src="assets/blog/2.jpg" alt="project" />
                </div>
                <div className="mil-description">
                  <div className="mil-card-title">
                    <ul className="mil-dot-list mil-text-sm mil-mb-15">
                      <li>Web Developement</li>
                      <li>08 Aug. 2023</li>
                    </ul>
                    <h4>Understanding Mobile-first designs</h4>
                  </div>
                  <div className="mil-card-text">
                    <p>
                      In the ever-evolving landscape of web design, Mobile-First
                      Designs have emerged as a pivotal approach that has
                      revolutionized the way websites are created and optimized
                      for today’s digital world. At the heart of this paradigm
                      shift lies the commitment to providing an exceptional user
                      experience and ensuring optimal performance across a
                      multitude of devices. In […]
                    </p>
                  </div>
                </div>
              </Link>

              <Link to="" className="mil-card mil-mb-60">
                <div className="mil-cover-frame">
                  <img src="assets/blog/7.jpg" alt="project" />
                </div>
                <div className="mil-description">
                  <div className="mil-card-title">
                    <ul className="mil-dot-list mil-text-sm mil-mb-15">
                      <li>Web Developement</li>
                      <li>05 Aug. 2023</li>
                    </ul>
                    <h4>Key elements of responsive web design</h4>
                  </div>
                  <div className="mil-card-text">
                    <p>
                      Responsive Web Design for Seamless User Experiences In
                      today’s digital era, an increasing number of users access
                      the internet through various devices, ranging from
                      smartphones and tablets to laptops and desktops. As such,
                      creating a seamless user experience across all these
                      devices has become crucial for the success of any website
                      or web application. Responsive […]
                    </p>
                  </div>
                </div>
              </Link>

              <Link to="" className="mil-card mil-mb-60">
                <div className="mil-cover-frame">
                  <img src="assets/blog/8.jpg" alt="project" />
                </div>
                <div className="mil-description">
                  <div className="mil-card-title">
                    <ul className="mil-dot-list mil-text-sm mil-mb-15">
                      <li>Salesforce</li>
                      <li>03 Aug. 2023</li>
                    </ul>
                    <h4>Demystifying chatter: Collaboratin in Salesforce</h4>
                  </div>
                  <div className="mil-card-text">
                    <p>
                      In today’s fast-paced business world, effective
                      communication and collaboration play a crucial role in an
                      organization’s success. As businesses strive to stay
                      competitive and adapt to changing market dynamics, the
                      need for streamlined and efficient communication tools
                      becomes paramount. Salesforce, the leading customer
                      relationship management (CRM) platform, recognized this
                      need and introduced Chatter, a revolutionary […]
                    </p>
                  </div>
                </div>
              </Link>

              <Link to="" className="mil-card mil-mb-60">
                <div className="mil-cover-frame">
                  <img src="assets/blog/10.jpg" alt="project" />
                </div>
                <div className="mil-description">
                  <div className="mil-card-title">
                    <ul className="mil-dot-list mil-text-sm mil-mb-15">
                      <li>Salesforce</li>
                      <li>01 Aug. 2023</li>
                    </ul>
                    <h4>
                      Measuring Success: Key metrics for salesforce
                      Implementation
                    </h4>
                  </div>
                  <div className="mil-card-text">
                    <p>
                      If you’re in the business world, you’ve probably heard of
                      Salesforce. It’s like the Swiss Army knife of customer
                      relationship management (CRM) software – a tool that
                      businesses worldwide are using to streamline their
                      processes and boost their customer engagement. But how do
                      you know if your Salesforce implementation is hitting the
                      mark? That’s where […]
                    </p>
                  </div>
                </div>
              </Link>

              <Link to="" className="mil-card mil-mb-60">
                <div className="mil-cover-frame">
                  <img
                    src="assets/blog/9.jpg"
                    alt="project"
                    style={{ height: "" }}
                  />
                </div>
                <div className="mil-description">
                  <div className="mil-card-title">
                    <ul className="mil-dot-list mil-text-sm mil-mb-15">
                      <li>Cloud</li>
                      <li>01 Aug. 2023</li>
                    </ul>
                    <h4>Build & Deploy applications using cloud platforms</h4>
                  </div>
                  <div className="mil-card-text">
                    <p>
                      Build and Deploy Applications Using Cloud Platforms The
                      advent of cloud computing has revolutionized the way we
                      build and deploy applications. Cloud platforms provide
                      scalable, cost-effective, and reliable infrastructure that
                      allows developers to focus on their code rather than
                      managing hardware. In this blog, we will explore the key
                      steps and best practices involved in […]
                    </p>
                  </div>
                </div>
              </Link>

              <div className="mil-divider mil-mb-60"></div>
            </div>
            <div className="col-lg-4 col-xl-3 mil-mb-120">
              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">
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
              <form className="mil-sidebar-input-frame mil-mb-60">
                <input
                  type="text"
                  className="mil-sidebar-input"
                  placeholder="Search here..."
                />
                <button type="submit">
                  <i className="fas fa-search"></i>
                </button>
              </form>
              <div className="mil-divider mil-mb-60"></div>
              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">Popular Posts</h5>
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
                <Link
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
                </Link>
              </div>
              <div className="mil-divider mil-mb-60"></div>
              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">Categories</h5>
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
                <h5 className="mil-list-title mil-mb-30">Tags</h5>
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
              <div className="mil-mb-60">
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
              </div>
              <div className="mil-divider mil-mb-60"></div>
              <h5 className="mil-list-title mil-mb-30">Contact us</h5>
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
                  <span className="mil-accent">info</span>
                  <a href="mailto:connect@bytesfarms.com">
                    <span className="mil-light mil-light-soft text-dark">
                      connect@bytesfarms.com
                    </span>
                  </a>
                </li>
              </ul>

              <Link to="/Contact" className="mil-link">
                <span>Send</span>
                <i className="fas fa-arrow-right"></i>
              </Link>
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
