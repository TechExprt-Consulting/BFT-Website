import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const Submenu = () => (
  <div className="submenu dropdown-menu bg-white">
    <li>
      <Link to="/services/webDevelopement/saas">SAAS Developement</Link>
    </li>
    <li>
      <Link to="/services/webDevelopement/softwareDevelopement">Custom Software Developement</Link>
    </li>
    <li>
      <Link to="/services/webDevelopement/apiDevelopement">API Developement</Link>
    </li>
    <li>
      <Link to="/services/webDevelopement/adminPanel">Custom Admin Panel</Link>
    </li>
  </div>
);
const Submenu2 = () => (
  <ul className="submenu dropdown-menu bg-white">
    <li>
      <Link to="/services/salesforce/salesforceConsulting">Salesforce Consulting Services</Link>
    </li>
    <li>
      <Link to="/services/salesforce/salesforceCustomization">Salesforce Customization</Link>
    </li>
    <li>
      <Link to="/services/salesforce/salesforceImplementation">Salesforce Implementation</Link>
    </li>
    <li>
      <Link to="/services/salesforce/salesforceIntegration">Salesforce Integration</Link>
    </li>
    <li>
      <Link to="/services/salesforce/salesforceAppExchange">Salesforce App Exchange</Link>
    </li>
    <li>
      <Link to="/services/salesforce/salesforceMigration">Salesforce Migration</Link>
    </li>
    <li>
      <Link to="/services/salesforce/salesforceItSupport">Salesforce IT Support</Link>
    </li>
  </ul>
);
const Submenu3 = () => (
  <ul className="submenu dropdown-menu bg-white">
    <li>
      <Link to="/services/digitalMarketing/seo">Search Engine Optimization</Link>
    </li>
    <li>
      <Link to="/services/digitalMarketing/socialMedia">Social Media Marketing</Link>
    </li>
    <li>
      <Link to="/services/digitalMarketing/ppc">Pay Per Click</Link>
    </li>
    <li>
      <Link to="/services/digitalMarketing/contentMarketing">Content Marketing</Link>
    </li>
  </ul>
);
const Navbar = () => {
  const [isProductMenuOpen, setProductMenuOpen] = useState(false);
  const [isProduct1SubMenuOpen, setProduct1SubMenuOpen] = useState(false);
  const [isProduct2SubMenuOpen, setProduct2SubMenuOpen] = useState(false);

  const [isProduct3SubMenuOpen, setProduct3SubMenuOpen] = useState(false);

  const handleProductMenuHover = () => {
    setProductMenuOpen(true);
  };

  const handleProductMenuLeave = () => {
    setProductMenuOpen(false);
  };
  const handleProduct1SubMenuHover = () => {
    setProduct1SubMenuOpen(true);
  };

  const handleProduct1SubMenuLeave = () => {
    setProduct1SubMenuOpen(false);
  };
  const handleProduct2SubMenuHover = () => {
    setProduct2SubMenuOpen(true);
  };

  const handleProduct2SubMenuLeave = () => {
    setProduct2SubMenuOpen(false);
  };

  const handleProduct3SubMenuHover = () => {
    setProduct3SubMenuOpen(true);
  };

  const handleProduct3SubMenuLeave = () => {
    setProduct3SubMenuOpen(false);
  };
  return (
    <>
      <div className="mil-top-position mil-fixed ">
        <div className="mil-top-panel ">
          <div className="container">
            <Link
              to="/home"
              className="mil-logo "
              style={{ width: "250px", height: "90px" }}
            ></Link>
            <div className="mil-navigation">
              <nav>
                <ul>
                  <li className="nav-item">
                    <Link to="/home">Home</Link>
                  </li>

                  <li className="mil-has-children nav-item">
                    <Link to="/">Enterprise</Link>
                    <ul>
                      <li>
                        <Link to="/about">About us</Link>
                      </li>
                      <li>
                        <Link to="/team"> Our Team</Link>
                      </li>
                      {/* <li>
                        <Link to="/career">Careers</Link>
                      </li> */}
                    </ul>
                  </li>
                  <li className="mil-has-children nav-item">
                    <Link to="/caseStudy">Case Studies</Link>
                    <ul>
                      <li>
                        <Link to="/caseStudy/dmc">DMC</Link>
                      </li>
                      <li>
                        <Link to="/caseStudy/cargosprint"> CargoSprint</Link>
                      </li>
                      <li>
                        <Link to="/caseStudy/nexum">Nexum</Link>
                      </li>
                      <li>
                        <Link to="/caseStudy/continuum">Continuum</Link>
                      </li>
                      <li>
                        <Link to="/caseStudy/abuDhabi">AbuDhabi</Link>
                      </li>
                    </ul>
                  </li>

                  <li
                    className="nav-item dropdown mil-has-child"
                    onMouseEnter={handleProductMenuHover}
                    onMouseLeave={handleProductMenuLeave}
                  >
                    <Link to="">Services</Link>
                    <div className="dropdown-menu bg-white ">
                      <li
                        className="dropdown-submenu"
                        onMouseEnter={handleProduct1SubMenuHover}
                        onMouseLeave={handleProduct1SubMenuLeave}
                      >
                        <Link to="/services/webDevelopement">Web Developement &raquo;</Link>
                        {isProduct1SubMenuOpen && <Submenu />}
                      </li>
                      <li
                        className="dropdown-submenu"
                        onMouseEnter={handleProduct2SubMenuHover}
                        onMouseLeave={handleProduct2SubMenuLeave}
                      >
                        <Link to="/services/salesforce">
                          Salesforce Services &raquo;
                        </Link>
                        {isProduct2SubMenuOpen && <Submenu2 />}
                      </li>
                      <li
                        className="dropdown-submenu"
                        onMouseEnter={handleProduct3SubMenuHover}
                        onMouseLeave={handleProduct3SubMenuLeave}
                      >
                        <Link to="/services/digitalMarketing">Digital Marketing &raquo;</Link>
                        {isProduct3SubMenuOpen && <Submenu3 />}
                      </li>
                      <li>
                        <Link to="/services/devops">Devops Consulting</Link>
                      </li>
                      <li>
                        <Link to="/services/cloudMigration">Cloud Migration</Link>
                      </li>
                      <li>
                        <Link to="/services/mobileAppDevelopement">Mobile App Developement</Link>
                      </li>
                      <li>
                        <Link to="/services/blockChain">Blockchain Developement</Link>
                      </li>
                    </div>
                  </li>
                  {/* <li>
                    <Link to="/Faq">FAQ</Link>
                  </li> */}
                  <li className="nav-item">
                    <Link to="/technologies">Technologies</Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link to="/blog">Blog</Link>
                  </li> */}
                  <li className="nav-item">
                    <Link to="/career">Careers</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
                <div className="mil-search-icon">
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20.5848 19.7029C20.3908 19.8999 20.1358 19.997 19.8808 19.997C19.6268 19.997 19.3718 19.8999 19.1778 19.7029L15.5118 16.2199C13.9778 17.2549 12.3798 17.997 9.92584 17.997C4.98484 17.997 0.964844 13.959 0.964844 8.99695C0.964844 4.34995 4.98484 0.199951 9.92584 0.199951C14.8668 0.199951 18.8858 4.34995 18.8858 8.99695C18.8858 11.118 18.1468 13.68 16.9188 14.608L20.5848 18.29C20.9738 18.681 20.9738 19.3129 20.5848 19.7029ZM9.92584 1.99695C6.82984 1.99695 2.95684 5.13695 2.95684 8.99695C2.95684 12.857 6.82984 15.998 9.92584 15.998C11.8398 15.998 13.5758 15.217 14.8368 13.957C14.8408 13.952 14.8418 13.945 14.8468 13.941C14.8518 13.936 14.8578 13.935 14.8628 13.93C16.1168 12.663 16.8948 10.92 16.8948 8.99695C16.8948 5.13695 13.7678 1.99695 9.92584 1.99695Z"
                    />
                  </svg>
                </div>
              </nav>
            </div>
            <div className="mil-menu-btn">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </>
    //     <div class="mil-top-position mil-fixed">
    //       <div class="mil-top-panel mil-top-panel-transparent mil-animated">
    //         {/* <!-- mil-top-panel-transparent --> */}
    //         <div class="container">
    //           <Link
    //             to="/home"
    //             class="mil-logo"
    //             style={{ width: "250px", height: "90px" }}
    //           ></Link>
    //           <div class="mil-navigation">
    //             <nav>
    //               <ul>
    //                 <li>
    //                   <Link to="/home">Home</Link>
    //                 </li>

    //                 <li className="mil-has-children">
    //                   <Link to="/">Enterprise</Link>
    //                   <ul>
    //                     <li>
    //                       <Link to="/about">About us</Link>
    //                     </li>
    //                     <li>
    //                       <Link to="/team"> Our Team</Link>
    //                     </li>
    //                     <li>
    //                       <Link to="/career">Careers</Link>
    //                     </li>
    //                   </ul>
    //                 </li>
    //                 <li>
    //                   <Link to="/case">Case Studies</Link>
    //                 </li>

    //                 <li className="mil-has-children">
    //                   <Link to="/">Services</Link>
    //                   <ul>
    //                     <li >
    //                       <Link to="/salesforce">Salesforce Services</Link>
    //                     </li>

    // {/* <li className="mil-has-children" onMouseEnter={() => setShowPopup(true)} onMouseLeave={() => setShowPopup(false)}>
    //             <a to="/">Salesforce Services</a>
    //             {showPopup && (
    //                 <div className="popup-container">
    //                     <ul className="popup-list">
    //                         <li><a to="/salesforce/details">Service 1</a></li>
    //                         <li><a to="/salesforce/pricing">Service 2</a></li>
    //                     </ul>
    //                 </div>
    //             )}
    //         </li> */}

    //                     <li>
    //                       <Link to="/digital">Digital Marketing</Link>
    //                     </li>
    //                     <li>
    //                       <Link to="/blockChain">Blockchain Developement</Link>
    //                     </li>
    //                     <li>
    //                       <Link to="/cloud">Cloud Migration</Link>
    //                     </li>
    //                     <li>
    //                       <Link to="/deveops">Devops Consulting</Link>
    //                     </li>
    //                     <li>
    //                       <Link to="/mobileApp">Mobile App Developement</Link>
    //                     </li>
    //                     <li>
    //                       <Link to="/webApp">Web Developement</Link>
    //                     </li>
    //                   </ul>
    //                 </li>
    //                 {/* <li>
    //                   <Link to="/Faq">FAQ</Link>
    //                 </li> */}

    //                 <li>
    //                   <Link to="/blog">Blog</Link>
    //                 </li>
    //                 <li>
    //                   <Link to="/contact">Contact Us</Link>
    //                 </li>
    //               </ul>
    //               <div class="mil-search-icon">
    //                 <svg
    //                   width="21"
    //                   height="20"
    //                   viewBox="0 0 21 20"
    //                   fill="none"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                 >
    //                   <path
    //                     fill-rule="evenodd"
    //                     clip-rule="evenodd"
    //                     d="M20.5848 19.7029C20.3908 19.8999 20.1358 19.997 19.8808 19.997C19.6268 19.997 19.3718 19.8999 19.1778 19.7029L15.5118 16.2199C13.9778 17.2549 12.3798 17.997 9.92584 17.997C4.98484 17.997 0.964844 13.959 0.964844 8.99695C0.964844 4.34995 4.98484 0.199951 9.92584 0.199951C14.8668 0.199951 18.8858 4.34995 18.8858 8.99695C18.8858 11.118 18.1468 13.68 16.9188 14.608L20.5848 18.29C20.9738 18.681 20.9738 19.3129 20.5848 19.7029ZM9.92584 1.99695C6.82984 1.99695 2.95684 5.13695 2.95684 8.99695C2.95684 12.857 6.82984 15.998 9.92584 15.998C11.8398 15.998 13.5758 15.217 14.8368 13.957C14.8408 13.952 14.8418 13.945 14.8468 13.941C14.8518 13.936 14.8578 13.935 14.8628 13.93C16.1168 12.663 16.8948 10.92 16.8948 8.99695C16.8948 5.13695 13.7678 1.99695 9.92584 1.99695Z"
    //                   />
    //                 </svg>
    //               </div>
    //             </nav>
    //           </div>
    //           {/* <!-- mobile menu button --> */}
    //           <div class="mil-menu-btn">
    //             <span></span>
    //           </div>
    //           {/* <!-- mobile menu button end --> */}
    //         </div>
    //       </div>
    //     </div>
  );
};

export default Navbar;
