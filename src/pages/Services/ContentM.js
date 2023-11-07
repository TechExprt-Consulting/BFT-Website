import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
const ContentM = () => {
  return (
    <div className="mil-wrapper">
    <Navbar/>
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
                            <Link to="/Salesforce">Digital Marketing</Link>
                        </li>
                        {/* <li>
                            <Link to="/Salesforce">Content Marketing</Link>
                        </li> */}
                    </ul>
                    <h2 className="mil-uppercase " style={{ color: "#1B2F5B" }}>
                    Content Marketing 
                    </h2>
                </div>
                <div className="col-md-4 text-center">
                    <img src="assets/mockup/contentM.png" alt="mus" className="img-fluid" />
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
                
                Most people often underestimate the power of content and that is where they miss on a gold mine of opportunities in the process. High quality content has the power to significantly amplify a brand's reach and impact. Look around and you will find yourself dwelling in the oceans of content. From the videos you watch on youtube to the long descriptive articles you read on Medium, blogger and other sites, it is all content. In recent times, brands are heavily investing in content as they have realized how effortlessly content helps them establish their brands presence in the market.</p>           </div>
            <div className=" mil-mb-30">
              <p className='conten'>
                
                At BytesFarms, we have a team of dedicated content writers, strategists and digital marketing experts who harness the art of content development and distribution helping our clients drive more relevant traffic to their website and reach more potential customers. </p>            </div>
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
            <h2 className="mil-mb-30">Our Comprehensive Content Marketing Services   </h2>
            <p className="mil-dark">
            At BytesFarms Technologies, we offer a range of content marketing services to help you stand out in the digital landscape:    </p>
          </div>
        </div>
        <div className="row mil-mb-30-adapt">
          <div className="col-xl-4">
            <div className="mil-mb-60 conten">
              <div className="mil-number-icon mil-circle mil-mb-30">
                <span>01</span>
              </div>
              <h4 className="mil-mb-15">Content Strategy</h4>
              <p>
              We develop a tailored content strategy aligned with your business goals, target audience, and industry.
              </p>
              
            </div>
          </div>
          <div className="col-xl-4">
            <div className="mil-mb-60 conten">
              <div className="mil-number-icon mil-lines mil-mb-30">
                <span>02</span>
              </div>
              <h4 className="mil-mb-15">Content Creation</h4>
              <p>
              Our expert content creators craft engaging and informative blog posts, articles, infographics, videos, and more.</p>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="mil-mb-60 conten">
              <div className="mil-number-icon mil-mb-30">
                <span>03</span>
              </div>
              <h4 className="mil-mb-15">Creative Strategy</h4>
              <p>
              A mix of creative elements such as visual design, copy and other elements to achieve the overall marketing objective.</p>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="mil-mb-60 conten">
              <div className="mil-number-icon mil-circle mil-mb-30">
                <span>04</span>
              </div>
              <h4 className="mil-mb-15">Case Studies</h4>
              <p>
              We create detailed and well-articulated case studies for our clients, which further helps them present their work at various platforms.</p>
              
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
                <p className="mil-ligh">  Tailored Strategies</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-ligh">
                  <img src="assets/icon/sm/2.svg" alt="icon" />
                </div>
                <p className="mil-ligh">Research Based Content</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-ligh">
                  <img src="assets/icon/sm/7.svg" alt="icon" />
                </div>
                <p className="mil-ligh">SEO Expertise</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-ligh">
                  <img src="assets/icon/sm/7.svg" alt="icon" />
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
  )
}

export default ContentM