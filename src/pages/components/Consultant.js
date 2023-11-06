import React from "react";
import { Link } from "react-router-dom";
const Consultant = () => {
  return (
    // <div className="consultant-container">
    // <div className="row justify-content-around mil-p-120-601 bg-dark border-rounded">
    //   <div className="col-md-3 col-lg-2 col-xl-2 mil-mb-301">
    //     <img
    //       src="/assets/blog/8.jpg"
    //       alt="mus"
    //       className="mil-logo m-0 p-0"
    //       style={{ width: "400px", height: "400px" }}
    //     />
    //   </div>

    //   <div className="col-md-4 col-lg-4 col-xl-4 text-align-center  ">
    //     <h2 className="text-white mt-2 mb-4">Want to be our next success story?</h2>
    //     <p className="text-white pb-4 ">
    //       Have an idea? Discuss our project with our team today! Lay down your
    //       requirements and venture into a successful partnership with BytesFarms.
    //     </p>
    //     <button type="submit" className="mil-button mil-accent-bg ">
    //       <Link to="/contact">Have a Free Consultation</Link>
    //     </button>
    //     <div className="vertical-button">
    //         <button className="mil-vertical-button text-dark">Get a Free quote!</button>
    //       </div>
    //     <div className="container"></div>
    //   </div>
    // </div>
    // </div>
    <div className="d-flex justify-content-center">
    <div className="mil-consultant-container ">
      <div className="row  justify-content-around mil-p-120-601">
        <div className="col-md-3 col-lg-2 col-xl-2 mil-mb-301">
          <img
            src="/assets/blog/7.jpg"
            alt="mus"
            className="mil-logo mil-mb-60"
            style={{ width: "500px", height: "400px" }}
          />
        </div>

        <div className="col-md-4 col-lg-4 col-xl-4 text-align-center">
          <h2 className="text-white mt-2 mb-4">
            Want to be our next success story?
          </h2>
          <p className="text-white pb-4">
            Have an idea? Discuss your project with our team today! Lay down
            your requirements and venture into a successful partnership with
            BytesFarms.
          </p>
          <button type="submit" className="mil-button mil-accent-bg mb-4">
            <Link to="/contact" >Have a Free Consultation</Link>
          </button>
        </div>
      </div>
      {/* <button className="mil-vertical-button text-dark">Get a Free quote!</button> */}
    </div>
    </div>
  );
};

export default Consultant;
