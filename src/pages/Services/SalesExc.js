import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
const SalesExc = () => {
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
                  <Link to="/Salesforce">Salesforce App Exchange</Link>
                </li>
              </ul>

              
                <h2 className="mil-uppercase " style={{ color: "#1B2F5B" }}>
                  Saleforce App Exchange
                </h2>
              
            </div>

            <img src="assets/mockup/salesforce1.png" alt="mus" className="col-md-4" />
          </div>
        </div>
        <div className="">
          <button className="mil-vertical-button text-dark ">
           <Link to='/contact'> Get a Free Quote!</Link>
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
              Salesforce AppExchange is a pool of third-party applications and integrations that manifolds the capabilities of the Salesforce CRM platform. It allows organizations to amplify their CRM environment with the addition of new features, industry-specific solutions, and integrations with other business tools, all of which contribute to improved productivity, better customer engagement, and streamlined operations.
              </p>
            </div>
            <div className=" mil-mb-30">
              <p className="conten">
              Salesforce AppExchange provides a wide range of solutions that cater to the unique needs of businesses across various industries. From marketing and sales automation to customer support and analytics, organizations can find applications that complement Salesforce's native features.
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
            <h2 className="mil-mb-30">Technologies and Tools We Use </h2>
           {/* <p>ScienceSoft's salesforce team is ready to assist you in implementing:</p> */}
          </div>
        </div>
        <div className="row">
      <div className="col-md-6 col-xl-3">
        <div className="mil-icon-box mil-center mil-mb-60">
          <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
            <img src="assets/icon/5.svg" alt="icon" />
          </div>
          <h5 className="mil-mb-20">
            <span className="mil-accent">01.</span>&nbsp;Lightning Web Components 
            
          </h5>
        </div>
      </div>
      <div className="col-md-6 col-xl-3">
        <div className="mil-icon-box mil-center mil-mb-60">
          <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
            <img src="assets/icon/5.svg" alt="icon" />
          </div>
          <h5 className="mil-mb-20">
            <span className="mil-accent">02.</span>&nbsp;Apex Code Visual Force
          </h5>
        </div>
      </div>
      <div className="col-md-6 col-xl-3">
        <div className="mil-icon-box mil-center mil-mb-60">
          <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
            <img src="assets/icon/5.svg" alt="icon" />
          </div>
          <h5 className="mil-mb-20">
            <span className="mil-accent">03.</span>&nbsp;Visual Force 
            
          </h5>
        </div>
      </div>
      <div className="col-md-6 col-xl-3">
        <div className="mil-icon-box mil-center mil-mb-60">
          <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
            <img src="assets/icon/5.svg" alt="icon" />
          </div>
          <h5 className="mil-mb-20">
            <span className="mil-accent">04.</span>&nbsp; Customer 360 Platform
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
            <span className="mil-accent">05.</span>&nbsp; Site.com
            
          </h5>
        </div>
      </div>
      <div className="col-md-6 col-xl-3">
        <div className="mil-icon-box mil-center mil-mb-60">
          <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
            <img src="assets/icon/5.svg" alt="icon" />
          </div>
          <h5 className="mil-mb-20">
            <span className="mil-accent">06.</span>&nbsp; REST/SOAP API
          </h5>
        </div>
      </div>
      <div className="col-md-6 col-xl-3">
        <div className="mil-icon-box mil-center mil-mb-60">
          <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
            <img src="assets/icon/5.svg" alt="icon" />
          </div>
          <h5 className="mil-mb-20">
            <span className="mil-accent">07.</span>&nbsp; JavaScript Frameworks
            
          </h5>
        </div>
      </div>
      <div className="col-md-6 col-xl-3">
        <div className="mil-icon-box mil-center mil-mb-60">
          <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
            <img src="assets/icon/5.svg" alt="icon" />
          </div>
          <h5 className="mil-mb-20">
            <span className="mil-accent">08.</span>&nbsp; Salesforce 1
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
              <span className="mil-accent">Salesforce Applications</span>{" "}
            </h2>
           
          </div>
          <div className="row mil-mb-30-adapt">
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-ligh">
                  <img src="assets/icon/sm/6.svg" alt="icon" />
                </div>
                <p className="mil-ligh "> Industry experts</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-ligh">
                  <img src="assets/icon/sm/6.svg" alt="icon" />
                </div>
                <p className="mil-ligh ">Six decades of combined professional expertise</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-ligh">
                  <img src="assets/icon/sm/6.svg" alt="icon" />
                </div>
                <p className="mil-ligh ">SF Delivery Exp - 6 years</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-ligh">
                  <img src="assets/icon/sm/6.svg" alt="icon" />
                </div>
                <p className="mil-ligh ">7x Certified SF Architect</p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-ligh">
                  <img src="assets/icon/sm/6.svg" alt="icon" />
                </div>
                <p className="mil-ligh ">4x Certified SF Dev</p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-ligh">
                  <img src="assets/icon/sm/6.svg" alt="icon" />
                </div>
                <p className="mil-ligh ">Salesforce Partner</p>
              </div>
            </div>
          </div>
          {/* <div className="mil-text-center">
            <Link
              to="/Contact"
              className="mil-button mil-border mil-ligh mil-mb-30"
            >
              <span>Talk To Our Salesforce Experts</span>
            </Link>
          </div> */}
        </div>
      </section>

    <Footer />
  </div>
  )
}

export default SalesExc