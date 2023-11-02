import React from "react";
import "./Service.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Digital = () => {
  return (
    <div className="mil-wrapper">
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
                <Link to="">Service</Link>
              </li>
              <li>
                <Link to="/Salesforce">Digital Marketing</Link>
              </li>
            </ul>
            <h2 className="mil-uppercase">Digital Marketing</h2>
          </div>
        </div>
      </div>
      {/* <!-- banner end --> */}

      {/* <!-- call to action --> */}
      <section className="mt-4">
        <div
          className="mil-deco"
          style={{ bottom: "0", right: "25%", transform: "rotate(180deg)" }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="">
              <div className=" mil-mb-30">
                <p>
                  <h5>Let's grow digitally</h5>
                  Got a business idea but struggling to stand out in the market?
                  Let's help you scale your business and grow at an unprecedent
                  rate. We are a team of digital geeks working our way through
                  changing algorithms of the digital world, providing our
                  clients with the best campaign results.
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
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Services and Solutions
              </span>
              <h2 className="mil-mb-30">Our Expertise</h2>
              <p className="mil-dark">
                We understand every business needs a unique solution. Our team
                of experts provides a wide range of services catering to the
                needs of businesses of all scales and industries.
              </p>
            </div>
          </div>
          <div className="row mil-mb-30-adapt">
            <div className="col-xl-4">
              <div className="mil-mb-60 conten">
                <div className="mil-number-icon mil-circle mil-mb-30">
                  <span>01</span>
                </div>
                <h4 className="mil-mb-15">Search Engine Optimization (SEO)</h4>
                <p>
                  Business is not easy, especially if you are missing out on the
                  online visibility game. In today’s fast pacing world when
                  every business has made their digital debut, SEO stands as a
                  game changer for many. <br />
                  But don’t worry, our team of experts has got you all covered.
                </p>
                <Link
                      to="/"
                      class="mil-link2 link-right mil-mb-30"
                    >
                      <i class="fas fa-arrow-right"></i>
                    </Link>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60 conten">
                <div className="mil-number-icon mil-lines mil-mb-30">
                  <span>02</span>
                </div>
                <h4 className="mil-mb-15"> Social Media Marketing</h4>
                <p>
                  Let us build your online presence, design your creative
                  strategy and optimize the social media campaigns for your
                  business. Together let’s give the city a new buzz to gossip.
                </p><br/><br/>
                <Link
                      to="/"
                      class="mil-link2 link-right mil-mb-30"
                    >
                      <i class="fas fa-arrow-right"></i>
                    </Link>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60 conten">
                <div className="mil-number-icon mil-mb-30">
                  <span>03</span>
                </div>
                <h4 className="mil-mb-15">Pay Per Click (PPC) </h4>
                <p>
                  Achieve instant visibility and results with our PPC campaigns.
                  Our team creates targeted ad campaigns to drive traffic and
                  convert visitors into customers cost-effectively.
                </p><br/><br/>
                <Link
                      to="/"
                      class="mil-link2 link-right mil-mb-30"
                    >
                      <i class="fas fa-arrow-right"></i>
                    </Link>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60 conten">
                <div className="mil-number-icon mil-circle mil-mb-30">
                  <span>04</span>
                </div>
                <h4 className="mil-mb-15">Content Marketing </h4>
                <p>
                  High-quality content is the cornerstone of a successful
                  digital marketing strategy. We produce compelling,
                  informative, and shareable content that builds your brand and
                  connects with your audience.
                </p>
                <Link
                      to="/"
                      class="mil-link2 link-right mil-mb-30"
                    >
                      <i class="fas fa-arrow-right"></i>
                    </Link>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60 conten">
                <div className="mil-number-icon mil-lines mil-mb-30">
                  <span>05</span>
                </div>
                <h4 className="mil-mb-15">Market Research</h4>
                <p>
                  Make data-driven decisions with our market research services.
                  We analyze industry trends, customer behavior, and competitor
                  strategies to help you stay ahead in the game.
                </p>
                <Link
                      to="/"
                      class="mil-link2 link-right mil-mb-30"
                    >
                      <i class="fas fa-arrow-right"></i>
                    </Link>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60 conten">
                <div className="mil-number-icon mil-mb-30">
                  <span>06</span>
                </div>
                <h4 className="mil-mb-15">Content Writing & Copywriting</h4>
                <p>
                  Our expert writers craft persuasive and SEO-optimized content
                  that resonates with your audience, drives engagement, and
                  encourages action.
                </p><br/>
                <Link
                      to="/"
                      class="mil-link2 link-right mil-mb-30"
                    >
                      <i class="fas fa-arrow-right"></i>
                    </Link>
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
      <section className="mil-gradient-bg mil-deco-right mil-p-120-0">
        {/* <div
          className="mil-deco mil-deco-accent"
          style={{ top: "0", left: "5%" }}
        ></div> */}
        <div className="container">
          <div className=" mil-mb-90">
            <h2 className="mil-light mil-mb-30">
              {" "}
              Why Choose <span className="mil-accent">Us</span>{" "}
            </h2>
            <p className="mil-light-soft conten">
              Experienced Team: Our team of digital marketing experts boasts
              combined experience of over a decade. We've successfully helped
              businesses like yours reach their goals through strategic and
              data-driven digital marketing.
            </p>
            <p className="mil-light-soft conten">
              Local Services & Small Businesses: We understand the unique
              challenges faced by small businesses, and we're dedicated to
              helping you succeed. Our local-focused approach ensures that you
              stand out in your community and attract the right customers.{" "}
            </p>

            <h3 class="mil-light mil-mb-30">
              Your Path to Success Starts Here{" "}
            </h3>
            <p class="mil-mb-60">
              Our services are designed to empower small businesses,
              professionals, entrepreneurs, and mid-size businesses to achieve
              their digital marketing goals. We don't believe in
              one-size-fits-all solutions. Instead, we work closely with you to
              understand your unique needs and objectives. This personalized
              approach allows us to create effective strategies that align with
              your business goals.
            </p>

            <h3 class="mil-light mil-mb-30">
              Digital Marketing Services That Drive Results{" "}
            </h3>
            <p class="mil-mb-60">
              Our focus on Search Engine Optimization, Social Media Marketing,
              pay-per-click, Content Marketing, Market Research, Content
              Writing, and copywriting means we can provide you with a holistic
              digital marketing approach. We ensure that your online presence is
              cohesive, compelling, and optimized for success.
            </p>

            <h3 class="mil-light mil-mb-30">Targeting Your Business Growth </h3>
            <p class="mil-mb-60">
              Our digital marketing strategies are built around your specific
              audience. Whether you're a small business looking to attract local
              customers or a mid-size business aiming to expand globally, we
              have the expertise to help you reach your target audience and
              achieve sustainable growth{" "}
            </p>

            <h3 class=" mil-light mil-mb-30">
              Get Your Business to New Heights{" "}
            </h3>
            <p class="mil-mb-60">
              If you're ready to take your business to new heights, it's time to
              harness the power of digital marketing. Contact us today and
              discover how our experienced team and local focus can make a real
              difference. Get your business noticed, drive traffic, and convert
              visitors into loyal customers. Together, we'll make your business
              the success story it deserves to be.
              <br />
              Ready to get started? Contact us today and take the first step
              toward realizing your digital marketing goals. Your success is our
              priority, and we're here to help you get there.
            </p>

            <h3 className="mil-light mil-mb-30">
              CTA: Get your business to new heights!{" "}
            </h3>
          </div>
        </div>
      </section>
      {/* <!-- services end --> */}

      <Footer />
    </div>
  );
};

export default Digital;
