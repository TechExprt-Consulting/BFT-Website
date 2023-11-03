import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
const Ppc = () => {
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
              <Link to="/digital">Digital Marketing</Link>
            </li>
            <li>
              <Link to="/ppc">PPC</Link>
            </li>
          </ul>
          <h2 className="mil-uppercase">Pay Per Click </h2>
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
                
                Achieve instant visibility and results with our PPC campaigns. Our team creates precision-targeted ad campaigns to drive valuable traffic and convert visitors into loyal customers, all while keeping the approach cost-effective. Digital landscape is highly competitive and so there is a cost assigned to each click. In absence of knowledge and expertise, chances that one might end up losing a chunk of digital marketing spend are relatively higher.
</p>            </div>
<div className=" mil-mb-30">
              <p>
                
                So when you choose us as your PPC partner, you don’t just invest in online advertising but you invest in a process that is driven by research, strategy, precision, data and creativity. The campaigns we design for you are meticulously designed results of intense brainstorming sessions, concept development, creative strategy, all underpinned by deep research</p>            </div>
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
            <h2 className="mil-mb-30">Our Comprehensive PPC Services   </h2>
            <p className="mil-dark">
            At BytesFarms Technologies, we offer a comprehensive suite of PPC services to help you maximize your ROI:   </p>
          </div>
        </div>
        <div className="row mil-mb-30-adapt">
          <div className="col-xl-4">
            <div className="mil-mb-60 conten">
              <div className="mil-number-icon mil-circle mil-mb-30">
                <span>01</span>
              </div>
              <h4 className="mil-mb-15">Keyword Research</h4>
              <p>
              We conduct thorough research to identify the most relevant and high-converting keywords for your industry and target audience.</p>
              
            </div>
          </div>
          <div className="col-xl-4">
            <div className="mil-mb-60 conten">
              <div className="mil-number-icon mil-lines mil-mb-30">
                <span>02</span>
              </div>
              <h4 className="mil-mb-15">Ad Campaign Creation</h4>
              <p>
              Our expert PPC team creates highly targeted and compelling ad campaigns designed to drive clicks and conversions. </p>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="mil-mb-60 conten">
              <div className="mil-number-icon mil-mb-30">
                <span>03</span>
              </div>
              <h4 className="mil-mb-15">Ad Copywriting</h4>
              <p>
              We craft persuasive ad copy that engages users and encourages them to take the desired action</p>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="mil-mb-60 conten">
              <div className="mil-number-icon mil-circle mil-mb-30">
                <span>04</span>
              </div>
              <h4 className="mil-mb-15"> Bid Management</h4>
              <p>
              We monitor and adjust your bids to ensure you get the best return on your investment.  </p>
              
            </div>
          </div>
          <div className="col-xl-4">
            <div className="mil-mb-60 conten">
              <div className="mil-number-icon mil-lines mil-mb-30">
                <span>05</span>
              </div>
              <h4 className="mil-mb-15">Ad Testing and Optimization</h4>
              <p>
              We continually test and optimize your ads to maximize their effectiveness. </p>
              
            </div>
          </div>
          <div className="col-xl-4">
            <div className="mil-mb-60 conten">
              <div className="mil-number-icon mil-mb-30">
                <span>06</span>
              </div>
              <h4 className="mil-mb-15">Performance Tracking and Reporting</h4>
              <p>
              We provide regular reports on the performance of your PPC campaigns, so you can see the tangible results of our efforts. </p>
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
              <span className="mil-accent">Search Engine Optimization</span>{" "}
            </h2>
            {/* <p className="mil-light-soft">
              With years of experience and a proven track record, BytesFarms is
              your trusted partner for Salesforce Developement.
              <br /> Our dedicated team of experts is committed to delivering
              results that matter, helping you achieve efficiency, agility, and
              innovation in your organization.
            </p> */}
          </div>
          <div className="row mil-mb-30-adapt">
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="assets/icon/sm/6.svg" alt="icon" />
                </div>
                <p className="mil-light"> Strategin Campaign Creation</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="assets/icon/sm/2.svg" alt="icon" />
                </div>
                <p className="mil-light">Audience & Device Analysis</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="assets/icon/sm/7.svg" alt="icon" />
                </div>
                <p className="mil-light">Custom Conversion Analysis</p>
              </div>
            </div>
            

            

            
          </div>
          <div className="mil-text-center">
            <Link
              to="/Contact"
              className="mil-button mil-border mil-light mil-mb-30"
            >
              <span>Talk To Our SEO Experts</span>
            </Link>
          </div>
        </div>
      </section>
    {/* <!-- services end --> */}

    <Footer />
  </div>
  )
}

export default Ppc