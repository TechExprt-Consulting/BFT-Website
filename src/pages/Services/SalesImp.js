import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const SalesImp = () => {
  return (
    <div className="mil-wrapper">
    <Navbar />

    {/* <!-- banner --> */}
    <div className="mil-banner-sm bg-white shadow shadow-bottom shadow-md">
      {/* <img
        src="assets/deco/map.png"
        alt="background"
        className="mil-background-image"
      /> */}
      {/* <div
        className="mil-deco mil-deco-accent"
        style={{ top: "47%", right: "10%", transform: "rotate(90deg)" }}
      ></div> */}
      <div className="mil-banner-content">
        <div className="container mil-relative">
          <div className="d-flex">
            <div className="d-flex row  ">
              <ul className="mil-breadcrumbs mil-mb-30 ">
                <li>
                  <Link to="/Home">Home</Link>
                </li>
                <li>
                  <Link to="">Service</Link>
                </li>
                <li>
                  <Link to="/Salesforce">SalesForce</Link>
                </li>
                <li>
                  <Link to="/Salesforce">Salesforce Implementation</Link>
                </li>
              </ul>

              
                <h2 className="mil-uppercase " style={{ color: "#1B2F5B" }}>
                  Saleforce Implementation
                </h2>
              
            </div>

            <img src="assets/mockup/salesforce1.png" alt="mus" className="col-md-4" />
          </div>
        </div>
        <div className="">
          <button className="mil-vertical-button text-dark ">
            Get a Free Quote!
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
              Salesforce implementation is a multifaceted process that requires careful planning and execution. It majorly revolves around configuring and setting up the Salesforce CRM platform as per the needs and requirements of the business. To streamline operations, enhance customer relationships and boost growth, it is essential that implementation is planned thoroughly and factors such as data migration, change in management and user adoption are also taken into consideration while planning. A successful implementation ensures that the organisation will be able to optimise the features and functionalities available on Salesforce to the fullest.
              </p>
            </div>
            <div className=" mil-mb-30">
              <p className="conten">
              Our consultants bring a wealth of experience and expertise to the table, having spent over a decade working with Salesforce and helping businesses from various industries achieve their objectives. With this depth of knowledge, they can not only guide you in choosing the most suitable services but also anticipate your requirements and challenges.
              </p>
            </div>
             <div className=" mil-mb-30">
              <p className="conten">
              Sales Implementation when done, has the power to transform the way you do business, and helps you achieve your business goals and targets in a seamless manner
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
            <h2 className="mil-mb-30">Salesforce Products We Work With </h2>
           
          </div>
        </div>
        <div className="row">
      <div className="col-md-6 col-xl-3">
        <div className="mil-icon-box mil-center mil-mb-60">
          <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
            <img src="assets/icon/5.svg" alt="icon" />
          </div>
          <h5 className="mil-mb-20">
            <span className="mil-accent">01.</span>&nbsp; Salesforce CPQ 
            
          </h5>
        </div>
      </div>
      <div className="col-md-6 col-xl-3">
        <div className="mil-icon-box mil-center mil-mb-60">
          <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
            <img src="assets/icon/5.svg" alt="icon" />
          </div>
          <h5 className="mil-mb-20">
            <span className="mil-accent">02.</span>&nbsp; Salesforce FSL 
          </h5>
        </div>
      </div>
      <div className="col-md-6 col-xl-3">
        <div className="mil-icon-box mil-center mil-mb-60">
          <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
            <img src="assets/icon/5.svg" alt="icon" />
          </div>
          <h5 className="mil-mb-20">
            <span className="mil-accent">03.</span>&nbsp; Sales Cloud 
            
          </h5>
        </div>
      </div>
      <div className="col-md-6 col-xl-3">
        <div className="mil-icon-box mil-center mil-mb-60">
          <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
            <img src="assets/icon/5.svg" alt="icon" />
          </div>
          <h5 className="mil-mb-20">
            <span className="mil-accent">04.</span>&nbsp;Service Cloud 
          </h5>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 col-xl-3">
        <div className="mil-icon-box mil-center mil-mb-60">
          <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
            <img src="assets/icon/5.svg" alt="icon" />
          </div>
          <h5 className="mil-mb-20">
            <span className="mil-accent">05.</span>&nbsp;Marketing Cloud 
            
          </h5>
        </div>
      </div>
      <div className="col-md-6 col-xl-3">
        <div className="mil-icon-box mil-center mil-mb-60">
          <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
            <img src="assets/icon/5.svg" alt="icon" />
          </div>
          <h5 className="mil-mb-20">
            <span className="mil-accent">06.</span>&nbsp;Experience Cloud 
          </h5>
        </div>
      </div>
      <div className="col-md-6 col-xl-3">
        <div className="mil-icon-box mil-center mil-mb-60">
          <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
            <img src="assets/icon/5.svg" alt="icon" />
          </div>
          <h5 className="mil-mb-20">
            <span className="mil-accent">07.</span>&nbsp;Financial Services Cloud 
            
          </h5>
        </div>
      </div>
      <div className="col-md-6 col-xl-3">
        <div className="mil-icon-box mil-center mil-mb-60">
          <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
            <img src="assets/icon/5.svg" alt="icon" />
          </div>
          <h5 className="mil-mb-20">
            <span className="mil-accent">08.</span>&nbsp;Commerce Cloud 
          </h5>
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

    
   

    <section className="mil-gradient-bg mil-deco-right mil-p-120-0">
        <div
          className="mil-deco mil-deco-accent"
          style={{ top: "0", left: "5%" }}
        ></div>
        <div className="container">
          <div className="mil-text-center mil-mb-90">
            <h2 className="mil-light mil-mb-30">
              {" "}
              Why Choose our{" "}
              <span className="mil-accent">Salesforce Applications</span>{" "}
            </h2>
           
          </div>
          <div className="row mil-mb-30-adapt">
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="assets/icon/sm/6.svg" alt="icon" />
                </div>
                <p className="mil-light "> Industry experts</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="assets/icon/sm/6.svg" alt="icon" />
                </div>
                <p className="mil-light ">Six decades of combined professional expertise</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="assets/icon/sm/6.svg" alt="icon" />
                </div>
                <p className="mil-light ">SF Delivery Exp - 6 years</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="assets/icon/sm/6.svg" alt="icon" />
                </div>
                <p className="mil-light ">7x Certified SF Architect</p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="assets/icon/sm/6.svg" alt="icon" />
                </div>
                <p className="mil-light ">4x Certified SF Dev</p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="assets/icon/sm/6.svg" alt="icon" />
                </div>
                <p className="mil-light ">Salesforce Partner</p>
              </div>
            </div>
          </div>
          <div className="mil-text-center">
            <Link
              to="/Contact"
              className="mil-button mil-border mil-light mil-mb-30"
            >
              <span>Talk To Our Salesforce Experts</span>
            </Link>
          </div>
        </div>
      </section>

    <Footer />
  </div>
  )
}

export default SalesImp