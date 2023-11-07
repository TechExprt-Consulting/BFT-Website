import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
const SalesMig = () => {
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
                            <Link to="/Salesforce">Salesforce</Link>
                        </li>
                        {/* <li>
                            <Link to="/Salesforce">Salesforce Migration
                            
                            </Link>
                        </li> */}
                    </ul>
                    <h2 className="mil-uppercase" style={{ color: "#1B2F5B" }}>
                    Salesforce Migration
                    </h2>
                </div>
                <div className="col-md-4 text-center">
                    <img src="assets/mockup/salesforce1.png" alt="mus" className="img-fluid" />
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
              Salesforce Migration is the process of moving data, configurations, and customizations from one Salesforce instance to another. Whether it's upgrading to a new version, merging organizations, or shifting from an on-premises CRM to Salesforce, migration ensures a seamless transition and continuity of business operations within the new CRM environment.
              </p>
            </div>
            <div className=" mil-mb-30">
              <p className="conten">
              Salesforce Migration can be a complex undertaking, involving careful planning, data mapping, data extraction, transformation, and loading (ETL), and thorough testing to guarantee a successful transition. It is essential for organizations to maintain data integrity and functionality while migrating to a new Salesforce environment.              </p>
            </div>
             <div className=" mil-mb-30">
              <p className="conten">
              Salesforce Migration is a crucial process that ensures a smooth transition to a new CRM environment while maintaining data integrity and functionality. Whether it's an upgrade to the latest version, data centre migration, or merging organizations, migration is essential for organizations looking to adapt to changing business requirements and stay current with the latest CRM capabilities.
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

export default SalesMig