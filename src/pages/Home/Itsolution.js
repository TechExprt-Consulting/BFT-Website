// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import { Link } from 'react-router-dom';
// function CustomTabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`vertical-tabpanel-${index}`}
//       aria-labelledby={`vertical-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// CustomTabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `vertical-tab-${index}`,
//     'aria-controls': `vertical-tabpanel-${index}`,
//   };
// }

// export default function VerticalTabs() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ display: 'flex', height: 500 }}>
//       <Box sx={{ borderRight: 1, borderColor: 'divider' }}>
//         <Tabs
//           orientation="vertical"
//           variant="scrollable"
//           value={value}
//           onChange={handleChange}
//           aria-label="Vertical tabs example"
//           TabIndicatorProps={{
//             style: {
//               backgroundColor: 'rgb(245, 124, 0)', 
//             },
//           }}
//         >
//           <Tab label="IT Services" {...a11yProps(0)} sx={{
//             '&.Mui-selected': {
//               color: 'rgb(245, 124, 0)',
//                 fontFamily: '"Sora", sans-serif',
//             },
//           }} />
//           <Tab label="IT Solution" {...a11yProps(1)} sx={{
//             '&.Mui-selected': {
//               color: 'rgb(245, 124, 0)', 
//             },
//           }}/>
//           <Tab label="Digital Marketing" {...a11yProps(2)}sx={{
//             '&.Mui-selected': {
//               color: 'rgb(245, 124, 0)', 
//             },
//           }} />
//         </Tabs>
//       </Box>
//       <CustomTabPanel value={value} index={0}>
//       <div className="container d-flex ">
       
//     <section className="mil-services   ">
//     <div className="container">
      
     
//       <div className="row">
//         <div className="col-lg-6 col-xl-6">
//           <div className="mil-service-item pt-0">
//             <div className="mil-service-icon">
//               <div className="mil-icon-frame mil-icon-frame-md">
//                 <img src="assets/icon/1.svg" alt="icon" />
//               </div>
//             </div>
//             <div className="mil-service-text">
//               <h5 className="mil-mb-30">
//                 <span className="mil-accent">01</span> Salesforce
//                 Developement
//               </h5>
//               <p className="conten">
//                 Salesforce is a leading customer relationship management
//                 (CRM) platform that helps businesses manage their sales,
//                 customer service, and marketing needs efficiently.
//               </p>
//               <Link to="/salesforce" class="mil-link2 link-right mil-mb-30">
//                 <i class="fas fa-arrow-right"></i>
//               </Link>
//             </div>
//           </div>
//           <div className="mil-divider mil-divider-left"></div>
//           <div className="mil-service-item">
//             <div className="mil-service-icon">
//               <div className="mil-icon-frame mil-icon-frame-md">
//                 <img src="assets/icon/16.svg" alt="icon" />
//               </div>
//             </div>
//             <div className="mil-service-text">
//               <h5 className="mil-mb-30">
//                 <span className="mil-accent">02</span> DevOps
//               </h5>
//               <p className="conten">
//                 DevOps practices combine development and IT operations,
//                 emphasizing collaboration and automation, leading to faster
//                 software development, continuous integration, and delivery.
//               </p>
//               <Link to="/deveops" class="mil-link2 link-right mil-mb-30">
//                 <i class="fas fa-arrow-right"></i>
//               </Link>
//             </div>
//           </div>
//           </div>

//         <div className="col-lg-6 col-xl-6">
//           <div className="mil-service-item pt-0">
//             <div className="mil-service-icon">
//               <div className="mil-icon-frame mil-icon-frame-md">
//                 <img src="assets/icon/4.svg" alt="icon" />
//               </div>
//             </div>
//             <div className="mil-service-text">
//               <h5 className="mil-mb-30">
//                 <span className="mil-accent">04</span> Blockchain Consulting
//               </h5>
//               <p className="conten">
//                 Blockchain technology ensures secure, transparent, and
//                 tamper-proof record-keeping, revolutionizing various
//                 industries by enabling decentralized transactions and smart
//                 contracts.
//               </p>
//               <Link to="/blockChain" class="mil-link2 link-right mil-mb-30">
//                 <i class="fas fa-arrow-right"></i>
//               </Link>
//             </div>
//           </div>
//           <div className="mil-divider mil-divider-left"></div>
//           <div className="mil-service-item">
//             <div className="mil-service-icon">
//               <div className="mil-icon-frame mil-icon-frame-md">
//                 <img src="assets/icon/22.svg" alt="icon" />
//               </div>
//             </div>
//             <div className="mil-service-text">
//               <h5 className="mil-mb-30">
//                 <span className="mil-accent">05</span> Digital Marketing
//               </h5>
//               <p className="conten">
//                 Digital marketing is a multifaceted approach aimed at
//                 reaching, engaging, and converting an online audience.It
//                 empowers businesses to establish a robust customer
//                 relationship.
//               </p>
//               <Link to="/digital" class="mil-link2 link-right mil-mb-30">
//                 <i class="fas fa-arrow-right"></i>
//               </Link>
//             </div>
//           </div>
          
