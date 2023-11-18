import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
const SocialMedia = () => {
  return (
<div className="mil-wrapper">
      <Navbar/>

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
                            <Link to="/Salesforce">Social Media</Link>
                        </li>
                        {/* <li>
                            <Link to="/Salesforce">Social Media Marketing</Link>
                        </li> */}
                    </ul>
                    <h2 className="mil-uppercase" style={{ color: "#1B2F5B" }}>
                    Social Media Marketing
                    </h2>
                </div>
                <div className="col-md-4 text-center">
                    <img src="assets/mockup/socialmedia.png" alt="mus" className="img-fluid" />
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
                <p className='conten'>
                 
                  Let us establish your digital footprint, design creative strategy and optimize the social media campaigns for your business. The heart of social media marketing lies in the building entrancing online presence that reflects the brand’s identity authentically. A brand’s digital presence should be designed considering that this

will serve as a digital touchpoint of the brand for all the visitors and potential customers. Having said that, it becomes crucial to be aware of what and how one plans to establish their digital presence. At BytesFarms, our team works meticulously to craft compelling narratives that reflect the client’s brand essence and identity. The journey of content creation starts from ideation and conceptualisation and continues till it gets published and the response is analyzed, we use the data to further enhance the next piece of content.         </p>     </div>

              
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
              <h2 className="mil-mb-30">Our Comprehensive Social Media Marketing Services  </h2>
               
            </div>
          </div>
          <div className="row mil-mb-30-adapt">
            <div className="col-xl-4">
              <div className="mil-mb-60 conten">
                <div className="mil-number-icon mil-circle mil-mb-30">
                  <span>01</span>
                </div>
                <h4 className="mil-mb-15">Platform Selection</h4>
                <p>
                We help you identify the social media platforms that are most relevant to your industry and target audience.                </p>
                
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60 conten">
                <div className="mil-number-icon mil-lines mil-mb-30">
                  <span>02</span>
                </div>
                <h4 className="mil-mb-15"> Content Creation</h4>
                <p>
                Our expert content creators craft engaging posts, visuals, and videos that resonate with your audience and align with your brand.                 </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60 conten">
                <div className="mil-number-icon mil-mb-30">
                  <span>03</span>
                </div>
                <h4 className="mil-mb-15">Community Management </h4>
                <p>
                We engage with your audience, respond to comments, and create a sense of community around your brand.                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60 conten">
                <div className="mil-number-icon mil-circle mil-mb-30">
                  <span>04</span>
                </div>
                <h4 className="mil-mb-15">Paid Advertising</h4>
                <p>
                We create and manage highly targeted paid advertising campaigns to reach a broader audience and drive results.                 </p>
                
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60 conten">
                <div className="mil-number-icon mil-lines mil-mb-30">
                  <span>05</span>
                </div>
                <h4 className="mil-mb-15">Analytics and Reporting</h4>
                <p>
                We provide regular reports on the performance of your social media campaigns, allowing you to track progress and understand what's working                </p>
                
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60 conten">
                <div className="mil-number-icon mil-mb-30">
                  <span>06</span>
                </div>
                <h4 className="mil-mb-15">Strategy Refinement</h4>
                <p>
                We continuously refine our social media strategy based on data and insights, ensuring that we're always moving toward your goals.                </p>
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
              <span className="mil-accent">Search Engine Optimization</span>{" "}
            </h2>
           
          </div>
          <div className="row mil-mb-30-adapt">
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-ligh">
                  <img src="assets/icon/sm/6.svg" alt="icon" />
                </div>
                <p className="mil-ligh"> Designing Creative Strategies</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-ligh">
                  <img src="assets/icon/sm/6.svg" alt="icon" />
                </div>
                <p className="mil-ligh">Building Your Online Presence</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-ligh">
                  <img src="assets/icon/sm/6.svg" alt="icon" />
                </div>
                <p className="mil-ligh">Strengthening your customer base</p>
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
  )
}

export default SocialMedia