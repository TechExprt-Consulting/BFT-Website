import React from "react";
import "./Service.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
const BlockChain = () => {
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
                <Link to="">Service</Link>
              </li>
              <li>
                <Link to="/BlockChain">BlockChain</Link>
              </li>
            </ul>
            <h2 className="mil-uppercase">BlockChain Developement</h2>
          </div>
        </div>
      </div>
      {/* <!-- banner end --> */}

      {/* <!-- call to action --> */}
      <section className="mil-p-120-90">
        <div
          className="mil-deco"
          style={{ bottom: "0", right: "25%", transform: "rotate(180deg)" }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="mil-hori-box mil-mb-30">
                <div className="mil-mr-30">
                  <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg">
                    <img src="assets/icon/1.svg" alt="icon" />
                  </div>
                </div>
                <h6>
                  Embrace the future of trust and transparency with our
                  Blockchain Development Services. Our experienced team of
                  blockchain developers is here to help you navigate the dynamic
                  world of blockchain technology. We offer tailor-made solutions
                  that cater to your unique business needs, whether you require
                  smart contract development, decentralized application (dApps)
                  creation, or private blockchain development. Security is our
                  top priority, and our state-of-the-art security protocols
                  ensure your data and transactions remain safeguarded from
                  threats.
                </h6>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mil-adaptive-right">
                <Link to="/Contact" className="mil-button mil-border mil-mb-30">
                  <span>Get in Touch</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- call to action end --> */}

      <div className="container">
        <div className="mil-divider"></div>
      </div>

      {/* <!-- steps --> */}
      <section className="mil-p-120-90">
        <div
          className="mil-deco"
          style={{ bottom: "0", right: "35%", transform: "rotate(180deg)" }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-12 mil-mb-90">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Services and Solutions
              </span>
              <h2 className="mil-mb-30">
                Our BlockChain Development Services Let You Win Big
              </h2>
              <p className="mil-dark">
                We stay at the forefront of blockchain innovations, guaranteeing
                that your business benefits from the latest advancements. Our
                scalable solutions are designed to grow with your business,
                providing long-term value. Whether you need blockchain
                consulting to get started or ongoing maintenance and support, we
                have you covered. Join the blockchain revolution with us at
                BytesFarms and unlock the potential of this transformative
                technology.
              </p>
            </div>
          </div>
          <div className="row mil-mb-30-adapt">
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <div className="mil-number-icon mil-circle mil-mb-30">
                  <span>01</span>
                </div>
                <h4 className="mil-mb-15">BLOCKCHAIN CONSULTING</h4>
                <p>
                  Unsure where to begin? Our experts provide comprehensive
                  guidance to help you make informed decisions about integrating
                  blockchain into your business.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <div className="mil-number-icon mil-lines mil-mb-30">
                  <span>02</span>
                </div>
                <h4 className="mil-mb-15">SMART CONTRACT DEVELOPMENT</h4>
                <p>
                  Automate processes, eliminate intermediaries, and ensure trust
                  with our expertly crafted smart contracts.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <div className="mil-number-icon mil-mb-30">
                  <span>03</span>
                </div>
                <h4 className="mil-mb-15">DAPP DEVELOPMENT</h4>
                <p>
                  Elevate user experience and transparency with decentralized
                  applications tailored to your business needs.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <div className="mil-number-icon mil-mb-30">
                  <span>04</span>
                </div>
                <h4 className="mil-mb-15">PRIVATE BLOCKCHAIN DEVELOPMENT</h4>
                <p>
                  Maintain control over your blockchain network with a
                  permissioned blockchain solution designed specifically for
                  your business.
                </p>
              </div>
            </div>

            <div className="col-xl-4">
              <div className="mil-mb-60">
                <div className="mil-number-icon mil-circle mil-mb-30">
                  <span>05</span>
                </div>
                <h4 className="mil-mb-15">BLOCKCHAIN INTEGRATION</h4>
                <p>
                  Seamlessly integrate blockchain technology into your existing
                  systems and workflows for enhanced efficiency.
                </p>
              </div>
            </div>

            <div className="col-xl-4">
              <div className="mil-mb-60">
                <div className="mil-number-icon mil-lines mil-mb-30">
                  <span>06</span>
                </div>
                <h4 className="mil-mb-15">
                  BLOCKCHAIN MAINTENANCE AND SUPPORT
                </h4>
                <p>
                  Beyond development, we offer ongoing support and maintenance
                  to ensure your blockchain ecosystem operates smoothly. Embrace
                  the future of technology with BytesFarms. Contact us today to
                  explore how our Blockchain Development Services can
                  revolutionize your business, and let's embark on this exciting
                  journey together.
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6 col-xl-6">
              <Link to="" className="mil-button mil-border mil-mb-30">
                <span>Tell us about your project</span>
              </Link>
            </div>
            <div className="col-md-6 col-xl-6">
              <div className="mil-adaptive-right">
                {/* <Link to="" className="mil-link mil-mb-30"><span>See More</span><i className="fas fa-arrow-right"></i></Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- steps end --> */}

      <div className="container">
        <div className="mil-divider"></div>
      </div>

      <div className="container">
        <div className="mil-divider"></div>
      </div>

      {/* <!-- services --> */}
      <section className="mil-services mil-p-120-90">
        <div
          className="mil-deco"
          style={{ bottom: "0", right: "40%", transform: "rotate(180deg)" }}
        ></div>
        <div className="container">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
            High Quality and Performance
          </span>
          <h2 className="mil-mb-90">
            Our Approach To <span className="mil-accent">BlockChain</span>{" "}
            Development
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
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">01</span>Expertise
                  </h5>
                  <p>
                    Our team comprises seasoned blockchain professionals with a
                    deep understanding of various blockchain platforms, ensuring
                    the development of solutions tailored to your specific
                    needs.
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
                    <span className="mil-accent">02</span> Innovation
                  </h5>
                  <p>
                    We are committed to staying at the forefront of blockchain
                    technology, continuously exploring new possibilities and
                    emerging trends to provide cutting-edge solutions.
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
                    <span className="mil-accent">03</span> Collaboration
                  </h5>
                  <p>
                    We believe in a collaborative approach, working closely with
                    our clients to understand their goals and challenges, and
                    co-creating solutions that deliver tangible results.
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
                    <span className="mil-accent">04</span> Reliability
                  </h5>
                  <p>
                    With a track record of successful blockchain projects, we
                    are a trusted partner that delivers on time and within
                    budget.
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
                    <span className="mil-accent">05</span> Tailored Solutions
                  </h5>
                  <p>
                    We understand that one size doesn't fit all. Our blockchain
                    solutions are custom-built to align seamlessly with your
                    specific requirements, ensuring optimal performance and
                    maximum return on investment.
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
                    <span className="mil-accent">06</span> Cutting-Edge
                    Technology
                  </h5>
                  <p>
                    We understand that one size doesn't fit all. Our blockchain
                    solutions are custom-built to align seamlessly with your
                    specific requirements, ensuring optimal performance and
                    maximum return on investment.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="mil-service-item mil-without-lines mil-mb-60">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <img src="assets/icon/23.svg" alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">07</span>Security
                  </h5>
                  <p>
                    Security is paramount in the blockchain ecosystem. We
                    implement stringent security protocols and industry best
                    practices to safeguard your data and transactions against
                    cyber threats.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="mil-service-item mil-without-lines mil-mb-60">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <img src="assets/icon/21.svg" alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">08</span>Scalability
                  </h5>
                  <p>
                    As your business grows, so should your blockchain
                    infrastructure. Our solutions are designed to scale
                    effortlessly, ensuring that you're always prepared for
                    future opportunities and challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-md-6 col-xl-6">
              <Link to="/Contact" className="mil-button mil-border mil-mb-30">
                <span>Talk To Our BlockChain Experts</span>
              </Link>
            </div>
            <div className="col-md-6 col-xl-6">
              <div className="mil-adaptive-right">
                {/* <Link to="" className="mil-link mil-mb-30"><span>See More</span><i className="fas fa-arrow-right"></i></Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- services end --> */}
      {/* <!-- partners --> */}
      <div class="mil-partners mil-partners-spaces">
        <div class="container">
          <div class="mil-partners-frame">
            <a href="#.">
              <img
                src="assets/project/1.png"
                alt="partner"
                style={{ width: "130px" }}
              />
            </a>
            <a href="#.">
              <img src="assets/project/2.png" alt="partner" />
            </a>
            <a href="#.">
              <img
                src="assets/project/3.png"
                alt="partner"
                style={{ height: "100px" }}
              />
            </a>
            <a href="#.">
              <img
                src="assets/project/4.png"
                alt="partner"
                style={{ width: "200px" }}
              />
            </a>
          </div>
        </div>
      </div>
      {/* <!-- partners end --> */}
      {/* <!-- services --> */}
      <section className="mil-gradient-bg mil-deco-right mil-p-120-0">
        <div
          className="mil-deco mil-deco-accent"
          style={{ top: "0", left: "5%" }}
        ></div>
        <div className="container">
          <div className="mil-text-center mil-mb-90">
            <span className="mil-suptitle  mil-light mil-suptitle-2 mil-mb-30">
              Always The Best
            </span>
            <h2 className="mil-light mil-mb-30">
              {" "}
              Why Choose our{" "}
              <span className="mil-accent">BlockChain Applications</span>{" "}
            </h2>
            <p className="mil-light-soft">
              Blockchain technology ensures secure, transparent, and
              tamper-proof record-keeping, revolutionizing various
              <br /> industries by enabling decentralized transactions and smart
              contracts.
            </p>
          </div>
          <div className="row mil-mb-30-adapt">
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="assets/icon/sm/6.svg" alt="icon" />
                </div>
                <p className="mil-light">Blockchain Development</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="assets/icon/sm/2.svg" alt="icon" />
                </div>
                <p className="mil-light">Smart Contract Development</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="assets/icon/sm/7.svg" alt="icon" />
                </div>
                <p className="mil-light">Tokenization Services</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="assets/icon/sm/3.svg" alt="icon" />
                </div>
                <p className="mil-light">Blockchain Consulting</p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="assets/icon/sm/1.svg" alt="icon" />
                </div>
                <p className="mil-light">Supply Chain Solutions</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="assets/icon/sm/4.svg" alt="icon" />
                </div>
                <p className="mil-light">Security Audits and Solutions</p>
              </div>
            </div>
          </div>
          <div className="mil-text-center">
            <Link
              to="/Contact"
              className="mil-button mil-border mil-light mil-mb-30"
            >
              <span>Talk To Our BlockChain Experts</span>
            </Link>
          </div>
        </div>
      </section>
      {/* <!-- services end --> */}

      <Footer />
    </div>
  );
};

export default BlockChain;