//         </div>
//       </div>
//     </div>
    
//   </section>
//   </div>
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={1}>
//       <div className="container d-flex ">
       
//        <section className="mil-services   ">
//        <div className="container">
         
        
//          <div className="row">
//            <div className="col-lg-6 col-xl-6">
//              <div className="mil-service-item pt-0">
//                <div className="mil-service-icon">
//                  <div className="mil-icon-frame mil-icon-frame-md">
//                    <img src="assets/icon/1.svg" alt="icon" />
//                  </div>
//                </div>
//                <div className="mil-service-text">
//                  <h5 className="mil-mb-30">
//                    <span className="mil-accent">01</span> Salesforce
//                    Developement
//                  </h5>
//                  <p className="conten">
//                    Salesforce is a leading customer relationship management
//                    (CRM) platform that helps businesses manage their sales,
//                    customer service, and marketing needs efficiently.
//                  </p>
//                  <Link to="/salesforce" class="mil-link2 link-right mil-mb-30">
//                    <i class="fas fa-arrow-right"></i>
//                  </Link>
//                </div>
//              </div>
//              <div className="mil-divider mil-divider-left"></div>
//              <div className="mil-service-item">
//                <div className="mil-service-icon">
//                  <div className="mil-icon-frame mil-icon-frame-md">
//                    <img src="assets/icon/16.svg" alt="icon" />
//                  </div>
//                </div>
//                <div className="mil-service-text">
//                  <h5 className="mil-mb-30">
//                    <span className="mil-accent">02</span> DevOps
//                  </h5>
//                  <p className="conten">
//                    DevOps practices combine development and IT operations,
//                    emphasizing collaboration and automation, leading to faster
//                    software development, continuous integration, and delivery.
//                  </p>
//                  <Link to="/deveops" class="mil-link2 link-right mil-mb-30">
//                    <i class="fas fa-arrow-right"></i>
//                  </Link>
//                </div>
//              </div>
//              </div>
   
//            <div className="col-lg-6 col-xl-6">
//              <div className="mil-service-item pt-0">
//                <div className="mil-service-icon">
//                  <div className="mil-icon-frame mil-icon-frame-md">
//                    <img src="assets/icon/4.svg" alt="icon" />
//                  </div>
//                </div>
//                <div className="mil-service-text">
//                  <h5 className="mil-mb-30">
//                    <span className="mil-accent">04</span> Blockchain Consulting
//                  </h5>
//                  <p className="conten">
//                    Blockchain technology ensures secure, transparent, and
//                    tamper-proof record-keeping, revolutionizing various
//                    industries by enabling decentralized transactions and smart
//                    contracts.
//                  </p>
//                  <Link to="/blockChain" class="mil-link2 link-right mil-mb-30">
//                    <i class="fas fa-arrow-right"></i>
//                  </Link>
//                </div>
//              </div>
//              <div className="mil-divider mil-divider-left"></div>
//              <div className="mil-service-item">
//                <div className="mil-service-icon">
//                  <div className="mil-icon-frame mil-icon-frame-md">
//                    <img src="assets/icon/22.svg" alt="icon" />
//                  </div>
//                </div>
//                <div className="mil-service-text">
//                  <h5 className="mil-mb-30">
//                    <span className="mil-accent">05</span> Digital Marketing
//                  </h5>
//                  <p className="conten">
//                    Digital marketing is a multifaceted approach aimed at
//                    reaching, engaging, and converting an online audience.It
//                    empowers businesses to establish a robust customer
//                    relationship.
//                  </p>
//                  <Link to="/digital" class="mil-link2 link-right mil-mb-30">
//                    <i class="fas fa-arrow-right"></i>
//                  </Link>
//                </div>
//              </div>
             
//            </div>
//          </div>
//        </div>
       
//      </section>
//      </div>
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={2}>
//       <div className="container d-flex ">
       
