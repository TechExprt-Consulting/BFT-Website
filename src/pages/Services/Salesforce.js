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
      <Navbar />

      {/* <!-- banner --> */}
      {/* <div className="mil-banner-sm bg-white shadow shadow-bottom shadow-md">
       
        <div className="mil-banner-content ">
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
            <div className="d-flex ">
              <div className="d-flex row">
                <h2 className="mil-uppercase" style={{ color: "#1B2F5B" }}>
                  Salesforce Services
                </h2>

                <p className=" conten">
                  Are you ready to take your Salesforce experience to the next
                  level? As a Salesforce AppExchange Partner, we provide the
                  ultimate solution to elevate your business, streamline your
                  processes, and expand your reach within the Salesforce
                  Ecosystem. With our expert guidance and unmatched services,
                  you can unlock new opportunities and soar to new heights.
                  Discover the advantages of partnering with us and become a
                  driving force in the Salesforce AppExchange community. As a
                  seasoned Salesforce AppExchange Partner, we bring a wealth of
                  experience and expertise to the table. Our team of certified
                  professionals has a deep understanding of Salesforce's
                  intricate ecosystem, ensuring that your app stands out from
                  the competition.
                </p>
              </div>
              <img
                src="assets/mockup/salesforce1.png"
                alt="mus"
                className="col-md-4 mockup"
              />
            </div>
          </div>
          <div className="" id="mil-quote-button">
            <button className="mil-vertical-button text-dark ">
              Get a Free Quote!
            </button>
          </div>
        </div>
      </div> */}



<div className="mil-banner-sm bg-white shadow shadow-bottom shadow-md">
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
      <div className="d-flex flex-column-reverse flex-md-row">
        <div className="d-flex flex-column col-md-8">
          <h2 className="mil-uppercase mt-2" style={{ color: "#1B2F5B" }}>
            Salesforce Services
          </h2>

          <p className="conten ">
            Are you ready to take your Salesforce experience to the next level?
            As a Salesforce AppExchange Partner, we provide the ultimate
            solution to elevate your business, streamline your processes, and
            expand your reach within the Salesforce Ecosystem. With our expert
            guidance and unmatched services, you can unlock new opportunities
            and soar to new heights. Discover the advantages of partnering with
            us and become a driving force in the Salesforce AppExchange
            community. As a seasoned Salesforce AppExchange Partner, we bring a
            wealth of experience and expertise to the table. Our team of
            certified professionals has a deep understanding of Salesforce's
            intricate ecosystem, ensuring that your app stands out from the
            competition.
          </p>

          <div className="mil-quote-button ">
            <button className="mil-vertical-button text-dark ">
             <Link to='/contact'> Get a Free Quote!</Link>
            </button>
          </div>
        </div>
        <img
          src="assets/mockup/salesforce1.png"
          alt="mus"
          className="col-md-4 mockup"
        />
      </div>
    </div>
  </div>
