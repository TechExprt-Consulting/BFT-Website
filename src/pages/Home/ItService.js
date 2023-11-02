import React from "react";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const ItService = () => {
  return (
    <>
      <div className="mil-icon-box mil-center mil-mb-60  mt-5">
        CHALLENGES
        <h2 className="mil-mb-20 mt-2">What is Your Challenge Today?</h2>
        <p>
          Explore the challenges that connect to your situation. We can work
          together to <br />
          chart the best path forward for your specific organization and
          circumstance.
        </p>
      </div>
      
        
        <Accordion style={{ backgroundColor: "#D7ECF3", margin: "40px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className="hoverEffect" 
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
            <h6 className="mt-2 mb-2 text-secondary font-weight-500">
              Related offerings
            </h6>
            <div className="col-md-11 d-flex">
            <div className="col-md-7">
            <div>
              Strategy
              <Link to="/deveops" class="mil-link3 link-right">
                <i class="fas fa-arrow-right"></i>
              </Link>
            </div>{" "}
            
           
            <div>
              Stra
              <Link to="/deveops" class="mil-link3 link-right">
                <i class="fas fa-arrow-right"></i>
              </Link>
            </div>
            <div>
              Stra
              <Link to="/deveops" class="mil-link3 link-right">
                <i class="fas fa-arrow-right"></i>
              </Link>
            </div>
            </div>
            <div className="col-md-4">
            <div>
              Stra
              <Link to="/deveops" class="mil-link3 link-right">
                <i class="fas fa-arrow-right"></i>
              </Link>
            </div>
            <div>
              Stra
              <Link to="/deveops" class="mil-link3 link-right">
                <i class="fas fa-arrow-right"></i>
              </Link>
            </div>
            </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ backgroundColor: "#D7ECF3", margin: "40px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
            <h6 className="mt-2 mb-2 text-secondary font-weight-500">
              Related offerings
            </h6>
            <div className="col-md-11 d-flex">
            <div className="col-md-7">
            <div>
              Strategy
              <Link to="/deveops" class="mil-link3 link-right">
                <i class="fas fa-arrow-right"></i>
              </Link>
            </div>{" "}
            
           
            <div>
              Stra
              <Link to="/deveops" class="mil-link3 link-right">
                <i class="fas fa-arrow-right"></i>
              </Link>
            </div>
            <div>
              Stra
              <Link to="/deveops" class="mil-link3 link-right">
                <i class="fas fa-arrow-right"></i>
              </Link>
            </div>
            </div>
            <div className="col-md-4">
            <div>
              Stra
              <Link to="/deveops" class="mil-link3 link-right">
                <i class="fas fa-arrow-right"></i>
              </Link>
            </div>
            <div>
              Stra
              <Link to="/deveops" class="mil-link3 link-right">
                <i class="fas fa-arrow-right"></i>
              </Link>
            </div>
            </div>
            </div>
          </AccordionDetails>
        </Accordion>
      
    </>
  );
};

export default ItService;
