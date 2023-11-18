import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Seo = () => {
  return (
    <div className="mil-wrapper">
      <Navbar />

      {/* <!-- banner --> */}
      <div className="mil-banner-sm bg-white shadow shadow-bottom shadow-md">
    <div className="mil-banner-content">
        <div className="container mil-relative">
            <div className="row d-flex flex-column-reverse flex-md-row">
                <div className="col-md-8">
                    <ul className="mil-breadcrumbs mil-mb-30 ">
                        <li>
                            <Link to="/Home">Home</Link>
                        </li>
                        <li>
                            <Link to="">Service</Link>
                        </li>
                        <li>
                            <Link to="/Salesforce">SEO</Link>
                        </li>
                        {/* <li>
                            <Link to="/Salesforce">SEO</Link>
                        </li> */}
                    </ul>
                    <h2 className="mil-uppercase" style={{ color: "#1B2F5B" }}>
                    Search Engine Optimization
                    </h2>
                </div>
                <div className="col-md-4 text-center">
                    <img src="assets/mockup/SEO.png" alt="mus" className="img-fluid" />
                </div>
            </div>
        </div>
        <div className="mil-fixed-button-container text-center mt-3">
            <button className="mil-vertical-button text-dark">
                <Link to='/contact'>Get a Free Quote!</Link>
            </button>
        </div>
    </div>
</div>
      {/* <!-- banner end --> */}

      {/* <!-- call to action --> */}
      <section className="mt-5">
        <div
          className="mil-deco"
          style={{ bottom: "0", right: "25%", transform: "rotate(180deg)" }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="">
              <div className=" mil-mb-30">
                <p className="conten">
                  Business is not easy, especially if you are missing out on the
                  online visibility game. In today’s fast pacing world when
                  every business has made their digital debut, SEO stands as a
                  game changer for many. With constant content push and rigorous
                  But don’t worry, our team of experts has got you all covered.
                  Our team of SEO experts is armed with the tools, knowledge and
                  strategies needed to make a way through the intricacies of
                  SEO, ensuring that your business moves to the top position of
                  the search results.{" "}
                </p>
              </div>
              <div className=" mil-mb-30">
                <p className="conten">
                  While you focus on your business operations and
                  administration, we take care of our SEO roadmap and ranking
                  destination. With our arsenal of SEO tools, techniques and
                  commitment to goal-oriented results, we are here to ace your
                  SEO game and strengthen the online presence for your business.{" "}
                </p>
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
      <section className="mt-4">
        {/* <div
          className="mil-deco"
          style={{ bottom: "0", right: "35%", transform: "rotate(180deg)" }}
        ></div> */}
        <div className="container">
          <div className="row">
            <div className="col-12 mil-mb-90 ">
              {/* <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Services and Solutions
              </span> */}
              <h2 className="mil-mb-30">Our Comprehensive SEO Services </h2>
              <p className="mil-dark">
                At BytesFarms Technologies, we offer a comprehensive suite of
                SEO services designed to elevate your online visibility and
                drive sustainable results:
              </p>
            </div>
          </div>
          <div className="row mil-mb-30-adapt">
            <div className="col-xl-4">
              <div className="mil-mb-60 conten">
                <div className="mil-number-icon mil-lines mil-mb-30">
                  <span>01</span>
                </div>
                <h4 className="mil-mb-15"> On-Page Optimization</h4>
                <p>
                  Our experts meticulously optimize your website's on-page
                  elements, including meta tags, headings, and content, ensuring
                  it's search engine-friendly.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60 conten">
                <div className="mil-number-icon mil-lines mil-mb-30">
                  <span>02</span>
                </div>
                <h4 className="mil-mb-15"> Link Building</h4>
                <p>
                  - One of the most common practices at SEO is link-building,
                  more popularly known as backlinks. These backlinks work as a
                  sign of authenticity from other sites, which improves the
                  ranking of your content on the search engines.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60 conten">
                <div className="mil-number-icon mil-mb-30">
                  <span>03</span>
                </div>
                <h4 className="mil-mb-15">Technical SEO </h4>
                <p>
                  Optimisation of the technical elements of website to enhance
                  the overall performance and search engine ranking.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60 conten">
                <div className="mil-number-icon mil-circle mil-mb-30">
                  <span>04</span>
                </div>
                <h4 className="mil-mb-15">Local SEO</h4>
                <p>
                  If you're a local business, we help you dominate local search
                  results, ensuring that potential customers in your area can
                  find you quickly and easily.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60 conten">
                <div className="mil-number-icon mil-lines mil-mb-30">
                  <span>05</span>
                </div>
                <h4 className="mil-mb-15">E-Commerce SEO</h4>
                <p>
                  - optimizing product pages, enhancing user experience,
                  managing categories, and improving site architecture to boost
                  sales and improve visibility.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60 conten">
                <div className="mil-number-icon mil-mb-30">
                  <span>06</span>
                </div>
                <h4 className="mil-mb-15">SEO Audits</h4>
                <p>A detailed analysis of the website’s SEO performance.</p>
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
      
      <section className="bg-white mil-deco-right mil-p-120-0">
        <div
          className="mil-deco mil-deco-accent"
          style={{ top: "0", left: "5%" }}
        ></div>
        <div className="container">
          <div className="mil-text-center mil-mb-90">
           
            <h2 className="mil-ligh mil-mb-30">
              {" "}
              Why Choose our{" "}
              <span className="mil-accent">Search Engine Optimization</span>{" "}
            </h2>
           
          </div>
          <div className="row mil-mb-30-adapt">
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-ligh">
                  <img src="assets/icon/sm/6.svg" alt="icon" />
                </div>
                <p className="mil-ligh"> High Quality Niche Backlinks</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-ligh">
                  <img src="assets/icon/sm/6.svg" alt="icon" />
                </div>
                <p className="mil-ligh">Flawless Onpage SEO</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-ligh">
                  <img src="assets/icon/sm/6.svg" alt="icon" />
                </div>
                <p className="mil-ligh">SERPs Inspired Content</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-ligh">
                  <img src="assets/icon/sm/6.svg" alt="icon" />
                </div>
                <p className="mil-ligh">Fastest Load-Times</p>
              </div>
            </div>

            

            
          </div>
          {/* <div className="mil-text-center">
            <Link
              to="/Contact"
              className="mil-button mil-border mil-ligh mil-mb-30"
            >
              <span>Talk To Our SEO Experts</span>
            </Link>
          </div> */}
        </div>
      </section>
      {/* <!-- services end --> */}

      <Footer />
    </div>
  );
};

export default Seo;