//        <section className="mil-services   ">
//        <div className="container">
         
        
//          <div className="row">
//            <div className="col-lg-6 col-xl-6">
//              <div className="mil-service-item pt-0">
//                <div className="mil-service-icon">
//                  <div className="mil-icon-frame mil-icon-frame-md">
//                    <img src="assets/icon/1.svg" alt="icon" />
//                  </div>
//                </div>
//                <div className="mil-service-text">
//                  <h5 className="mil-mb-30">
//                    <span className="mil-accent">01</span> Salesforce
//                    Developement
//                  </h5>
//                  <p className="conten">
//                    Salesforce is a leading customer relationship management
//                    (CRM) platform that helps businesses manage their sales,
//                    customer service, and marketing needs efficiently.
//                  </p>
//                  <Link to="/salesforce" class="mil-link2 link-right mil-mb-30">
//                    <i class="fas fa-arrow-right"></i>
//                  </Link>
//                </div>
//              </div>
//              <div className="mil-divider mil-divider-left"></div>
//              <div className="mil-service-item">
//                <div className="mil-service-icon">
//                  <div className="mil-icon-frame mil-icon-frame-md">
//                    <img src="assets/icon/16.svg" alt="icon" />
//                  </div>
//                </div>
//                <div className="mil-service-text">
//                  <h5 className="mil-mb-30">
//                    <span className="mil-accent">02</span> DevOps
//                  </h5>
//                  <p className="conten">
//                    DevOps practices combine development and IT operations,
//                    emphasizing collaboration and automation, leading to faster
//                    software development, continuous integration, and delivery.
//                  </p>
//                  <Link to="/deveops" class="mil-link2 link-right mil-mb-30">
//                    <i class="fas fa-arrow-right"></i>
//                  </Link>
//                </div>
//              </div>
//              </div>
   
//            <div className="col-lg-6 col-xl-6">
//              <div className="mil-service-item pt-0">
//                <div className="mil-service-icon">
//                  <div className="mil-icon-frame mil-icon-frame-md">
//                    <img src="assets/icon/4.svg" alt="icon" />
//                  </div>
//                </div>
//                <div className="mil-service-text">
//                  <h5 className="mil-mb-30">
//                    <span className="mil-accent">04</span> Blockchain Consulting
//                  </h5>
//                  <p className="conten">
//                    Blockchain technology ensures secure, transparent, and
//                    tamper-proof record-keeping, revolutionizing various
//                    industries by enabling decentralized transactions and smart
//                    contracts.
//                  </p>
//                  <Link to="/blockChain" class="mil-link2 link-right mil-mb-30">
//                    <i class="fas fa-arrow-right"></i>
//                  </Link>
//                </div>
//              </div>
//              <div className="mil-divider mil-divider-left"></div>
//              <div className="mil-service-item">
//                <div className="mil-service-icon">
//                  <div className="mil-icon-frame mil-icon-frame-md">
//                    <img src="assets/icon/22.svg" alt="icon" />
//                  </div>
//                </div>
//                <div className="mil-service-text">
//                  <h5 className="mil-mb-30">
//                    <span className="mil-accent">05</span> Digital Marketing
//                  </h5>
//                  <p className="conten">
//                    Digital marketing is a multifaceted approach aimed at
//                    reaching, engaging, and converting an online audience.It
//                    empowers businesses to establish a robust customer
//                    relationship.
//                  </p>
//                  <Link to="/digital" class="mil-link2 link-right mil-mb-30">
//                    <i class="fas fa-arrow-right"></i>
//                  </Link>
//                </div>
//              </div>
             
//            </div>
//          </div>
//        </div>
       
//      </section>
//      </div>
//       </CustomTabPanel>
//     </Box>
//   );
// }


