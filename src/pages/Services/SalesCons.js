import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
const SalesCons = () => {
  return (
    <div className="mil-wrapper">
    <Navbar />

    {/* <!-- banner --> */}
    <div className="mil-banner-sm bg-white shadow shadow-bottom shadow-md">
      
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
                  <Link to="/Salesforce">Salesforce Consulting</Link>
                </li>
              </ul>

              
                <h2 className="mil-uppercase " style={{ color: "#1B2F5B" }}>
                  Saleforce Consulting Services
                </h2>
              
            </div>

            <img src="assets/mockup/salesforce1.png" alt="mus" className="col-md-4" />
          </div>
        </div>
        <div className="mil-fixed-button-container">
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
              Salesforce, as the leading CRM platform, offers a vast array of services and features to businesses aiming to streamline operations and enhance customer relationships. However, making the most of these capabilities requires a deep understanding of the platform and the ability to select and configure the right combination of features and services. This is where our team of dedicated consultants steps in, ready to assist you in optimizing Salesforce for your unique business needs
              </p>
            </div>
            <div className=" mil-mb-30">
              <p className="conten">
              Our consultants bring a wealth of experience and expertise to the table, having spent over a decade working with Salesforce and helping businesses from various industries achieve their objectives. With this depth of knowledge, they can not only guide you in choosing the most suitable services but also anticipate your requirements and challenges.
              </p>
            </div>
             <div className=" mil-mb-30">
              <p className="conten">
              The journey begins with a meticulous analysis of your business ideas, organizational structure, and industry-specific needs. This comprehensive evaluation is the foundation upon which we build a customized set of services tailored to your business. It is only when we have delved into the core of your operations and goals that we begin the process of selecting the ideal features and services that will best serve your purposes
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
            <img src="assets/salesforce/CPQ.png" alt="icon" style={{width:"200px" , height:"80px"}}/>
          </div>
          <h5 className="mil-mb-20 mt-5">
            <span className="mil-accent">01.</span>&nbsp; Salesforce CPQ 
            
          </h5>
        </div>
      </div>
      <div className="col-md-6 col-xl-3">
        <div className="mil-icon-box mil-center mil-mb-60">
          <div className="mil-icon-frame1 mil-icon-frame-md mil-mb-30">
            <img src="assets/salesforce/fsl.png" alt="icon" style={{width:"200px",height:"50px"}}/>
          </div>
          <h5 className="mil-mb-20 mt-5">
            <span className="mil-accent">02.</span>&nbsp; Salesforce FSL 
          </h5>
        </div>
      </div>
      <div className="col-md-6 col-xl-3">
        <div className="mil-icon-box mil-center mil-mb-60">
          <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
            <img src="assets/salesforce/salescloud.jpg" alt="icon" style={{width:"200px",height:"150px"}}/>
          </div>
          <h5 className="mil-mb-20 mt-5">
            <span className="mil-accent">03.</span>&nbsp; Sales Cloud 
            
          </h5>
        </div>
      </div>
      <div className="col-md-6 col-xl-3">
        <div className="mil-icon-box mil-center mil-mb-60">
          <div className="mil-icon-frame1 mil-icon-frame-md mil-mb-30">
            <img src="assets/salesforce/service.png" alt="icon"style={{width:"170px",height:"60px"}}/>
          </div>
          <h5 className="mil-mb-20 mt-5">
            <span className="mil-accent">04.</span>&nbsp;Service Cloud 
          </h5>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 col-xl-3">
        <div className="mil-icon-box mil-center mil-mb-60">
          <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
            <img src="assets/salesforce/marketing.png" alt="icon" style={{width:"170px",height:"60px"}}/>
          </div>
          <h5 className="mil-mb-20 mt-5">
            <span className="mil-accent">05.</span>&nbsp;Marketing Cloud 
            
          </h5>
        </div>
      </div>
      <div className="col-md-6 col-xl-3">
        <div className="mil-icon-box mil-center mil-mb-60">
          <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
            <img src="assets/salesforce/experience.png" alt="icon" style={{width:"170px",height:"60px"}}/>
          </div>
          <h5 className="mil-mb-20 mt-5">
            <span className="mil-accent">06.</span>&nbsp;Experience Cloud 
          </h5>
        </div>
      </div>
      <div className="col-md-6 col-xl-3">
        <div className="mil-icon-box mil-center mil-mb-60">
          <div className="mil-icon-frame1 mil-icon-frame-md mil-mb-30">
            <img src="assets/salesforce/financialsercvice.png" alt="icon" style={{width:"160px",height:"100px"}}/>
          </div>
          <h5 className="mil-mb-20 mt-5">
            <span className="mil-accent">07.</span>&nbsp;Financial Services Cloud 
            
          </h5>
        </div>
      </div>
      <div className="col-md-6 col-xl-3">
        <div className="mil-icon-box mil-center mil-mb-60">
          <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
            <img src="assets/salesforce/commerce.png" alt="icon"style={{width:"160px",height:"100px"}} />
          </div>
          <h5 className="mil-mb-20 mt-5">
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
  );
}

export default SalesCons