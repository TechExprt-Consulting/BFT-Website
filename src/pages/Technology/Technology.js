import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
const Technology = () => {
  // const totalImages = 7; // Total number of images
  // const [currentImage, setCurrentImage] = useState(1);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImage(prevImage => (prevImage % totalImages) + 1);
  //   }, 2000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <>
      <Navbar />
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
        <div className="mil-fixed-button-container">
          <button className="mil-vertical-button text-dark ">
            <Link to='/contact'>Get a Free Quote!</Link>
          </button>
        </div>
      </div>
      {/* <!-- banner end --> */}
      {/* <div className="mil-p-90-60 logo-carousel container  mil-partners-frame">
      {[...Array(3)].map((_, index) => {
        const imageNumber = (currentImage + index) % totalImages || totalImages;
        return (
          <div className="logo-container " key={index}>
            <img
              src={`/assets/partner/${imageNumber}.png`}
              alt={`Logo ${imageNumber}`}
              className="logo-image"
              style={{ opacity: index === 1 ? 1 : 1 }} // Set opacity to create fade effect
            />
          </div>
        );
      })}
    </div> */}
      {/* <!-- services --> */}
      <section class="mil-services mil-p-120-90">
        {/* <div class="mil-deco" style={{ top: "0", right: "20%" }}></div> */}
        <div class="container ">
          <h2 class="mil-mb-30  ">
            Tech Stack <span class="mil-accent"></span>
          </h2>
          <div class="row">
            <div class="col-lg-6 col-xl-6">
              <h4 class="mil-mb-60 mil-mt-30">Front-End</h4>
              <div class="mil-divider mil-divider-left"></div>
              <div class="mil-service-item">
                <div class="mil-service-icon">
                  <div class="mil-icon-frame1 mil-icon-frame-md">
                    <img
                      src="assets/project/22.png"
                      alt="icon"
                      style={{ height: "40px", width: "80px" }}
                    />
                  </div>
                </div>
                <div class="mil-service-text">
                  <h5 class="mil-mb-30">
                    <span class="mil-accent">01</span> HTML, CSS, JavaScript
                  </h5>
                  <p>
                  Custom interactive features and animations using HTML, CSS, and JavaScript to enhance user experiences on your site.
                  </p>
                </div>
              </div>
              <div class="mil-divider mil-divider-left"></div>
              <div class="mil-service-item">
                <div class="mil-service-icon">
                  <div class="mil-icon-frame1 mil-icon-frame-md">
                    <img
                      src="assets/project/12.png"
                      alt="icon"
                      style={{ height: "60px", width: "90px" }}
                    />
                  </div>
                </div>
                <div class="mil-service-text">
                  <h5 class="mil-mb-30">
                    <span class="mil-accent">02</span> React JS
                  </h5>
                  <p>
                   Building responsive and interactive web applications using React.js, which includes component development and state management.
                  </p>
                </div>
              </div>
              <div class="mil-divider mil-divider-left"></div>
              <div class="mil-service-item">
                <div class="mil-service-icon">
                  <div class="mil-icon-frame1 mil-icon-frame-md">
                    <img
                      src="assets/project/11.png"
                      alt="icon"
                      style={{ height: "50px", width: "100px" }}
                    />
                  </div>
                </div>
                <div class="mil-service-text">
                  <h5 class="mil-mb-30">
                    <span class="mil-accent">03</span> Angular JS
                  </h5>
                  <p>
                  Data binding and dependency injection to facilitate dynamic content updates and modular code organization in web applications.
                  </p><br/>
                </div>
              </div>
              <div class="mil-divider mil-divider-left"></div>
              <div class="mil-service-item">
                <div class="mil-service-icon">
                  <div class="mil-icon-frame1 mil-icon-frame-md">
                    <img
                      src="assets/project/23.png"
                      alt="icon"
                      style={{ height: "40px", width: "90px" }}
                    />
                  </div>
                </div>
                <div class="mil-service-text">
                  <h5 class="mil-mb-30">
                    <span class="mil-accent">04</span> Express JS
                  </h5>
                  <p>
                  Web development and API services using Express.js, creating fast and efficient server-side applications in Node.js.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-xl-6">
              <h4 class="mil-mb-60 mil-mt-30">Back-End</h4>
              <div class="mil-divider mil-divider-left"></div>
              <div class="mil-service-item">
                <div class="mil-service-icon">
                  <div class="mil-icon-frame1 mil-icon-frame-md">
                    <img
                      src="assets/project/1.png"
                      alt="icon"
                      style={{ height: "60px", width: "90px" }}
                    />
                  </div>
                </div>
                <div class="mil-service-text">
                  <h5 class="mil-mb-30">
                    <span class="mil-accent">01</span> Java
                  </h5>
                  <p>
                  Java software development for web and mobile applications, Java-based system integration, and API development.
                  </p>
                </div>
              </div>
              <div class="mil-divider mil-divider-left"></div>
              <div class="mil-service-item">
                <div class="mil-service-icon">
                  <div class="mil-icon-frame1 mil-icon-frame-md">
                    <img
                      src="assets/project/2.png"
                      alt="icon"
                      style={{ height: "30px", width: "90px" }}
                    />
                  </div>
                </div>
                <div class="mil-service-text">
                  <h5 class="mil-mb-30">
                    <span class="mil-accent">02</span> Python
                  </h5>
                  <p>
                   Python programming and automation services, including web scraping and data analysis
                  </p><br/>
                </div>
              </div>
              <div class="mil-divider mil-divider-left"></div>
              <div class="mil-service-item">
                <div class="mil-service-icon">
                  <div class="mil-icon-frame1 mil-icon-frame-md">
                    <img
                      src="assets/project/21.png"
                      alt="icon"
                      style={{ height: "30px", width: "90px" }}
                    />
                  </div>
                </div>
                <div class="mil-service-text">
                  <h5 class="mil-mb-30">
                    <span class="mil-accent">03</span> Node JS
                  </h5>
                  <p>
                   Web development using Node.js for building fast and scalable server-side applications, RESTful API creation and maintenance with Node.js for seamless data communication.
                  </p>
                </div>
              </div>
              <div class="mil-divider mil-divider-left"></div>
              <div class="mil-service-item">
                <div class="mil-service-icon">
                  <div class="mil-icon-frame1 mil-icon-frame-md">
                    <img
                      src="assets/project/24.png"
                      alt="icon"
                      style={{ height: "30px", width: "90px" }}
                    />
                  </div>
                </div>
                <div class="mil-service-text">
                  <h5 class="mil-mb-30">
                    <span class="mil-accent">04</span> SpringBoot
                  </h5>
                  <p>
                  Custom web application development using Spring Boot and provide RESTful API development and integration.
                  </p>
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
                    <img
                      src="assets/project/20.png"
                      alt="icon"
                      style={{ height: "30px", width: "90px" }}
                    />
                  </div>
                </div>
                <div class="mil-service-text">
                  <h5 class="mil-mb-30">
                    <span class="mil-accent">01</span> Jenkins
                  </h5>
                  <p>
                  Continuous integration and continuous delivery (CI/CD) services to automate and streamline software development and deployment processes.
                  </p>
                </div>
              </div>
              <div class="mil-divider mil-divider-left"></div>
              <div class="mil-service-item">
                <div class="mil-service-icon">
                  <div class="mil-icon-frame1 mil-icon-frame-md">
                    <img
                      src="assets/project/25.png"
                      alt="icon"
                      style={{ height: "70px", width: "100px" }}
                    />
                  </div>
                </div>
                <div class="mil-service-text">
                  <h5 class="mil-mb-30">
                    <span class="mil-accent">02</span>CI/CD
                  </h5>
                  <p>
                  Implement automated testing and deployment pipelines for faster software delivery in CI/CD
                  </p><br/>
                </div>
              </div>
              <div class="mil-divider mil-divider-left"></div>
              <div class="mil-service-item">
                <div class="mil-service-icon">
                  <div class="mil-icon-frame1 mil-icon-frame-md">
                    <img
                      src="assets/project/10.png"
                      alt="icon"
                      style={{ height: "60px", width: "90px" }}
                    />
                  </div>
                </div>
                <div class="mil-service-text">
                  <h5 class="mil-mb-30">
                    <span class="mil-accent">03</span> Git
                  </h5>
                  <p>
                   Git repository management, including branching, merging, and version control, Git workflow optimization, and code collaboration facilitation.
                  </p>
                </div>
              </div>
              <div class="mil-divider mil-divider-left"></div>
              <div class="mil-service-item">
                <div class="mil-service-icon">
                  <div class="mil-icon-frame1 mil-icon-frame-md">
                    <img
                      src="assets/project/26.png"
                      alt="icon"
                      style={{ height: "20px", width: "90px" }}
                    />
                  </div>
                </div>
                <div class="mil-service-text">
                  <h5 class="mil-mb-30">
                    <span class="mil-accent">04</span> Bitbucket
                  </h5>
                  <p>
                  Bitbucket offers version control and collaboration tools for software development, enabling code hosting, branching, and merging. It provides continuous integration, issue tracking, and code reviews, enhancing team productivity and code quality.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-xl-6">
              <h4 class="mil-mb-60 mil-mt-30">Cloud</h4>
              <div class="mil-divider mil-divider-left"></div>
              <div class="mil-service-item">
                <div class="mil-service-icon">
                  <div class="mil-icon-frame1 mil-icon-frame-md">
                    <img
                      src="assets/project/16.png"
                      alt="icon"
                      style={{ height: "60px", width: "90px" }}
                    />
                  </div>
                </div>
                <div class="mil-service-text">
                  <h5 class="mil-mb-30">
                    <span class="mil-accent">01</span> Salesforce
                  </h5>
                  <p>
                  Salesforce consulting and customization for business process optimization. Salesforce training and support for efficient CRM usage and adoption.
                  </p>
                </div>
              </div>
              <div class="mil-divider mil-divider-left"></div>
              <div class="mil-service-item">
                <div class="mil-service-icon">
                  <div class="mil-icon-frame1 mil-icon-frame-md">
                    <img
                      src="assets/project/18.png"
                      alt="icon"
                      style={{ height: "40px", width: "90px" }}
                    />
                  </div>
                </div>
                <div class="mil-service-text">
                  <h5 class="mil-mb-30">
                    <span class="mil-accent">02</span> AWS
                  </h5>
                  <p>
                  You can offer AWS cloud computing services, such as hosting websites and applications, and provide data storage and analytics solutions for businesses.
                  </p>
                </div>
              </div>
              <div class="mil-divider mil-divider-left"></div>
              <div class="mil-service-item">
                <div class="mil-service-icon">
                  <div class="mil-icon-frame1 mil-icon-frame-md">
                    <img
                      src="assets/project/5.png"
                      alt="icon"
                      style={{ height: "30px", width: "100px" }}
                    />
                  </div>
                </div>
                <div class="mil-service-text">
                  <h5 class="mil-mb-30">
                    <span class="mil-accent">03</span> Microsoft Azure
                  </h5>
                  <p>
                  Cloud computing and storage solutions in Microsoft Azure, including virtual machines and data storage services.
                  </p>
                </div>
              </div>
              <div class="mil-divider mil-divider-left"></div>
              <div class="mil-service-item">
                <div class="mil-service-icon">
                  <div class="mil-icon-frame1 mil-icon-frame-md">
                    <img
                      src="assets/project/19.jpg"
                      alt="icon"
                      style={{ height: "60px", width: "90px" }}
                    />
                  </div>
                </div>
                <div class="mil-service-text">
                  <h5 class="mil-mb-30">
                    <span class="mil-accent">04</span> Google Cloud
                  </h5>
                  <p>
                  You can offer cloud computing and storage services on Google Cloud, as well as data analytics and machine learning solutions for businesses.
                  </p>
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
                    <img
                      src="assets/project/15.png"
                      alt="icon"
                      style={{ height: "30px", width: "90px" }}
                    />
                  </div>
                </div>
                <div class="mil-service-text">
                  <h5 class="mil-mb-30">
                    <span class="mil-accent">01</span> Flutter
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div class="mil-divider mil-divider-left"></div>
              <div class="mil-service-item">
                <div class="mil-service-icon">
                  <div class="mil-icon-frame1 mil-icon-frame-md">
                    <img
                      src="assets/project/10.png"
                      alt="icon"
                      style={{ height: "60px", width: "90px" }}
                    />
                  </div>
                </div>
                <div class="mil-service-text">
                  <h5 class="mil-mb-30">
                    <span class="mil-accent">02</span> Github
                  </h5>
                  <p>
                  Git repository management, including branching, merging, and version control, Git workflow optimization, and code collaboration facilitation.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-xl-6">
              <h4 class="mil-mb-60 mil-mt-30">UI/UX</h4>
              <div class="mil-divider mil-divider-left"></div>
              <div class="mil-service-item">
                <div class="mil-service-icon">
                  <div class="mil-icon-frame1 mil-icon-frame-md">
                    <img
                      src="assets/project/27.png"
                      alt="icon"
                      style={{ height: "40px", width: "90px" }}
                    />
                  </div>
                </div>
                <div class="mil-service-text">
                  <h5 class="mil-mb-30">
                    <span class="mil-accent">01</span> Figma
                  </h5>
                  <p>
                   I can create user-friendly and interactive web and mobile app prototypes in Figma, ensuring seamless user experiences and smooth design collaboration.
                  </p>
                </div>
              </div>
              <div class="mil-divider mil-divider-left"></div>
              <div class="mil-service-item">
                <div class="mil-service-icon">
                  <div class="mil-icon-frame1 mil-icon-frame-md">
                    <img
                      src="assets/project/28.jpg"
                      alt="icon"
                      style={{ height: "60px", width: "90px" }}
                    />
                  </div>
                </div>
                <div class="mil-service-text">
                  <h5 class="mil-mb-30">
                    <span class="mil-accent">02</span> Adobe Illustrator
                  </h5>
                  <p>
                  Specializes in vector graphics and can design logos, illustrations, and pictures with precision and creativity, catering to various design needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div class="col-lg-6 col-xl-6">
                <h4 class="mil-mb-60 mil-mt-30">Database</h4>
                <div class="mil-divider mil-divider-left"></div>
                <div class="mil-service-item">
                  <div class="mil-service-icon">
                    <div class="mil-icon-frame1 mil-icon-frame-md">
                      <img
                        src="assets/project/29.png"
                        alt="icon"
                        style={{ height: "40px", width: "90px" }}
                      />
                    </div>
                  </div>
                  <div class="mil-service-text">
                    <h5 class="mil-mb-30">
                      <span class="mil-accent">01</span> MongoDB
                    </h5>
                    <p>
                     NoSQL database design and development, data modeling, and performance optimization for scalable, document-oriented data storage.
                    </p>
                  </div>
                </div>
                <div class="mil-divider mil-divider-left"></div>
                <div class="mil-service-item">
                  <div class="mil-service-icon">
                    <div class="mil-icon-frame1 mil-icon-frame-md">
                      <img
                        src="assets/project/30.png"
                        alt="icon"
                        style={{ height: "60px", width: "90px" }}
                      />
                    </div>
                  </div>
                  <div class="mil-service-text">
                    <h5 class="mil-mb-30">
                      <span class="mil-accent">02</span> MySQL
                    </h5>
                    <p>
                     Relational database design, schema development, and query optimization for efficient data storage and retrieval.
                    </p>
                  </div>
                </div>
                <div class="mil-divider mil-divider-left"></div>
                <div class="mil-service-item">
                  <div class="mil-service-icon">
                    <div class="mil-icon-frame1 mil-icon-frame-md">
                      <img
                        src="assets/project/31.png"
                        alt="icon"
                        style={{ height: "60px", width: "90px" }}
                      />
                    </div>
                  </div>
                  <div class="mil-service-text">
                    <h5 class="mil-mb-30">
                      <span class="mil-accent">03</span> Oracle
                    </h5>
                    <p>
                     Oracle services cover database administration, performance tuning, and PL/SQL development, ensuring reliable and high-performance data management.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-xl-6">
                <h4 class="mil-mb-60 mil-mt-30">SEO</h4>
                <div class="mil-divider mil-divider-left"></div>
                <div class="mil-service-item">
                  <div class="mil-service-icon">
                    <div class="mil-icon-frame1 mil-icon-frame-md">
                      <img
                        src="assets/project/uber.png"
                        alt="icon"
                        style={{ height: "40px", width: "90px" }}
                      />
                    </div>
                  </div>
                  <div class="mil-service-text">
                    <h5 class="mil-mb-30">
                      <span class="mil-accent">01</span> UberSuggest
                    </h5>
                    <p>
                    SEO analysis and keyword research services using Ubersuggest to help clients improve their online visibility and content strategy.
                    </p>
                  </div>
                </div>
                <div class="mil-divider mil-divider-left"></div>
                <div class="mil-service-item">
                  <div class="mil-service-icon">
                    <div class="mil-icon-frame1 mil-icon-frame-md">
                      <img
                        src="assets/project/semrush.png"
                        alt="icon"
                        style={{ height: "20px", width: "90px" }}
                      />
                    </div>
                  </div>
                  <div class="mil-service-text">
                    <h5 class="mil-mb-30">
                      <span class="mil-accent">02</span> Semrush
                    </h5>
                    <p>
                    Keyword research and analysis to improve SEO, as well as competitive analysis to enhance online marketing strategies for clients.
                    </p>
                  </div>
                </div>
                <div class="mil-divider mil-divider-left"></div>
                <div class="mil-service-item">
                  <div class="mil-service-icon">
                    <div class="mil-icon-frame1 mil-icon-frame-md">
                      <img
                        src="assets/project/ahref.jpg"
                        alt="icon"
                        style={{ height: "60px", width: "90px" }}
                      />
                    </div>
                  </div>
                  <div class="mil-service-text">
                    <h5 class="mil-mb-30">
                      <span class="mil-accent">03</span> Ahref
                    </h5>
                    <p>
                    SEO analysis and keyword research services to optimize website rankings and visibility on search engines.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-xl-6">
              <h4 class="mil-mb-60 mil-mt-30">Graphic Designing</h4>
              <div class="mil-divider mil-divider-left"></div>
              <div class="mil-service-item">
                <div class="mil-service-icon">
                  <div class="mil-icon-frame1 mil-icon-frame-md">
                    <img
                      src="assets/project/canva.png"
                      alt="icon"
                      style={{ height: "50px", width: "90px" }}
                    />
                  </div>
                </div>
                <div class="mil-service-text">
                  <h5 class="mil-mb-30">
                    <span class="mil-accent">01</span> Canva
                  </h5>
                  <p>
                   Create eye-catching social media posts, logos, and marketing materials using Canva's intuitive design tools.
                  </p>
                </div>
              </div>
              <div class="mil-divider mil-divider-left"></div>
              <div class="mil-service-item">
                <div class="mil-service-icon">
                  <div class="mil-icon-frame1 mil-icon-frame-md">
                    <img
                      src="assets/project/27.png"
                      alt="icon"
                      style={{ height: "60px", width: "90px" }}
                    />
                  </div>
                </div>
                <div class="mil-service-text">
                  <h5 class="mil-mb-30">
                    <span class="mil-accent">02</span> Figma
                  </h5>
                  <p>
                   I can create user-friendly and interactive web and mobile app prototypes in Figma, ensuring seamless user experiences and smooth design collaboration.
                  </p>
                </div>
              </div>
              <div class="mil-divider mil-divider-left"></div>
              <div class="mil-service-item">
                <div class="mil-service-icon">
                  <div class="mil-icon-frame1 mil-icon-frame-md">
                    <img
                      src="assets/project/ps.png"
                      alt="icon"
                      style={{ height: "45px", width: "90px" }}
                    />
                  </div>
                </div>
                <div class="mil-service-text">
                  <h5 class="mil-mb-30">
                    <span class="mil-accent">03</span> Photoshop
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div class="mil-divider mil-divider-left"></div>
              <div class="mil-service-item">
                <div class="mil-service-icon">
                  <div class="mil-icon-frame1 mil-icon-frame-md">
                    <img
                      src="assets/project/illustrator.jpg"
                      alt="icon"
                      style={{ height: "60px", width: "70px" }}
                    />
                  </div>
                </div>
                <div class="mil-service-text">
                  <h5 class="mil-mb-30">
                    <span class="mil-accent">04</span> Illustrator
                  </h5>
                  <p>
                   Specializes in vector graphics and can design logos, illustrations, and pictures with precision and creativity, catering to various design needs.
                  </p>
                </div>
               
                </div>
                <div class="mil-divider mil-divider-left"></div>
              <div class="mil-service-item">
                <div class="mil-service-icon">
                  <div class="mil-icon-frame1 mil-icon-frame-md">
                    <img
                      src="assets/project/invision.png"
                      alt="icon"
                      style={{ height: "70px", width: "100px" }}
                    />
                  </div>
                </div>
                <div class="mil-service-text">
                  <h5 class="mil-mb-30">
                    <span class="mil-accent">05</span> Invision
                  </h5>
                  <p>
                   Develop interactive prototypes to showcase the functionality and flow of digital products, helping clients visualize their ideas before development
                  </p>
                </div>
               
                </div>
            </div>
            <div class="col-lg-6 col-xl-6">
              <h4 class="mil-mb-60 mil-mt-30">Digital Marketing & Data Analytics</h4>
              <div class="mil-divider mil-divider-left"></div>
              <div class="mil-service-item">
                <div class="mil-service-icon">
                  <div class="mil-icon-frame1 mil-icon-frame-md">
                    <img
                      src="assets/project/6.png"
                      alt="icon"
                      style={{ height: "90px", width: "110px" }}
                    />
                  </div>
                </div>
                <div class="mil-service-text">
                  <h5 class="mil-mb-30">
                    <span class="mil-accent">01</span> Google Analytics
                  </h5>
                  <p>
                  Google Analytics setup and configuration for website tracking, Data analysis, and reporting to improve online performance. 
                  </p>
                </div>
              </div>
              <div class="mil-divider mil-divider-left"></div>
              <div class="mil-service-item">
                <div class="mil-service-icon">
                  <div class="mil-icon-frame1 mil-icon-frame-md">
                    <img
                      src="assets/project/spyfu.png"
                      alt="icon"
                      style={{ height: "30px", width: "80px" }}
                    />
                  </div>
                </div>
                <div class="mil-service-text">
                  <h5 class="mil-mb-30">
                    <span class="mil-accent">02</span> Spyfu
                  </h5>
                  <p>
                  Competitive intelligence services, helping businesses analyze their competitors' digital marketing strategies and discover valuable insights.
                  </p>
                </div>
              </div>
              <div class="mil-divider mil-divider-left"></div>
              <div class="mil-service-item">
                <div class="mil-service-icon">
                  <div class="mil-icon-frame1 mil-icon-frame-md">
                    <img
                      src="assets/project/grammarly.png"
                      alt="icon"
                      style={{ height: "40px", width: "90px" }}
                    />
                  </div>
                </div>
                <div class="mil-service-text">
                  <h5 class="mil-mb-30">
                    <span class="mil-accent">03</span> Grammarly
                  </h5>
                  <p>
                   Proofreading and editing services to improve the clarity and correctness of written content
                  </p><br/>
                </div>
              </div>
             <div class="mil-divider mil-divider-left"></div>
              <div class="mil-service-item">
                <div class="mil-service-icon">
                  <div class="mil-icon-frame1 mil-icon-frame-md">
                    <img
                      src="assets/project/hubspot.png"
                      alt="icon"
                      style={{ height: "20px", width: "90px" }}
                    />
                  </div>
                </div>
                <div class="mil-service-text">
                  <h5 class="mil-mb-30">
                    <span class="mil-accent">04</span> Hubspot
                  </h5>
                  <p>
                  Create and manage marketing campaigns, email automation, and lead nurturing in HubSpot.
                  </p><br/>
                </div>
               
                </div>
                <div class="mil-divider mil-divider-left"></div>
              <div class="mil-service-item">
                <div class="mil-service-icon">
                  <div class="mil-icon-frame1 mil-icon-frame-md">
                    <img
                      src="assets/project/apollo.png"
                      alt="icon"
                      style={{ height: "40px", width: "90px" }}
                    />
                  </div>
                </div>
                <div class="mil-service-text">
                  <h5 class="mil-mb-30">
                    <span class="mil-accent">05</span> Apollo
                  </h5>
                  <p>
                   Apollo.io's database can be utilized to enhance lead generation and prospecting efforts.
                  </p>
                </div>
               
                </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- services end --> */}
    </>
  );
};

export default Technology;