</div>

      {/* <!-- banner end --> */}
      {/* challenges */}

      <div className="mil-icon-box mil-center mil-mb-60 mt-5">
        CHALLENGES
        <h2 className="mil-mb-20 mt-2 ">What is your challenge today?</h2>
        <p className="h5">
          Explore the challenges that connect to your situation. We can work
          together to <br />
          chart the best path forward for your specific organization and
          circumstance.
        </p>
      </div>

      <div className="container">
        <Accordion
          style={{
            backgroundColor: "#3279a8",
            marginBottom: "20px",
            color: "white",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className=""
          >
            <Typography className="fw-bold mil-uppercase">
              What is a CRM?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A Customer Relationship Management (CRM) system is a software tool
              or platform that helps businesses manage interactions and
              relationships with their customers. It centralised customer data,
              tracks communication history, and provides tools for sales,
              marketing, and customer support teams to effectively engage with
              clients. The goal of a CRM is to improve customer satisfaction,
              streamline processes, and ultimately drive business growth by
              fostering stronger and more personalised connections with
              customers.
            </Typography>
            <h6 className="mt-4 mb-4 text-white font-weight-500 ">
              Salesforce Consulting Services -
            </h6>
            <div className="col-md-11 d-flex">
              <div className="col-md-7">
                <div>
                  Salesforce Implementation
                  <Link to="/salesforceImplementation" class="mil-link3 link-right">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>{" "}
                <div>
                  Salesforce Customization
                  <Link to="/salesforceCustomization" class="mil-link3 link-right">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
                <div>
                  Salesforce Integration
                  <Link to="/salesforceIntegration" class="mil-link3 link-right">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  Salesforce Migration
                  <Link to="/salesforceMigration" class="mil-link3 link-right">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
                <div>
                  Salesforce App Exchange
                  <Link to="/salesforceAppExchange" class="mil-link3 link-right">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            backgroundColor: "#3279a8",
            marginBottom: "20px",
            color: "white",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className=""
          >
            <Typography className="fw-bold mil-uppercase">
              What is the difference between a CRM and ERP?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A Customer Relationship Management (CRM) system focuses on
              managing customer interactions and relationships, while an
              Enterprise Resource Planning (ERP) system integrates various
              internal business processes like finance, HR, and inventory
              management. CRM is customer-centric, enhancing sales and service,
              while ERP optimizes internal operations for efficiency and
              productivity.
            </Typography>
            <h6 className="mt-4 mb-4 text-white font-weight-500">
              Salesforce Consulting Services -
            </h6>
            <div className="col-md-11 d-flex">
              <div className="col-md-7">
                <div>
                  Salesforce Implementation
                  <Link to="/salesforceImplementation" class="mil-link3 link-right">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>{" "}
                <div>
                  Salesforce Customization
                  <Link to="/salesforceCustomization" class="mil-link3 link-right">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
                <div>
                  Salesforce Integration
                  <Link to="/salesforceIntegration" class="mil-link3 link-right">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            backgroundColor: "#3279a8",
            marginBottom: "20px",
            color: "white",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className=""
          >
            <Typography className="fw-bold mil-uppercase">
              How can Salesforce help your business?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Salesforce can significantly benefit a business by revolutionizing
              its customer relationship management. It provides a centralized
              platform for managing customer data, enabling businesses to gain
              valuable insights and deliver personalized experiences. Through
              robust tools for sales, marketing, and customer service,
              Salesforce streamlines operations, helping teams prioritize leads,
              close deals, and respond to customer inquiries efficiently. Its
              customizable nature means it can be tailored to specific industry
              needs, and its scalability ensures it supports businesses of all
              sizes. With Salesforce, businesses can optimize their operations,
              drive growth, and ultimately build stronger, more profitable
              relationships with their customers
            </Typography>
            {/* <h6 className="mt-4 mb-4 text-white font-weight-500">
              Salesforce Consulting Services -
            </h6> */}
            <div className="col-md-11 d-flex">
              <div className="col-md-7">
                <div>
                  Experience Cloud
                  <Link to="" class="mil-link3 link-right">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>{" "}
                <div>
                  Service Cloud
                  <Link to="" class="mil-link3 link-right">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
                <div>
                  Marketing Cloud
                  <Link to="" class="mil-link3 link-right">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  FSL
                  <Link to="" class="mil-link3 link-right">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
                <div>
                  LWC
                  <Link to="" class="mil-link3 link-right">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
                <div>
                  CPQ
                  <Link to="" class="mil-link3 link-right">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            backgroundColor: "#3279a8",
            marginBottom: "20px",
            color: "white",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className=""
          >
            <Typography className="fw-bold mil-uppercase">
              What size of business is the best for implementing a salesforce?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The best size of business for implementing a CRM (Customer
              Relationship Management) system can vary depending on specific
              needs and goals. Generally, CRMs can benefit businesses of various
              sizes. Small businesses can benefit from CRMs to help manage
              customer interactions and improve communication. Medium-sized
              businesses often find CRMs useful for scaling their customer
              management efforts and streamlining sales processes. Larger
              enterprises can leverage CRMs to handle complex customer data and
              enhance customer experience on a larger scale. Ultimately, it's
              important for a business to assess its specific requirements,
              budget, and growth plans when deciding on the right CRM solution
              and implementation strategy.
            </Typography>
            <h6 className="mt-2 mb-2 text-white font-weight-500">
              Salesforce Consulting Services 
            </h6>
            {/* <div className="col-md-11 d-flex">
              <div className="col-md-7">
                <div>
                  Keyword Research
                  <Link to="/deveops" class="mil-link3 link-right">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>{" "}
                <div>
                  Content Writing
                  <Link to="/deveops" class="mil-link3 link-right">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
                <div>
                  Website Development
                  <Link to="/deveops" class="mil-link3 link-right">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div> */}
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            backgroundColor: "#3279a8",
            marginBottom: "20px",
            color: "white",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className=""
            style={{ color: "white" }}
          >
            <Typography className="fw-bold mil-uppercase">
              What is salesforce integration?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Salesforce integration refers to the process of connecting the
              Salesforce platform with other software applications or systems
              within a business's technological ecosystem. This integration
              enables seamless data sharing and communication between Salesforce
              and various tools like marketing automation platforms, accounting
              software, customer support systems, and more. It allows for a
              unified view of customer information and streamlines business
              operations. Salesforce integration is crucial for optimizing
              workflows, improving productivity, and enhancing the overall
              efficiency of sales, marketing, and customer service processes.
            </Typography>
            {/* <h6 className="mt-4 mb-4 text-white font-weight-500">
              Services that can help you enhance your digital presence -
            </h6> */}
            <div className="col-md-11 d-flex">
              <div className="col-md-7">
                <div>
                Experience Cloud
                  <Link to="" class="mil-link3 link-right">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>{" "}
                <div>
                  Service Cloud
                  <Link to="" class="mil-link3 link-right">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
                <div>
                  Marketing Cloud
                  <Link to="" class="mil-link3 link-right">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  Hubspot
                  <Link to="" class="mil-link3 link-right">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  ZOHO
                  <Link to="" class="mil-link3 link-right">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              
            </div>
            
          </AccordionDetails>
        </Accordion>
        
      </div>
      <div className="container">
        <div className="mil-divider"></div>
      </div>

      {/* challenges end */}

      {/* <!-- steps --> */}
      <section className="mil-p-120-90 shadow shadow-bottom shadow-md">
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
             
            </div>
          </div>
          <div className="row mil-mb-30-adapt">
            <div className="col-xl-4">
              <div className="mil-mb-60 conten">
                <div className="mil-number-icon mil-circle mil-mb-30">
                  <span>01</span>
                </div>
                <h4 className="mil-mb-15">Salesforce App Exchange</h4>
                <p>
                  Are you ready to take your Salesforce experience to the next
                  level? As a Salesforce AppExchange Partner, we provide the
                  ultimate solution to elevate your business, streamline your
                  processes, and expand your reach within the Salesforce
                  Ecosystem . With our expert guidance and unmatched services,
                  you can unlock new opportunities and soar to new heights.
                  Discover the advantages of partnering with us and become a
                  driving force in the Salesforce AppExchange community.
                </p>
                <Link to="/salesforceAppExchange" class="mil-link2 link-right mil-mb-30">
                  <i class="fas fa-arrow-right"></i>
                </Link>
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
                  streamline processes. Salesforce consultants, armed with a
                  deep understanding of the platform's capabilities, work
                  closely with clients to analyze their requirements, design
                  customized solutions.
                </p>
                <Link to="/salesforceConsulting" class="mil-link2 link-right mil-mb-30">
                  <i class="fas fa-arrow-right"></i>
                </Link>
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
                  solutions aimed at enhancing user experience, and driving
                  overall efficiency. From designing and implementing custom
                  workflows to creating personalized dashboards and reports,
                  Salesforce customization empowers organizations to align the
                  CRM system seamlessly with their operations.
                </p>
                <Link to="/salesforceCustomization" class="mil-link2 link-right mil-mb-30">
                  <i class="fas fa-arrow-right"></i>
                </Link>
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
                <Link to="/salesforceImplementation" class="mil-link2 link-right mil-mb-30">
                  <i class="fas fa-arrow-right"></i>
                </Link>
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
                <br />
                <Link to="/salesforceIntegration" class="mil-link2 link-right mil-mb-30">
                  <i class="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60 conten">
                <div className="mil-number-icon mil-circle mil-mb-30">
                  <span>06</span>
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
                <Link to="/salesforceMigration" class="mil-link2 link-right mil-mb-30">
                  <i class="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            
            <div className="col-xl-4">
              <div className="mil-mb-60 conten">
                <div className="mil-number-icon mil-lines mil-mb-30">
                  <span>07</span>
                </div>
                <h4 className="mil-mb-15">Salesforce IT Support</h4>
                <p>
                  Salesforce IT Support Services offer comprehensive solutions
                  to ensure seamless functionality and optimal utilization of
                  the Salesforce platform. These services encompass technical
                  assistance, issue resolution, and expert guidance tailored to
                  meet the unique needs of businesses.
                </p>
                <br />
                <br />
                <Link to="/seo" class="mil-link2 link-right mil-mb-30">
                  <i class="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            
            <div className="col-md-6 col-xl-6">
              <div className="mil-adaptive-right">
                {/* <Link to="" className="mil-link mil-mb-30"><span>See More</span><i className="fas fa-arrow-right"></i></Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- steps end --> */}

      

      {/* <div className="container">
        <div className="mil-divider"></div>
      </div> */}

     
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
      
      <section className="bg-white mil-deco-right mil-p-120-0 shadow shadow-top shadow-lg">
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
      {/* <!-- services end --> */}

      <Footer />
    </div>
  );
};

export default Salesforce;
