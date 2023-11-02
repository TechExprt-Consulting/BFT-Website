import React from "react";
import "./Service.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Salesforce = () => {
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
                <Link to="/Salesforce">Salesforce</Link>
              </li>
            </ul>
            <h2 className="mil-uppercase">Salesforce Developement</h2>
          </div>
        </div>
      </div>
      {/* <!-- banner end --> */}

      {/* <!-- call to action --> */}
      <section className="mil-p-120-90  pt-5">
        {/* <div
          className="mil-deco"
          style={{ bottom: "0", right: "25%", transform: "rotate(180deg)" }}
        ></div> */}
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
                  Salesforce is a leading customer relationship management (CRM)
                  platform that helps businesses manage their sales, customer
                  service, and marketing needs efficiently.
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

{/* challenges */}


<div className="mil-icon-box mil-center mil-mb-60 mt-5">
        CHALLENGES
        <h2 className="mil-mb-20 mt-2 " >What is Your Challenge Today?</h2>
        <p>
          Explore the challenges that connect to your situation. We can work
          together to <br />
          chart the best path forward for your specific organization and
          circumstance.
        </p>
      </div>
      
        
        <Accordion style={{ backgroundColor: "#1B2F5B", margin: "40px",color:"white"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className="" 
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
            <h6 className="mt-2 mb-2 text-white font-weight-500">
              Related offerings
            </h6>
            <div className="col-md-11 d-flex">
            <div className="col-md-7">
            <div>
              Strategy
              <Link to="/deveops" class="mil-link3 link-right">
                <i class="fas fa-arrow-right"></i>
              </Link>
            </div>{" "}
            
           
            <div>
              Stra
              <Link to="/deveops" class="mil-link3 link-right">
                <i class="fas fa-arrow-right"></i>
              </Link>
            </div>
            <div>
              Stra
              <Link to="/deveops" class="mil-link3 link-right">
                <i class="fas fa-arrow-right"></i>
              </Link>
            </div>
            </div>
            <div className="col-md-4">
            <div>
              Stra
              <Link to="/deveops" class="mil-link3 link-right">
                <i class="fas fa-arrow-right"></i>
              </Link>
            </div>
            <div>
              Stra
              <Link to="/deveops" class="mil-link3 link-right">
                <i class="fas fa-arrow-right"></i>
              </Link>
            </div>
            </div>
            </div>
          </AccordionDetails>
        </Accordion>
       
{/* challenges end */}



      {/* <!-- steps --> */}
      <section className="mil-p-120-90">
        {/* <div
          className="mil-deco"
          style={{ bottom: "0", right: "35%", transform: "rotate(180deg)" }}
        ></div> */}
        <div className="container">
          <div className="row">
            <div className="col-12 mil-mb-90">
             
              <h2 className="mil-mb-30">
                Our Salesforce Developement Services Let You Win Big
              </h2>
              <p className="mil-dark">
                DevOps practices combine development and IT operations,
                emphasizing collaboration and automation, leading to faster
                software development, continuous integration, and delivery.
              </p>
            </div>
          </div>
          <div className="row mil-mb-30-adapt">
            <div className="col-xl-4">
              <div className="mil-mb-60 conten">
                <div className="mil-number-icon mil-circle mil-mb-30">
                  <span>01</span>
                </div>
                <h4 className="mil-mb-15">Salesforce App Exchange</h4>
                <p >
                  Are you ready to take your Salesforce experience to the next
                  level? As a Salesforce AppExchange Partner, we provide the
                  ultimate solution to elevate your business, streamline your
                  processes, and expand your reach within the Salesforce
                  Ecosystem . With our expert guidance and unmatched services,
                  you can unlock new opportunities and soar to new heights.
                  Discover the advantages of partnering with us and become a
                  driving force in the Salesforce AppExchange community.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60 conten">
                <div className="mil-number-icon mil-lines mil-mb-30">
                  <span>02</span>
                </div>
                <h4 className="mil-mb-15"> Salesforce Consulting Services</h4>
                <p>
                  Salesforce Consulting services involve expert guidance and
                  support for businesses looking to leverage the Salesforce
                  platform effectively. These services cater to the diverse
                  needs of organizations by offering tailored solutions that
                  streamline processes, enhance customer relationship
                  management, and drive growth. Salesforce consultants, armed
                  with a deep understanding of the platform's capabilities, work
                  closely with clients to analyze their requirements, design
                  customized solutions, and implement strategies that align with
                  business objectives.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60 conten">
                <div className="mil-number-icon mil-mb-30">
                  <span>03</span>
                </div>
                <h4 className="mil-mb-15">Salesforce Customization </h4>
                <p>
                  Salesforce Customization Services involve tailoring the
                  renowned Salesforce platform to meet the unique and specific
                  needs of businesses. These services encompass a range of
                  solutions aimed at optimizing processes, enhancing user
                  experience, and driving overall efficiency. From designing and
                  implementing custom workflows to creating personalized
                  dashboards and reports, Salesforce customization empowers
                  organizations to align the CRM system seamlessly with their
                  operations.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60 conten">
                <div className="mil-number-icon mil-circle mil-mb-30">
                  <span>04</span>
                </div>
                <h4 className="mil-mb-15">Salesforce Implementation </h4>
                <p>
                  Salesforce Implementation Consulting involve the comprehensive
                  process of integrating and customizing Salesforce, a leading
                  customer relationship management (CRM) platform, to suit a
                  company's specific needs and workflows. These services
                  encompass a range of tasks, from initial consultation and
                  requirement analysis to configuration, data migration and user
                  training.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60 conten">
                <div className="mil-number-icon mil-lines mil-mb-30">
                  <span>05</span>
                </div>
                <h4 className="mil-mb-15">Salesforce Integration</h4>
                <p>
                  Salesforce Integration Services provide seamless connectivity
                  between Salesforce, a leading customer relationship management
                  (CRM) platform, and other applications, systems, and data
                  sources. These services enable businesses to streamline their
                  operations by allowing data to flow effortlessly between
                  different software solutions.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60 conten">
                <div className="mil-number-icon mil-mb-30">
                  <span>06</span>
                </div>
                <h4 className="mil-mb-15">Salesforce Managed Service</h4>
                <p>
                  Salesforce Managed Services refer to comprehensive and ongoing
                  support solutions provided by experienced professionals to
                  optimize and streamline the usage of Salesforce platforms for
                  businesses. These services encompass a range of activities,
                  including system configuration, customization, data
                  management, integration, troubleshooting, and user training.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60 conten">
                <div className="mil-number-icon mil-circle mil-mb-30">
                  <span>07</span>
                </div>
                <h4 className="mil-mb-15">Salesforce Migration</h4>
                <p>
                  Salesforce Migration services encompass the specialized
                  assistance and expertise required to smoothly transition an
                  organization's existing data, processes, and applications to
                  the Salesforce platform. This intricate process involves
                  meticulous planning, data mapping, integration, and validation
                  to ensure that the migration is carried out efficiently and
                  without disrupting the day-to-day operations.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60 conten">
                <div className="mil-number-icon mil-lines mil-mb-30">
                  <span>08</span>
                </div>
                <h4 className="mil-mb-15">Salesforce IT Support</h4>
                <p>
                  Salesforce IT Support Services offer comprehensive solutions
                  to ensure seamless functionality and optimal utilization of
                  the Salesforce platform. These services encompass technical
                  assistance, issue resolution, and expert guidance tailored to
                  meet the unique needs of businesses.
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
          {/* <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
            High Quality and Performance
          </span> */}
          <h2 className="mil-mb-90">
            Our Approach To <span className="mil-accent">Salesforce</span>{" "}
            Developement
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
                    <span className="mil-accent">01</span>Quality Work
                  </h5>
                  <p>Assurance of quality work from our side!</p>
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
                    <span className="mil-accent">02</span> 24/7 Support
                  </h5>
                  <p>24/7 Support by expert salesforce consultants</p>
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-md-6 col-xl-6">
                <Link to="/Contact" className="mil-button mil-border mil-mb-30">
                  <span>Talk To Our Salesforce Experts</span>
                </Link>
              </div>
              <div className="col-md-6 col-xl-6">
                <div className="mil-adaptive-right">
                  {/* <Link to="" className="mil-link mil-mb-30"><span>See More</span><i className="fas fa-arrow-right"></i></Link> */}
                </div>
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
                src="assets/project/14.png"
                alt="partner"
                style={{ width: "130px" }}
              />
            </a>
            <a href="#.">
              <img
                src="assets/project/16.png"
                alt="partner"
                style={{ height: "90px" }}
              />
            </a>
            <a href="#.">
              <img src="assets/project/17.png" alt="partner" />
            </a>
            {/* <a href="#.">
              <img src="assets/project/5.png" alt="partner" />
            </a> */}
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
              <span className="mil-accent">Salesforce Applications</span>{" "}
            </h2>
            <p className="mil-light-soft">
              With years of experience and a proven track record, BytesFarms is
              your trusted partner for Salesforce Developement.
              <br /> Our dedicated team of experts is committed to delivering
              results that matter, helping you achieve efficiency, agility, and
              innovation in your organization.
            </p>
          </div>
          <div className="row mil-mb-30-adapt">
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="assets/icon/sm/6.svg" alt="icon" />
                </div>
                <p className="mil-light"> Consultation</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="assets/icon/sm/2.svg" alt="icon" />
                </div>
                <p className="mil-light">Design</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="assets/icon/sm/7.svg" alt="icon" />
                </div>
                <p className="mil-light">Developement</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="assets/icon/sm/3.svg" alt="icon" />
                </div>
                <p className="mil-light">Testing</p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="assets/icon/sm/1.svg" alt="icon" />
                </div>
                <p className="mil-light">Deployment</p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="assets/icon/sm/1.svg" alt="icon" />
                </div>
                <p className="mil-light">Optimization</p>
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
      {/* <!-- services end --> */}

      <Footer />
    </div>
  );
};

export default Salesforce;
