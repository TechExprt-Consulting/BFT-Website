import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="mil-dark-bg bg-dark">
      <img
        src="/assets/deco/map.png"
        alt="background"
        className="mil-footer-bg"
      />
      <div className="container">
        <div className="mil-footer-content">
          <div className="row align-items-center mil-p-120-60">
            <div className="col-xl-6 mil-mb-60">
              <h3 className="mil-light mil-mb-15">ARE YOU INTERESTED?</h3>

              <p className="mil-light-soft">
                Join our tech community, embrace innovation!
              </p>
            </div>
            <div className="col-xl-6 mil-mb-60">
              <form className="mil-subscribe-form">
                <input type="text" placeholder="Your email address" />
                <button type="submit" className="mil-button mil-accent-bg">
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>

          <div className="mil-divider mil-light"></div>

          <div className="row justify-content-around mil-p-120-60">
            <div className="col-md-4 col-lg-3 col-xl-3 mil-mb-30">
              <img
                src="/assets/logo/logo-2.png"
                alt="mus"
                className="mil-logo mil-mb-60"
                style={{ width: "220px", height: "70px"}}
              />

              <p
                className="mil-light mil-light-soft"
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
                  <span className="mil-accent">+91</span>&nbsp;
                  <span className="mil-light-soft">989 306 4124</span>
                </li>

                <li>
                  {/* <span className="mil-accent">info</span> */}
                  <a href="mailto:connect@bytesfarms.com">
                    <span className="mil-light mil-light-soft">
                      connect@bytesfarms.com
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-5">
              <div className="row justify-content-between">
                <div className="col-md-5 col-lg-6 mil-mb-60">
                  <h4 className="mil-list-title mil-light mil-mb-60">
                    Services
                  </h4>

                  <ul className="mil-hover-link-list mil-light text-decoration-none">
                    <li>
                      <Link to="/salesforce">Salesforce</Link>
                    </li>
                    
                    <li>
                      <Link to="/cloud">Cloud</Link>
                    </li>
                    <li>
                      <Link to="/digital">Digital Marketing</Link>
                    </li>
                    <li>
                      <Link to="/deveops">Deveops</Link>
                    </li>
                    <li>
                      <Link to="/blockChain">BlockChain</Link>
                    </li>
                    <li>
                      <Link to="/mobileApp">Mobile Developement</Link>
                    </li>
                    <li>
                      <Link to="/webApp">Web Developement</Link>
                    </li>
                  </ul>
                </div>

                <div className="col-md-4 col-lg-5 col-xl-5 mil-mb-60">
                  <h4 className="mil-list-title mil-light mil-mb-60">Links</h4>

                  <ul className="mil-hover-link-list mil-light">
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/blog">Our Blog</Link>
                    </li>
                    <li>
                      <Link to="/team">Our Team</Link>
                    </li>
                    <li>
                      <Link to="/career">Careers</Link>
                    </li>
                    {/* <li>
                      <Link to="/Faq">FAQ</Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3">
              {" "}
              <div className="mil-map-frame">
                <iframe
                
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14718.182783990356!2d75.892227!3d22.7451213!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdce5c8a35a9%3A0xa14c8742df30e4ba!2sBytesFarms%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1697115056572!5m2!1sen!2sin"
                  width="500px"
                  height=""
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>{" "}
              </div>
              <div className="container"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mil-footer-bottom">
        <div className="container">
          <p className="mil-text-sm mil-light">© BytesFarms 2023.</p>
          <p className="mil-text-sm mil-light">All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