import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ height: 'calc(100vh - 48px)', overflowY: 'auto' }}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
      return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
      };
    }

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <Box sx={{  borderRight: 1,
          borderColor: 'divider',
          position: 'sticky',
          top: 0,
          backgroundColor: 'background.paper',
          zIndex: 1, }}>
        {/* <div style={{ position: 'fixed', borderRight: '1px solid #ccc', height: '100vh' }}> */}
        <Tabs
        
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: 'orange',
              
            },
          }}
        >
          {/* Tab labels */}
          <Tab label="IT Services" {...a11yProps(0)} sx={{
            '&.Mui-selected': {
              color: 'rgb(245, 124, 0)',
                fontFamily: '"Sora", sans-serif',
            },
          }} />
          <Tab label="IT Solution" {...a11yProps(1)} sx={{
            '&.Mui-selected': {
              color: 'rgb(245, 124, 0)', 
            },
          }}/>
          <Tab label="Digital Marketing" {...a11yProps(2)}sx={{
            '&.Mui-selected': {
              color: 'rgb(245, 124, 0)', 
            },
          }} />
        </Tabs>
        {/* </div> */}
      </Box>
      {/* Content for each tab */}
      <CustomTabPanel value={value} index={0} className=''>
        {/* Your content for IT Services tab */}
        <div className="container d-flex ">
        {/* <Service/> */}
    <section className="mil-services   ">
    <div className="container">
      
     
      <div className="row">
        <div className="col-lg-6 col-xl-6">
          <div className="mil-service-item pt-0">
            <div className="mil-service-icon">
              <div className="mil-icon-frame mil-icon-frame-md">
                <img src="assets/icon/1.svg" alt="icon" />
              </div>
            </div>
            <div className="mil-service-text">
              <h5 className="mil-mb-30">
                <span className="mil-accent">01</span> Salesforce
                Developement
              </h5>
              <p className="conten">
                Salesforce is a leading customer relationship management
                (CRM) platform that helps businesses manage their sales,
                customer service, and marketing needs efficiently.
              </p>
              <Link to="/salesforce" class="mil-link2 link-right mil-mb-30">
                <i class="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="mil-divider mil-divider-left"></div>
          <div className="mil-service-item">
            <div className="mil-service-icon">
              <div className="mil-icon-frame mil-icon-frame-md">
                <img src="assets/icon/16.svg" alt="icon" />
              </div>
            </div>
            <div className="mil-service-text">
              <h5 className="mil-mb-30">
                <span className="mil-accent">02</span> DevOps
              </h5>
              <p className="conten">
                DevOps practices combine development and IT operations,
                emphasizing collaboration and automation, leading to faster
                software development, continuous integration, and delivery.
              </p>
              <Link to="/deveops" class="mil-link2 link-right mil-mb-30">
                <i class="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          </div>

        <div className="col-lg-6 col-xl-6">
          <div className="mil-service-item pt-0">
            <div className="mil-service-icon">
              <div className="mil-icon-frame mil-icon-frame-md">
                <img src="assets/icon/4.svg" alt="icon" />
              </div>
            </div>
            <div className="mil-service-text">
              <h5 className="mil-mb-30">
                <span className="mil-accent">04</span> Blockchain Consulting
              </h5>
              <p className="conten">
                Blockchain technology ensures secure, transparent, and
                tamper-proof record-keeping, revolutionizing various
                industries by enabling decentralized transactions and smart
                contracts.
              </p>
              <Link to="/blockChain" class="mil-link2 link-right mil-mb-30">
                <i class="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="mil-divider mil-divider-left"></div>
          <div className="mil-service-item">
            <div className="mil-service-icon">
              <div className="mil-icon-frame mil-icon-frame-md">
                <img src="assets/icon/22.svg" alt="icon" />
              </div>
            </div>
            <div className="mil-service-text">
              <h5 className="mil-mb-30">
                <span className="mil-accent">05</span> Digital Marketing
              </h5>
              <p className="conten">
                Digital marketing is a multifaceted approach aimed at
                reaching, engaging, and converting an online audience.It
                empowers businesses to establish a robust customer
                relationship.
              </p>
              <Link to="/digital" class="mil-link2 link-right mil-mb-30">
                <i class="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    
  </section>
  </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1} className=''>
        {/* Your content for IT Solution tab */}
        <div className="container d-flex ">
        {/* <Service/> */}
    <section className="mil-services   ">
    <div className="container">
      
     
      <div className="row">
        <div className="col-lg-6 col-xl-6">
          <div className="mil-service-item pt-0">
            <div className="mil-service-icon">
              <div className="mil-icon-frame mil-icon-frame-md">
                <img src="assets/icon/1.svg" alt="icon" />
              </div>
            </div>
            <div className="mil-service-text">
              <h5 className="mil-mb-30">
                <span className="mil-accent">01</span> Salesforce
                Developement
              </h5>
              <p className="conten">
                Salesforce is a leading customer relationship management
                (CRM) platform that helps businesses manage their sales,
                customer service, and marketing needs efficiently.
              </p>
              <Link to="/salesforce" class="mil-link2 link-right mil-mb-30">
                <i class="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="mil-divider mil-divider-left"></div>
          <div className="mil-service-item">
            <div className="mil-service-icon">
              <div className="mil-icon-frame mil-icon-frame-md">
                <img src="assets/icon/16.svg" alt="icon" />
              </div>
            </div>
            <div className="mil-service-text">
              <h5 className="mil-mb-30">
                <span className="mil-accent">02</span> DevOps
              </h5>
              <p className="conten">
                DevOps practices combine development and IT operations,
                emphasizing collaboration and automation, leading to faster
                software development, continuous integration, and delivery.
              </p>
              <Link to="/deveops" class="mil-link2 link-right mil-mb-30">
                <i class="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          </div>

        <div className="col-lg-6 col-xl-6">
          <div className="mil-service-item pt-0">
            <div className="mil-service-icon">
              <div className="mil-icon-frame mil-icon-frame-md">
                <img src="assets/icon/4.svg" alt="icon" />
              </div>
            </div>
            <div className="mil-service-text">
              <h5 className="mil-mb-30">
                <span className="mil-accent">04</span> Blockchain Consulting
              </h5>
              <p className="conten">
                Blockchain technology ensures secure, transparent, and
                tamper-proof record-keeping, revolutionizing various
                industries by enabling decentralized transactions and smart
                contracts.
              </p>
              <Link to="/blockChain" class="mil-link2 link-right mil-mb-30">
                <i class="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="mil-divider mil-divider-left"></div>
          <div className="mil-service-item">
            <div className="mil-service-icon">
              <div className="mil-icon-frame mil-icon-frame-md">
                <img src="assets/icon/22.svg" alt="icon" />
              </div>
            </div>
            <div className="mil-service-text">
              <h5 className="mil-mb-30">
                <span className="mil-accent">05</span> Digital Marketing
              </h5>
              <p className="conten">
                Digital marketing is a multifaceted approach aimed at
                reaching, engaging, and converting an online audience.It
                empowers businesses to establish a robust customer
                relationship.
              </p>
              <Link to="/digital" class="mil-link2 link-right mil-mb-30">
                <i class="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    
  </section>
  </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {/* Your content for Digital Marketing tab */}
        <div className="container d-flex ">
        {/* <Service/> */}
    <section className="mil-services  ">
    <div className="container">
      
     
      <div className="row">
        <div className="col-lg-6 col-xl-6">
          <div className="mil-service-item pt-0">
            <div className="mil-service-icon">
              <div className="mil-icon-frame mil-icon-frame-md">
                <img src="assets/icon/1.svg" alt="icon" />
              </div>
            </div>
            <div className="mil-service-text">
              <h5 className="mil-mb-30">
                <span className="mil-accent">01</span> Salesforce
                Developement
              </h5>
              <p className="conten">
                Salesforce is a leading customer relationship management
                (CRM) platform that helps businesses manage their sales,
                customer service, and marketing needs efficiently.
              </p>
              <Link to="/salesforce" class="mil-link2 link-right mil-mb-30">
                <i class="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="mil-divider mil-divider-left"></div>
          <div className="mil-service-item">
            <div className="mil-service-icon">
              <div className="mil-icon-frame mil-icon-frame-md">
                <img src="assets/icon/16.svg" alt="icon" />
              </div>
            </div>
            <div className="mil-service-text">
              <h5 className="mil-mb-30">
                <span className="mil-accent">02</span> DevOps
              </h5>
              <p className="conten">
                DevOps practices combine development and IT operations,
                emphasizing collaboration and automation, leading to faster
                software development, continuous integration, and delivery.
              </p>
              <Link to="/deveops" class="mil-link2 link-right mil-mb-30">
                <i class="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          </div>

        <div className="col-lg-6 col-xl-6">
          <div className="mil-service-item pt-0">
            <div className="mil-service-icon">
              <div className="mil-icon-frame mil-icon-frame-md">
                <img src="assets/icon/4.svg" alt="icon" />
              </div>
            </div>
            <div className="mil-service-text">
              <h5 className="mil-mb-30">
                <span className="mil-accent">04</span> Blockchain Consulting
              </h5>
              <p className="conten">
                Blockchain technology ensures secure, transparent, and
                tamper-proof record-keeping, revolutionizing various
                industries by enabling decentralized transactions and smart
                contracts.
              </p>
              <Link to="/blockChain" class="mil-link2 link-right mil-mb-30">
                <i class="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="mil-divider mil-divider-left"></div>
          <div className="mil-service-item">
            <div className="mil-service-icon">
              <div className="mil-icon-frame mil-icon-frame-md">
                <img src="assets/icon/22.svg" alt="icon" />
              </div>
            </div>
            <div className="mil-service-text">
              <h5 className="mil-mb-30">
                <span className="mil-accent">05</span> Digital Marketing
              </h5>
              <p className="conten">
                Digital marketing is a multifaceted approach aimed at
                reaching, engaging, and converting an online audience.It
                empowers businesses to establish a robust customer
                relationship.
              </p>
              <Link to="/digital" class="mil-link2 link-right mil-mb-30">
                <i class="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    
  </section>
  </div>
      </CustomTabPanel>
    </Box>
  );
}

