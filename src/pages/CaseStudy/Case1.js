import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
const Case1 = () => {
  return (
    <div className="mil-wrapper">
      <div className="mil-top-position mil-fixed ">
        <div className="mil-top-panel ">
          <div className="container">
            <Link
              to="/Home"
              className="mil-logo"
              style={{ width: "250px", height: "90px" }}             ></Link>
            <div className="mil-navigation">
              <nav>
                <ul>
                  <li>
                    <Link to="/Home">Home</Link>
                  </li>

                  <li className="mil-has-children">
                    <Link to="/">Enterprise</Link>
                    <ul>
                      <li>
                        <Link to="/About">About us</Link>
                      </li>
                      <li>
                        <Link to="/Team"> Our Team</Link>
                      </li>
                      <li>
                        <Link to="/Career">Careers</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/Case">Case Studies</Link>
                  </li>

                  <li className="mil-has-children">
                    <Link to="/">Services</Link>
                    <ul>
                      <li>
                        <Link to="/Salesforce">Salesforce Services</Link>
                      </li>
                      <li>
                        <Link to="/Digital">Digital Marketing</Link>
                      </li>

                      <li>
                        <Link to="/BlockChain">Blockchain Developement</Link>
                      </li>
                      <li>
                        <Link to="/Cloud">Cloud Migration</Link>
                      </li>
                      <li>
                        <Link to="/Deveops">Devops Consulting</Link>
                      </li>
                      <li>
                        <Link to="/MobileApp">Mobile App Developement</Link>
                      </li>
                      <li>
                        <Link to="/WebApp">Web Developement</Link>
                      </li>
                    </ul>
                  </li>
                  {/* <li>
                    <Link to="/Faq">FAQ</Link>
                  </li> */}

                  <li>
                    <Link to="/Blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/Contact">Contact Us</Link>
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

      {/* <!-- banner --> */}
      <div class="mil-banner-sm mil-deep-bg">
        <img
          src="assets/deco/map.png"
          alt="background"
          class="mil-background-image"
        />
        <div
          class="mil-deco mil-deco-accent"
          style={{ top: "47%", right: "10%", transform: "rotate(90deg)" }}
        ></div>
        <div class="mil-banner-content">
          <div class="container mil-relative">
            <Link to="/Case" class="mil-link link-left mil-mb-30">
              <i class="fas fa-arrow-left"></i>
              <span>All Cases</span>
            </Link>
            <h2 class="mil-uppercase">Delta Infotech</h2>
          </div>
        </div>
      </div>
      {/* <!-- banner end --> */}

      {/* <!-- project --> */}
      <section class="mil-p-120-90">
        <div class="container">
          <div class="row flex-sm-row-reverse justify-content-between">
            <div class="col-lg-4 col-xl-3">
              <div class="mil-project-info mil-mb-60">
                <h5 class="mil-list-title mil-mb-30">Project Info</h5>

                <p class="mil-mb-10">Client</p>
                <h6 class="mil-mb-15">eCoshop Club</h6>
                <div class="mil-divider mil-divider-left mil-mb-30"></div>
                <p class="mil-mb-10">Service</p>
                <h6 class="mil-mb-15">App Development</h6>
                <div class="mil-divider mil-divider-left mil-mb-30"></div>
                <p class="mil-mb-10">Industry</p>
                <h6 class="mil-mb-15">Retail, eCommerce</h6>
                <div class="mil-divider mil-divider-left mil-mb-30"></div>
                <p class="mil-mb-10">Stack</p>
                <h6>Android, Realm, Dagger 2, RxJava</h6>
              </div>
            </div>
            <div class="col-lg-7 col-xl-8">
              {/* <span class="mil-suptitle mil-suptitle-2 mil-mb-30">Overviews</span> */}
              <h3 class="mil-mb-30">Overview</h3>
              <p class="mil-mb-60">
                Continuum was just an idea where our client wanted to work
                rigorously on providing solutions to efface the hurdles of the
                B2B manual return process. His mission is to ease the process
                and minimize the efforts involved. He wanted to optimize the
                continuous transactions that happen post Purchase Order, address
                the issues of longer TAT due to delays or missed information,
                repeated errors as everything had to be manually. He onboarded
                BytesFarms to help him design and devise a software that could
                easily manage all the diversities and complexities of the system
                and yet come across as a much more feasible alternative.
              </p>
              <h3 class="mil-mb-30">Our Solution</h3>
              <p class="mil-mb-60">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>

              <div class="row">
                <div class="col-xl-6">
                  <ul class="mil-check-icon-list mil-mb-15">
                    <li>
                      <img src="assets/icon/sm/12.svg" alt="icon" />
                      <span class="mil-dark">
                        Quis suspendisse ultrices gravida.
                      </span>
                    </li>
                    <li>
                      <img src="assets/icon/sm/12.svg" alt="icon" />
                      <span class="mil-dark">Consectetur adipiscing elit.</span>
                    </li>
                    <li>
                      <img src="assets/icon/sm/12.svg" alt="icon" />
                      <span class="mil-dark">
                        Quis suspendisse ultrices gravida.
                      </span>
                    </li>
                    <li>
                      <img src="assets/icon/sm/12.svg" alt="icon" />
                      <span class="mil-dark">Consectetur adipiscing elit.</span>
                    </li>
                  </ul>
                </div>
                <div class="col-xl-6 mil-mb-30">
                  <ul class="mil-check-icon-list">
                    <li>
                      <img src="assets/icon/sm/12.svg" alt="icon" />
                      <span class="mil-dark">
                        Quis suspendisse ultrices gravida.
                      </span>
                    </li>
                    <li>
                      <img src="assets/icon/sm/12.svg" alt="icon" />
                      <span class="mil-dark">Consectetur adipiscing elit.</span>
                    </li>
                    <li>
                      <img src="assets/icon/sm/12.svg" alt="icon" />
                      <span class="mil-dark">
                        Quis suspendisse ultrices gravida.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- project end --> */}

      <div class="container">
        <div class="mil-divider"></div>
      </div>

      {/* <!-- project --> */}
      <section class="mil-p-120-60">
        <div class="container">
          <div class="row justify-content-between align-items-center">
            <div class="col-xl-5 mil-mb-60">
              <h3 class="mil-mb-30">The Solution</h3>
              <p class="mil-mb-30">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>

              <div class="mil-icon-box-head mil-long mil-mb-15">
                <div class="mil-icon-frame mil-icon-frame-sm">
                  <img src="assets/icon/sm/3.svg" alt="icon" />
                </div>
                <p class="mil-dark">
                  It is a long established fact that a reader will be
                </p>
              </div>
              <div class="mil-icon-box-head mil-long mil-mb-15">
                <div class="mil-icon-frame mil-icon-frame-sm">
                  <img src="assets/icon/sm/2.svg" alt="icon" />
                </div>
                <p class="mil-dark">There are many variations of passages</p>
              </div>
              <div class="mil-icon-box-head mil-long mil-mb-15">
                <div class="mil-icon-frame mil-icon-frame-sm">
                  <img src="assets/icon/sm/5.svg" alt="icon" />
                </div>
                <p class="mil-dark">All the Lorem Ipsum generators</p>
              </div>
              <div class="mil-icon-box-head mil-long mil-mb-15">
                <div class="mil-icon-frame mil-icon-frame-sm">
                  <img src="assets/icon/sm/6.svg" alt="icon" />
                </div>
                <p class="mil-dark">
                  Asearch for 'lorem ipsum' will uncover many
                </p>
              </div>
            </div>
            <div class="col-xl-6 mil-mb-60">
              <div class="mil-project-cover">
                <img src="assets/partner/4.png" alt="Project" />
              </div>
            </div>
          </div>
          <div class="row flex-sm-row-reverse justify-content-between align-items-center">
            <div class="col-xl-5 mil-mb-60">
              <h3 class="mil-mb-30">The Impact</h3>
              <p class="mil-mb-30">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>

              <div class="mil-icon-box-head mil-long mil-mb-15">
                <div class="mil-icon-frame mil-icon-frame-sm">
                  <img src="assets/icon/sm/7.svg" alt="icon" />
                </div>
                <p class="mil-dark">
                  It is a long established fact that a reader will be
                </p>
              </div>
              <div class="mil-icon-box-head mil-long mil-mb-15">
                <div class="mil-icon-frame mil-icon-frame-sm">
                  <img src="assets/icon/sm/4.svg" alt="icon" />
                </div>
                <p class="mil-dark">There are many variations of passages</p>
              </div>
              <div class="mil-icon-box-head mil-long mil-mb-15">
                <div class="mil-icon-frame mil-icon-frame-sm">
                  <img src="assets/icon/sm/8.svg" alt="icon" />
                </div>
                <p class="mil-dark">All the Lorem Ipsum generators</p>
              </div>
              <div class="mil-icon-box-head mil-long mil-mb-15">
                <div class="mil-icon-frame mil-icon-frame-sm">
                  <img src="assets/icon/sm/9.svg" alt="icon" />
                </div>
                <p class="mil-dark">
                  Asearch for 'lorem ipsum' will uncover many
                </p>
              </div>
            </div>
            <div class="col-xl-6 mil-mb-60">
              <div class="mil-project-cover">
                <img src="assets/project/2.png" alt="Project" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- project end --> */}

      <div class="container">
        <div class="mil-divider"></div>
      </div>

      {/* <!-- conclusion --> */}
      <section class="mil-p-120-60">
        <div class="mil-deco" style={{ top: "0", left: "30%" }}></div>
        <div class="container">
          <div class="row align-items-end mil-mb-90">
            <div class="col-xl-6">
              <h2 class="mil-mb-30">Conclusion</h2>

              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has.
              </p>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 col-xl-4">
              <div class="mil-icon-box-2 mil-mb-60">
                <div class="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="assets/icon/1.svg" alt="icon" />
                </div>
                <div class="mil-box-text">
                  <h4 class="mil-mb-30">Data Engineering</h4>
                  <p class="mil-box-text mil-mb-30">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-4">
              <div class="mil-icon-box-2 mil-mb-60">
                <div class="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="assets/icon/2.svg" alt="icon" />
                </div>
                <div class="mil-box-text">
                  <h4 class="mil-mb-30">Channel Platforms</h4>
                  <p class="mil-box-text mil-mb-30">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-4">
              <div class="mil-icon-box-2 mil-mb-60">
                <div class="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="assets/icon/3.svg" alt="icon" />
                </div>
                <div class="mil-box-text">
                  <h4 class="mil-mb-30">Dewelopment</h4>
                  <p class="mil-box-text mil-mb-30">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- conclusion end --> */}

      <div class="container">
        <div class="mil-divider mil-mb-60"></div>
      </div>

      <Footer />
    </div>
  );
};

export default Case1;
