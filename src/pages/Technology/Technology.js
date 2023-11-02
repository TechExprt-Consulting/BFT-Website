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
                                <div class="mil-icon-frame mil-icon-frame-md">
                                    <img src="assets/project/22.png" alt="icon" style={{height:"50px", width:"50px"}}/>
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
                                <div class="mil-icon-frame mil-icon-frame-md">
                                    <img src="img/icons/md/2.svg" alt="icon"/>
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
                                <div class="mil-icon-frame mil-icon-frame-md">
                                    <img src="img/icons/md/3.svg" alt="icon"/>
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
                                <div class="mil-icon-frame mil-icon-frame-md">
                                    <img src="img/icons/md/3.svg" alt="icon"/>
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
                                <div class="mil-icon-frame mil-icon-frame-md">
                                    <img src="img/icons/md/4.svg" alt="icon"/>
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
                                <div class="mil-icon-frame mil-icon-frame-md">
                                    <img src="img/icons/md/5.svg" alt="icon"/>
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
                                <div class="mil-icon-frame mil-icon-frame-md">
                                    <img src="img/icons/md/6.svg" alt="icon"/>
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
                                <div class="mil-icon-frame mil-icon-frame-md">
                                    <img src="img/icons/md/6.svg" alt="icon"/>
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
                                <div class="mil-icon-frame mil-icon-frame-md">
                                    <img src="img/icons/md/1.svg" alt="icon"/>
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
                                <div class="mil-icon-frame mil-icon-frame-md">
                                    <img src="img/icons/md/2.svg" alt="icon"/>
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
                                <div class="mil-icon-frame mil-icon-frame-md">
                                    <img src="img/icons/md/3.svg" alt="icon"/>
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
                                <div class="mil-icon-frame mil-icon-frame-md">
                                    <img src="img/icons/md/3.svg" alt="icon"/>
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
                                <div class="mil-icon-frame mil-icon-frame-md">
                                    <img src="img/icons/md/4.svg" alt="icon"/>
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
                                <div class="mil-icon-frame mil-icon-frame-md">
                                    <img src="img/icons/md/5.svg" alt="icon"/>
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
                                <div class="mil-icon-frame mil-icon-frame-md">
                                    <img src="img/icons/md/6.svg" alt="icon"/>
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
                                <div class="mil-icon-frame mil-icon-frame-md">
                                    <img src="img/icons/md/6.svg" alt="icon"/>
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
                                <div class="mil-icon-frame mil-icon-frame-md">
                                    <img src="img/icons/md/1.svg" alt="icon"/>
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
                                <div class="mil-icon-frame mil-icon-frame-md">
                                    <img src="img/icons/md/2.svg" alt="icon"/>
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
                                <div class="mil-icon-frame mil-icon-frame-md">
                                    <img src="img/icons/md/4.svg" alt="icon"/>
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
                                <div class="mil-icon-frame mil-icon-frame-md">
                                    <img src="img/icons/md/5.svg" alt="icon"/>
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
                                <div class="mil-icon-frame mil-icon-frame-md">
                                    <img src="img/icons/md/1.svg" alt="icon"/>
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
                                <div class="mil-icon-frame mil-icon-frame-md">
                                    <img src="img/icons/md/2.svg" alt="icon"/>
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
                                <div class="mil-icon-frame mil-icon-frame-md">
                                    <img src="img/icons/md/1.svg" alt="icon"/>
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