import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
const Technology = () => {
  return (
    <>
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
                <Link to="">Technologies</Link>
              </li>
              
            </ul>
            <h2 className="mil-uppercase">Technologies</h2>
          </div>
        </div>
      </div>
      {/* <!-- banner end --> */}
      {/* <!-- services --> */}
        <section class="mil-services mil-p-120-90">
            <div class="mil-deco" style={{top: "0", right: "20%"}}></div>
            <div class="container">
                <h2 class="mil-mb-30">Tech Stack <span class="mil-accent"></span></h2>
                <div class="row">
                    <div class="col-lg-6 col-xl-6">
                        <h4 class="mil-mb-60 mil-mt-30">Front-End</h4>
                        <div class="mil-divider mil-divider-left"></div>
                        <div class="mil-service-item">
                            <div class="mil-service-icon">
                                <div class="mil-icon-frame1 mil-icon-frame-md">
                                    <img src="assets/project/22.png" alt="icon" style={{height:"50px", width:"90px"}}/>
                                </div>
                            </div>
                            <div class="mil-service-text">
                                <h5 class="mil-mb-30"><span class="mil-accent">01</span> HTML, CSS, JavaScript</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div class="mil-divider mil-divider-left"></div>
                        <div class="mil-service-item">
                            <div class="mil-service-icon">
                                <div class="mil-icon-frame1 mil-icon-frame-md">
                                    <img src="assets/project/12.png" alt="icon" style={{height:"60px", width:"90px"}}/>
                                </div>
                            </div>
                            <div class="mil-service-text">
                                <h5 class="mil-mb-30"><span class="mil-accent">02</span> React JS</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div class="mil-divider mil-divider-left"></div>
                        <div class="mil-service-item">
                            <div class="mil-service-icon">
                                <div class="mil-icon-frame1 mil-icon-frame-md">
                                    <img src="assets/project/11.png" alt="icon" style={{height:"60px", width:"90px"}}/>
                                </div>
                            </div>
                            <div class="mil-service-text">
                                <h5 class="mil-mb-30"><span class="mil-accent">03</span> Angular JS</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div class="mil-divider mil-divider-left"></div>
                        <div class="mil-service-item">
                            <div class="mil-service-icon">
                                <div class="mil-icon-frame1 mil-icon-frame-md">
                                    <img src="assets/project/23.png" alt="icon" style={{height:"40px", width:"90px"}}/>
                                </div>
                            </div>
                            <div class="mil-service-text">
                                <h5 class="mil-mb-30"><span class="mil-accent">04</span> Express JS</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-6">
                        <h4 class="mil-mb-60 mil-mt-30">Back-End</h4>
                        <div class="mil-divider mil-divider-left"></div>
                        <div class="mil-service-item">
                            <div class="mil-service-icon">
                                <div class="mil-icon-frame1 mil-icon-frame-md">
                                    <img src="assets/project/1.png" alt="icon" style={{height:"60px", width:"90px"}}/>
                                </div>
                            </div>
                            <div class="mil-service-text">
                                <h5 class="mil-mb-30"><span class="mil-accent">01</span> Java</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div class="mil-divider mil-divider-left"></div>
                        <div class="mil-service-item">
                            <div class="mil-service-icon">
                                <div class="mil-icon-frame1 mil-icon-frame-md">
                                    <img src="assets/project/2.png" alt="icon" style={{height:"30px", width:"80px"}}/>
                                </div>
                            </div>
                            <div class="mil-service-text">
                                <h5 class="mil-mb-30"><span class="mil-accent">02</span> Python</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div class="mil-divider mil-divider-left"></div>
                        <div class="mil-service-item">
                            <div class="mil-service-icon">
                                <div class="mil-icon-frame1 mil-icon-frame-md">
                                    <img src="assets/project/21.png" alt="icon" style={{height:"40px", width:"90px"}}/>
                                </div>
                            </div>
                            <div class="mil-service-text">
                                <h5 class="mil-mb-30"><span class="mil-accent">03</span> Node JS</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                                                <div class="mil-divider mil-divider-left"></div>
                        <div class="mil-service-item">
                            <div class="mil-service-icon">
                                <div class="mil-icon-frame1 mil-icon-frame-md">
                                    <img src="assets/project/24.png" alt="icon"style={{height:"40px", width:"90px"}}/>
                                </div>
                            </div>
                            <div class="mil-service-text">
                                <h5 class="mil-mb-30"><span class="mil-accent">04</span> SpringBoot</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-xl-6">
                        <h4 class="mil-mb-60 mil-mt-30">DevOps</h4>
                        <div class="mil-divider mil-divider-left"></div>
                        <div class="mil-service-item">
                            <div class="mil-service-icon">
                                <div class="mil-icon-frame1 mil-icon-frame-md">
                                    <img src="assets/project/20.png" alt="icon" style={{height:"40px", width:"90px"}}/>
                                </div>
                            </div>
                            <div class="mil-service-text">
                                <h5 class="mil-mb-30"><span class="mil-accent">01</span> Jenkins</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div class="mil-divider mil-divider-left"></div>
                        <div class="mil-service-item">
                            <div class="mil-service-icon">
                                <div class="mil-icon-frame1 mil-icon-frame-md">
                                    <img src="assets/project/25.png" alt="icon" style={{height:"60px", width:"90px"}}/>
                                </div>
                            </div>
                            <div class="mil-service-text">
                                <h5 class="mil-mb-30"><span class="mil-accent">02</span>CI/CD</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div class="mil-divider mil-divider-left"></div>
                        <div class="mil-service-item">
                            <div class="mil-service-icon">
                                <div class="mil-icon-frame1 mil-icon-frame-md">
                                    <img src="assets/project/10.png" alt="icon" style={{height:"60px", width:"90px"}}/>
                                </div>
                            </div>
                            <div class="mil-service-text">
                                <h5 class="mil-mb-30"><span class="mil-accent">03</span> Git</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div class="mil-divider mil-divider-left"></div>
                        <div class="mil-service-item">
                            <div class="mil-service-icon">
                                <div class="mil-icon-frame1 mil-icon-frame-md">
                                    <img src="assets/project/26.png" alt="icon" style={{height:"30px", width:"90px"}}/>
                                </div>
                            </div>
                            <div class="mil-service-text">
                                <h5 class="mil-mb-30"><span class="mil-accent">04</span> Bitbucket</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-6">
                        <h4 class="mil-mb-60 mil-mt-30">Cloud</h4>
                        <div class="mil-divider mil-divider-left"></div>
                        <div class="mil-service-item">
                            <div class="mil-service-icon">
                                <div class="mil-icon-frame1 mil-icon-frame-md">
                                    <img src="assets/project/16.png" alt="icon" style={{height:"60px", width:"90px"}}/>
                                </div>
                            </div>
                            <div class="mil-service-text">
                                <h5 class="mil-mb-30"><span class="mil-accent">01</span> Salesforce</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div class="mil-divider mil-divider-left"></div>
                        <div class="mil-service-item">
                            <div class="mil-service-icon">
                                <div class="mil-icon-frame1 mil-icon-frame-md">
                                    <img src="assets/project/18.png" alt="icon" style={{height:"60px", width:"90px"}}/>
                                </div>
                            </div>
                            <div class="mil-service-text">
                                <h5 class="mil-mb-30"><span class="mil-accent">02</span> AWS</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div class="mil-divider mil-divider-left"></div>
                        <div class="mil-service-item">
                            <div class="mil-service-icon">
                                <div class="mil-icon-frame1 mil-icon-frame-md">
                                    <img src="assets/project/5.png" alt="icon" style={{height:"30px", width:"90px"}}/>
                                </div>
                            </div>
                            <div class="mil-service-text">
                                <h5 class="mil-mb-30"><span class="mil-accent">03</span> Microsoft Azure</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                                                <div class="mil-divider mil-divider-left"></div>
                        <div class="mil-service-item">
                            <div class="mil-service-icon">
                                <div class="mil-icon-frame1 mil-icon-frame-md">
                                    <img src="assets/project/19.jpg" alt="icon" style={{height:"60px", width:"90px"}}/>
                                </div>
                            </div>
                            <div class="mil-service-text">
                                <h5 class="mil-mb-30"><span class="mil-accent">04</span> Google Cloud</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="row">
                    <div class="col-lg-6 col-xl-6">
                        <h4 class="mil-mb-60 mil-mt-30">Mobile App Developement</h4>
                        <div class="mil-divider mil-divider-left"></div>
                        <div class="mil-service-item">
                            <div class="mil-service-icon">
                                <div class="mil-icon-frame1 mil-icon-frame-md">
                                    <img src="assets/project/15.png" alt="icon" style={{height:"40px", width:"90px"}}/>
                                </div>
                            </div>
                            <div class="mil-service-text">
                                <h5 class="mil-mb-30"><span class="mil-accent">01</span> Flutter</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div class="mil-divider mil-divider-left"></div>
                        <div class="mil-service-item">
                            <div class="mil-service-icon">
                                <div class="mil-icon-frame1 mil-icon-frame-md">
                                    <img src="assets/project/10.png" alt="icon" style={{height:"60px", width:"90px"}}/>
                                </div>
                            </div>
                            <div class="mil-service-text">
                                <h5 class="mil-mb-30"><span class="mil-accent">02</span> Github</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                       
                        
                    </div>
                    <div class="col-lg-6 col-xl-6">
                        <h4 class="mil-mb-60 mil-mt-30">UI/UX</h4>
                        <div class="mil-divider mil-divider-left"></div>
                        <div class="mil-service-item">
                            <div class="mil-service-icon">
                                <div class="mil-icon-frame1 mil-icon-frame-md">
                                    <img src="assets/project/27.png" alt="icon" style={{height:"50px", width:"90px"}}/>
                                </div>
                            </div>
                            <div class="mil-service-text">
                                <h5 class="mil-mb-30"><span class="mil-accent">01</span> Figma</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div class="mil-divider mil-divider-left"></div>
                        <div class="mil-service-item">
                            <div class="mil-service-icon">
                                <div class="mil-icon-frame1 mil-icon-frame-md">
                                    <img src="assets/project/28.jpg" alt="icon" style={{height:"60px", width:"90px"}}/>
                                </div>
                            </div>
                            <div class="mil-service-text">
                                <h5 class="mil-mb-30"><span class="mil-accent">02</span> Artificial Intelligence</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        
                              
                    </div>
                </div>
                <div class="col-lg-12 col-xl-12">
                        <h4 class="mil-mb-60 mil-mt-30">Database</h4>
                        <div class="mil-divider mil-divider-left"></div>
                        <div class="mil-service-item">
                            <div class="mil-service-icon">
                                <div class="mil-icon-frame1 mil-icon-frame-md">
                                    <img src="assets/project/29.png" alt="icon" style={{height:"40px", width:"90px"}}/>
                                </div>
                            </div>
                            <div class="mil-service-text">
                                <h5 class="mil-mb-30"><span class="mil-accent">01</span> MongoDB</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div class="mil-divider mil-divider-left"></div>
                        <div class="mil-service-item">
                            <div class="mil-service-icon">
                                <div class="mil-icon-frame1 mil-icon-frame-md">
                                    <img src="assets/project/30.png" alt="icon" style={{height:"60px", width:"90px"}}/>
                                </div>
                            </div>
                            <div class="mil-service-text">
                                <h5 class="mil-mb-30"><span class="mil-accent">02</span> MySQL</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div class="mil-divider mil-divider-left"></div>
                        <div class="mil-service-item">
                            <div class="mil-service-icon">
                                <div class="mil-icon-frame1 mil-icon-frame-md">
                                    <img src="assets/project/31.jpg" alt="icon" style={{height:"60px", width:"90px"}}/>
                                </div>
                            </div>
                            <div class="mil-service-text">
                                <h5 class="mil-mb-30"><span class="mil-accent">03</span> Oracle</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
        {/* <!-- services end --> */}

    </>
  )
}

export default Technology