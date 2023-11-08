import React from "react";
import "./Home.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import $ from "jquery";
import { useState, useEffect } from "react";
import Consultant from "../components/Consultant";
import Client from "./Client";
// import Service from "./Service";
import Itsolution from './Itsolution'
// import ItService from "./ItService";
// import Service from "./Service";

const Home = () => {
  const contents = [
    "IT SOLUTIONS",
    "BLOCKCHAIN",
    "ARTIFICIAL INTELLIGENCE",
    "DIGITAL MARKETING",
    "BRANDING SOLUTIONS",
    "WEB DEVELOPEMENT",
    "APP DEVELOPEMENT",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contents.length);
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    const handleMenuButtonClick = () => {
      $(".mil-menu-btn").toggleClass("mil-active");
      $(".mil-navigation").toggleClass("mil-active");
    };

    $(".mil-menu-btn").on("click", handleMenuButtonClick);

    // Clean up the event listener when the component is unmounted
    return () => {
      $(".mil-menu-btn").off("click", handleMenuButtonClick);
    };
  }, []);

  return (
    <div className="mil-wrapper">
      {/* top bar */}
      <Navbar />

      {/* <!-- banner --> */}
      <div class="mil-banner mil-top-space-0 shadow shadow-bottom shadow-md">
        <div class="mil-overlay"></div>

        <div class="mil-banner-content bg-light">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-xl-8">
                <h1 class="mil-mb-60">
                  <span class="mil-uppercase mil-ligh"style={{color:"#1B2F5B"}}>
                    Your tech and strategy partner in
                    <br />
                  </span>{" "}
                  <span class="mil-font-3 mil-accent">
                    {contents[currentIndex]}
                  </span>
                </h1>
              </div>
              <div class="col-xl-4">
                <div class="mil-illustration-1">
                  <div class="mil-item mil-item-2">
                    <div class="mil-plus">
                      <div class="mil-item-hover">
                        <div class="mil-plus-icon">Let's Talk</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mil-fixed-button-container">
          <button className="mil-vertical-button text-dark ">
           <Link to='/contact'> Get a Free Quote!</Link>
          </button>
        </div>
      </div>

      {/* partners start*/}

      {/* <div className=" mil-p-90-60  ">
        <div className="container ">
          <div className="mil-partners-frame">
           
            <Link to="/dmc">
              <img
                src="assets/partner/5.png"
                alt="partner"
                style={{ height: "75px" }}
              />
            </Link>
            <Link to="/cargosprint">
              <img
                src="assets/partner/3.png"
                alt="partner"
                style={{ width: "205px" }}
              />
            </Link>
            <Link to="/nexum">
              <img
                src="assets/partner/1.png"
                alt="partner"
                style={{ width: "205px" }}
              />
            </Link>
            <Link to="/continuum">
              <img
                src="assets/partner/2.png"
                alt="partner"
                style={{ width: "205px" }}
              />
            </Link>
            <Link to="/abuDhabi">
              <img
                src="assets/partner/6.png"
                alt="partner"
                style={{ height: "85px" }}
              />
            </Link>
            <Link to="">
              <img
                src="assets/partner/7.png"
                alt="partner"
                style={{ height: "80px" }}
              />
            </Link>
          </div>
        </div>
      </div> */}
      <Client />
      {/* partners end */}

      {/* <div className="container">
        <div className="mil-divider"></div>
      </div> */}

      {/* <!-- services --> */}
      <section className="mil-services mil-p-120-90 mt-0 pt-1 ">
        {/* <div className="mil-deco" style={{ top: "0", right: "20%" }}></div> */}
        <div className="container">
          <h2 className="mil-mb-30">
            How We Can <span className="mil-accent">Help You</span>
          </h2>
          
          {/* <div className="container">
            <div className="mil-divider"></div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-xl-6">
             
              <div className="mil-service-item">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <img src="assets/icon/1.svg" alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">01</span> Salesforce
                    Developement
                  </h5>
                  <p className="conten">
                    Salesforce is a leading customer relationship management
                    (CRM) platform that helps businesses manage their sales,
                    customer service, and marketing needs efficiently.
                  </p>
                  <Link to="/salesforce" class="mil-link2 link-right mil-mb-30">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="mil-divider mil-divider-left"></div>
              <div className="mil-service-item">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <img src="assets/icon/16.svg" alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">02</span> DevOps
                  </h5>
                  <p className="conten">
                    DevOps practices combine development and IT operations,
                    emphasizing collaboration and automation, leading to faster
                    software development, continuous integration, and delivery.
                  </p>
                  <Link to="/deveops" class="mil-link2 link-right mil-mb-30">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="mil-divider mil-divider-left"></div>
              <div className="mil-service-item">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <img src="assets/icon/15.svg" alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">03</span> Cloud Migration
                  </h5>
                  <p className="conten">
                    Cloud Migration involves transferring data, applications,
                    and workloads from on-premises servers to cloud-based
                    infrastructure, offering scalability, flexibility, and cost
                    efficiency to businesses.
                  </p>
                  <Link to="/cloud" class="mil-link2 link-right mil-mb-30">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-6">
             
              <div className="mil-service-item">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <img src="assets/icon/4.svg" alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">04</span> Blockchain Consulting
                  </h5>
                  <p className="conten">
                    Blockchain technology ensures secure, transparent, and
                    tamper-proof record-keeping, revolutionizing various
                    industries by enabling decentralized transactions and smart
                    contracts.
                  </p>
                  <Link to="/blockChain" class="mil-link2 link-right mil-mb-30">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="mil-divider mil-divider-left"></div>
              <div className="mil-service-item">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <img src="assets/icon/22.svg" alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">05</span> Digital Marketing
                  </h5>
                  <p className="conten">
                    Digital marketing is a multifaceted approach aimed at
                    reaching, engaging, and converting an online audience.It
                    empowers businesses to establish a robust customer
                    relationship.
                  </p>
                  <Link to="/digital" class="mil-link2 link-right mil-mb-30">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="mil-divider mil-divider-left"></div>
              <div className="mil-service-item">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <img src="assets/icon/22.svg" alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">06</span> Mobile App
                    Developement
                  </h5>
                  <p className="conten">
                    Mobile app development refers to the process of creating
                    software applications that run on mobile devices, catering
                    to diverse platforms like iOS and Android, facilitating
                    seamless user experiences and access to services on the go.
                  </p>
                  <Link to="/mobileApp" class="mil-link2 link-right mil-mb-30">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
  </div> */}
          <Itsolution/>
        </div>
      </section> 


      {/* <div className="container">
        <div className="mil-divider"></div>
      </div> */}

      <section className="mil-p-120-120 m-1 p-1 mt-3">
        <div className="container">
          <div class="col-md-6 col-xl-6">
            <h2 class="mil-mb-30 mb-3">Case Studies</h2>
          </div>
          <div
            className="row justify-content-around align-items-center"
            id="cargo"
          >
            <div className="col-xl-5 mil-mb-60">
              <div className="mil-project-cover">
                <Link to="/continuum">
                  <img src="assets/img/continum.png" alt="Project" />
                </Link>
                &nbsp;
              </div>
              <h3 className="mt-3">
                <span className="mil-accent">
                  <Link to="/continuum">Continumm</Link>
                </span>
              </h3>
              <p>Tech Stack: React, Java, Springboot</p>
            </div>

            <div className="col-xl-5 mil-mb-60">
              <div className="mil-project-cover">
                <Link to="/dmc">
                  {" "}
                  <img src="assets/img/dmc.png" alt="Project" />
                </Link>
                &nbsp;
              </div>
              <h3 className="mt-3">
                <span className="mil-accent">
                  <Link to="/dmc">DMC</Link>
                </span>
              </h3>
              <p>Tech Stack: Salesfoce, FSL, LWC, Apex</p>
            </div>
          </div>

          <div
            className="row justify-content-around align-items-center"
            id="cargo"
          >
            <div className="col-xl-5 mil-mb-60">
              <div className="mil-project-cover">
                <Link to="/cargosprint">
                  <img src="assets/img/cargo.png" alt="Project" />
                </Link>
                &nbsp;
              </div>
              <h3 className="mt-3">
                <span className="mil-accent">
                  <Link to="/cargosprint">Cargo Sprint</Link>
                </span>
              </h3>
              <p>Tech Stack: Apex, Custom REST API, Financial Force, GCP</p>
            </div>
            <div className="col-xl-5 mil-mb-60">
              <div className="mil-project-cover">
                <Link to="/nexum">
                  <img src="assets/img/nexum.png" alt="Project" />
                </Link>
                &nbsp;
              </div>
              <h3 className="mt-3">
                <span className="mil-accent">
                  <Link to="/nexum">Nexum</Link>
                </span>
              </h3>
              <p>Tech Stack: React JS, Node JS , MySQL, AWS</p>
            </div>
          </div>

          <div
            className="row justify-content-around align-items-center"
            id="cargo"
          >
            <div className="col-xl-5 mil-mb-60">
              <div className="mil-project-cover">
                <Link to="/abuDhabi">
                  <img src="assets/projects/10.jpg" alt="Project" />
                </Link>
              </div>
              <h3 className="mt-3">
                <span className="mil-accent">
                  <Link to="/abuDhabi">Abu Dhabi University</Link>
                </span>
              </h3>
              <p>Tech Stack: React JS, Node JS, Block-Chain</p>
            </div>
          </div>

          <div className="mil-divider mil-mb-60"></div>
        </div>
      </section>

      <Consultant />
      {/* <!-- portfolio end --> */}

      <section className="mil-how-it-works mil-deep-bg mil-p-120-90">
        <div className="mil-deco" style={{ top: "0", right: "20%" }}></div>
        <div
          className="mil-deco"
          style={{ bottom: "0", left: "30%", transform: "rotate(180deg)" }}
        ></div>
        <div className="container">
          <h2 className="mil-mb-90">
            How We <span className="mil-accent">Collaborate</span> With You
          </h2>
          <div className="row">
            <div className="col-md-6 col-xl-3">
              <div className="mil-mb-60">
                <div className="mil-icon-box-head mil-mb-30">
                  <div className="mil-icon-frame mil-icon-frame-sm">
                    <img src="assets/icon/sm/1.svg" alt="icon" />
                  </div>
                  <h5>Thinking Big</h5>
                </div>
                <p>
                  At BytesFarms Technologies, we believe in thinking big. We
                  envision grand solutions that have the power to transform
                  businesses.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="mil-mb-60">
                <div className="mil-icon-box-head mil-mb-30">
                  <div className="mil-icon-frame mil-icon-frame-sm">
                    <img src="assets/icon/sm/2.svg" alt="icon" />
                  </div>
                  <h5>Starting Small</h5>
                </div>
                <p>
                  We understand that every significant achievement begins with a
                  single step. That's why at BytesFarms Technologies, we
                  emphasize the importance of starting small.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="mil-mb-60">
                <div className="mil-icon-box-head mil-mb-30">
                  <div className="mil-icon-frame mil-icon-frame-sm">
                    <img src="assets/icon/sm/3.svg" alt="icon" />
                  </div>
                  <h5>Creating Fast</h5>
                </div>
                <p>
                  Our agile development methodologies, coupled with a talented
                  team of developers, enable us to bring your ideas to life
                  quickly and efficiently.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="mil-mb-60">
                <div className="mil-icon-box-head mil-mb-30">
                  <div className="mil-icon-frame mil-icon-frame-sm">
                    <img src="assets/icon/sm/4.svg" alt="icon" />
                  </div>
                  <h5>Innovating Scale</h5>
                </div>
                <p>
                  Innovation is at the heart of everything we do. We not only
                  innovate; we innovate at scale. Our forward-thinking approach
                  allows us to develop IT solutions that are not only
                  groundbreaking but also scalable.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- how it works end --> */}

      

      <div className="container mil-mb-90">
        <div className="mil-divider"></div>
      </div>

      <div className="container">
        <div className="row align-items-center mil-mb-90">
          <div className="col-md-6 col-xl-3 conten2">
            <div className="mil-h1">
              60<span className="mil-accent">+</span>
            </div>
            <h6 className="mil-mb-60">
              Years of <br />
              combined Experience
            </h6>
          </div>

          <div className="col-md-6 col-xl-3 conten2">
            <div className="mil-h1 ">
              30<span className="mil-accent">+</span>
            </div>
            <h6 className="mil-mb-60">Professionals working</h6>
          </div>

          <div className="col-md-6 col-xl-3 conten2">
            <div className="mil-h1">
              89<span className="mil-accent">%</span>
            </div>
            <h6 className="mil-mb-60">Recurring customers</h6>
          </div>

          <div className="col-md-6 col-xl-3 conten2">
            <div className="mil-h1 ">
              20<span className="mil-accent">+</span>
            </div>
            <h6 className="mil-mb-60">Tech Stack</h6>
          </div>
        </div>
        <div className="container">
          <div className="mil-divider"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
