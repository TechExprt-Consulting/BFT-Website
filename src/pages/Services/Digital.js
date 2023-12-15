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
const Digital = () => {
  return (
    <div className="mil-wrapper">
      <Navbar />

      {/* <!-- banner --> */}
      
<div className="mil-banner-sm bg-white shadow shadow-bottom shadow-md">
  <div className="mil-banner-content">
    <div className="container mil-relative">
      <ul className="mil-breadcrumbs mil-mb-30">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="">Service</Link>
        </li>
        <li>
          <Link to="/salesforce">Digital Marketing</Link>
        </li>
      </ul>
      <div className="d-flex flex-column-reverse flex-md-row">
        <div className="d-flex flex-column col-md-8">
          <h2 className="mil-uppercase mt-2" style={{ color: "#1B2F5B" }}>
          Digital Marketing
          </h2>

          <p className="conten ">
          When developing your digital marketing strategies, we dedicate
                  hours to understand your business, market and industry so we
                  can build a plan that aligns with your business objective and
                  goals. Today, businesses are adapting and exploring the
                  digital terrain at a rate faster than ever, globally over 60%
                  of the businesses have their digital presence established. We
                  help you get the best data-backed strategy and engaging
                  creative appeal to your campaigns which makes you stand out
                  from your competitors.
          </p>

          <div className="mil-quote-button ">
            <button className="mil-vertical-button text-dark ">
             <Link to='/contact'> Get a Free Quote!</Link>
            </button>
          </div>
        </div>
        <img
          src="/assets/mockup/digital.png"
          alt="image"
          className="col-md-4 mockup"
        />
      </div>
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
      </section>
      {/* <!-- call to action end --> */}

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
            <Typography className="fw-bold">
              HOW TO DO DIGITAL MARKETING?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Most people think that digital marketing is all about posting
              content on social handles, while they are right to a certain
              extent yet they miss out on the vast landscape of digital
              marketing. Digital marketing is a combination of data, strategy
              and creativity put together to yield the best results for the
              business.
            </Typography>
            <h6 className="mt-4 mb-4 text-white font-weight-500 ">
              Services that can help you enhance your digital presence -
            </h6>
            <div className="col-md-11 d-flex">
              <div className="col-md-7">
                <div>
                  Social Media Marketing
                  <Link to="/social-media" class="mil-link3 link-right">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>{" "}
                <div>
                  PPC
                  <Link to="/ppc" class="mil-link3 link-right">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
                <div>
                  SEO
                  <Link to="/seo" class="mil-link3 link-right">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  Web and App Development
                  <Link to="/services/web-developement" class="mil-link3 link-right">
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
            <Typography className="fw-bold">
              HOW TO ENHANCE YOUR DIGITAL MARKETING CAMPAIGNS ?{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              To succeed on digital platforms it is essential that one has the
              understanding of the algorithms of these platforms. Creating a
              campaign without knowing the algorithm, is more like enrouting to
              a destination in a foreign country without navigation.
            </Typography>
            <h6 className="mt-4 mb-4 text-white font-weight-500">
              Services that can help you enhance your digital presence -
            </h6>
            <div className="col-md-11 d-flex">
              <div className="col-md-7">
                <div>
                  Google Analytics
                  <Link to="" class="mil-link3 link-right">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>{" "}
                <div>
                  Trend Analysis
                  <Link to="" class="mil-link3 link-right">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
                <div>
                  Data Analytics
                  <Link to="" class="mil-link3 link-right">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  Creative Strategy
                  <Link to="" class="mil-link3 link-right">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
                <div>
                  Social Media Strategy
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
            <Typography className="fw-bold">
              HOW TO IDENTIFY THE MARKET TRENDS ON DIGITAL PLATFORMS?{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Walking with the trends is yet another important aspect of digital
              marketing. If you want to ace your digital game, you cannot afford
              to miss the trends.
            </Typography>
            <h6 className="mt-4 mb-4 text-white font-weight-500">
              Services that can help you enhance your digital presence -
            </h6>
            <div className="col-md-11 d-flex">
              <div className="col-md-7">
                <div>
                  Trend Analysis
                  <Link to="" class="mil-link3 link-right">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>{" "}
                <div>
                  Competitive Analysis
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
            <Typography className="fw-bold">
              HOW TO OPTIMIZE ON-PAGE SEO?{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              SEO is one of the most talked and wanted services in Digital
              Marketing. To optimize on-page SEO one should work on high quality
              niche backlinks, fastest load time, SERPs inspired content and
              list of other
            </Typography>
            <h6 className="mt-2 mb-2 text-white font-weight-500">
              Services that can help you optimize your on-page SEO -
            </h6>
            <div className="col-md-11 d-flex">
              <div className="col-md-7">
                <div>
                  Keyword Research
                  <Link to="" class="mil-link3 link-right">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>{" "}
                <div>
                  Content Writing
                  <Link to="" class="mil-link3 link-right">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
                <div>
                  Website Development
                  <Link to="/services/web-developement" class="mil-link3 link-right">
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
            style={{ color: "white" }}
          >
            <Typography className="fw-bold">
              WHAT IS BETTER PPC OR FACEBOOK ADS?{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              PPC and Facebook ads both are crucial, however depending on the
              purpose of the campaign, one of the two or a mix is chosen. For
              instance if the ad has to be targeted to a well-defined set of
              audience then Facebook ads are preferred however if the target
              audience is not defined and very vast then google ads are more
              preferable. The choice is further refined on a list of other
              parameters as well.
            </Typography>
            <h6 className="mt-4 mb-4 text-white font-weight-500">
              Services that can help you enhance your digital presence -
            </h6>
            <div className="col-md-11 d-flex">
              <div className="col-md-7">
                <div>
                  PPC Campaigns
                  <Link to="/services/digital-marketing/ppc" class="mil-link3 link-right">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>{" "}
                <div>
                  Social Media Marketing
                  <Link to="/services/digital-marketing/social-media" class="mil-link3 link-right">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
                <div>
                  Google Analytics
                  <Link to="" class="mil-link3 link-right">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  Google Ads
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
            // backgroundColor: "#1B2F5B",
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
            <Typography className="fw-bold">
              WHAT MARKETING WORKS THE BEST FOR SMALL BUISNESSES?{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Small businesses have limited marketing spend and so it is crucial
              for them to choose a marketing mix that fits the budget and serves
              the purpose as well.
            </Typography>
            <h6 className="mt-4 mb-4 text-white font-weight-500">
              Services that can be the best suit for small businesses are -
            </h6>
            <div className="col-md-11 d-flex">
              <div className="col-md-7">
                <div>
                  Content Marketing
                  <Link to="/services/digital-marketing/content-marketing" class="mil-link3 link-right">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>{" "}
                <div>
                  Email Marketing
                  <Link to="" class="mil-link3 link-right">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
                <div>
                  SEO
                  <Link to="/services/digital-marketing/seo" class="mil-link3 link-right">
                    <i class="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  {/* <span className="mil-suptitle mil-suptitle-2 mil-mb-30 text-white">
              Services and Solutions
            </span> */}
                </div>
                <div>
                  Networking
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

      {/* <!-- steps --> */}
      <section className="mt-4">
        {/* <div
          className="mil-deco"
          style={{ bottom: "0", right: "35%", transform: "rotate(180deg)" }}
        ></div> */}
        <div className="container">
          <div className="row">
            <div className="col-12 mil-mb-90 ">
              <h2 className="mil-mb-30">Our Expertise</h2>
             
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
                <Link to="/services/digital-marketing/seo" class="mil-link2 link-right mil-mb-30">
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
                </p>
                <br />
                <br />
                <Link to="/services/digital-marketing/social-media" class="mil-link2 link-right mil-mb-30">
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
                </p>
                <br />
                <br />
                <Link to="/services/digital-marketing/ppc" class="mil-link2 link-right mil-mb-30">
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
                  to="/services/digital-marketing/content-marketing"
                  class="mil-link2 link-right mil-mb-30"
                >
                  <i class="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            {/* <div className="col-xl-4">
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
                  to="/marketResearch"
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
                </p>
                <br />
                <Link
                  to="/contentWriting"
                  class="mil-link2 link-right mil-mb-30"
                >
                  <i class="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>*/}
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
      {/* <section className="mil-gradient-bg mil-deco-right mil-p-120-0">
     
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
            <p class="mil-light-soft mil-mb-60">
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
            <p class="mil-light-soft mil-mb-60">
              Our focus on Search Engine Optimization, Social Media Marketing,
              pay-per-click, Content Marketing, Market Research, Content
              Writing, and copywriting means we can provide you with a holistic
              digital marketing approach. We ensure that your online presence is
              cohesive, compelling, and optimized for success.
            </p>

            <h3 class="mil-light mil-mb-30">Targeting Your Business Growth </h3>
            <p class="mil-light-soft mil-mb-60">
              Our digital marketing strategies are built around your specific
              audience. Whether you're a small business looking to attract local
              customers or a mid-size business aiming to expand globally, we
              have the expertise to help you reach your target audience and
              achieve sustainable growth{" "}
            </p>

            <h3 class=" mil-light mil-mb-30">
              Get Your Business to New Heights{" "}
            </h3>
            <p class="mil-light-soft mil-mb-60">
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
      </section> */}
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
              <span className="mil-accent">Digital Marketing Services</span>{" "}
            </h2>
           
          </div>
          <div className="row mil-mb-30-adapt">
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-ligh">
                  <img src="/assets/icon/sm/6.svg" alt="icon" />
                </div>
                <p className="mil-ligh"> High Quality Niche Backlinks</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-ligh">
                  <img src="/assets/icon/sm/6.svg" alt="icon" />
                </div>
                <p className="mil-ligh">Flawless Onpage SEO</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-ligh">
                  <img src="/assets/icon/sm/6.svg" alt="icon" />
                </div>
                <p className="mil-ligh">Designing Creative Strategies</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-ligh">
                  <img src="/assets/icon/sm/6.svg" alt="icon" />
                </div>
                <p className="mil-ligh">Multi-Channel Distribution</p>
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

export default Digital;
