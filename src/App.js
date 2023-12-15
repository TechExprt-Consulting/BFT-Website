import 'normalize.css';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/components/Navbar";
import Footer from "./pages/components/Footer";
import Home from "./pages/Home/Home";
import Team from "./pages/Teams/Team";
import Careers from "./pages/Career/Careers";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import Blog1 from './pages/Blog/Blog1';
import "bootstrap/dist/css/bootstrap.css";
import About from "./pages/About/About";
import Faq from "./pages/FAQ/Faq";
import Salesforce from "./pages/Services/Salesforce";
import Digital from "./pages/Services/Digital";
import Seo from './pages/Services/Seo';
import MarketResearch from './pages/Services/MarketResearch';
import Ppc from './pages/Services/Ppc';
import SocialMedia from './pages/Services/SocialMedia';
import ContentM from './pages/Services/ContentM';
import ContentW from './pages/Services/ContentW';
import BlockChain from "./pages/Services/BlockChain";
import Deveops from "./pages/Services/Deveops";
import Cloud from "./pages/Services/Cloud";
import WebApp from "./pages/Services/WebApp";
import MobileApp from "./pages/Services/MobileApp";
import CaseStudies from "./pages/CaseStudy/CaseStudies";
import Continuum from "./pages/CaseStudy/Continum";
import DMC from "./pages/CaseStudy/DMC";
import Nexum from "./pages/CaseStudy/Nexum";
import CargoSprint from "./pages/CaseStudy/Cargosprnt";
import AbuDhabi from "./pages/CaseStudy/Abudhbi";
import ScrollToTop from './pages/components/ScrollToTop';
import Consultant from './pages/components/Consultant';
import Testimonial from './pages/components/Testimonial';
import Client from './pages/Home/Client';
import ItService from './pages/Home/ItService';
import Itsolution from './pages/Home/Itsolution';
import Technology from './pages/Technology/Technology';
import SalesCons from './pages/Services/SalesCons';
import SalesCust from './pages/Services/SalesCust';
import SalesExc from './pages/Services/SalesExc';
import SalesImp from './pages/Services/SalesImp';
import SalesInt from './pages/Services/SalesInt';
import SalesIt from './pages/Services/SalesIt';
import SalesMig from './pages/Services/SalesMig';
import Saas from './pages/Services/Saas';
import Api from './pages/Services/Api';
import Admin from './pages/Services/Admin';
import SD from './pages/Services/SD';
import Managed from './pages/Services/Managed';
import Blog3 from './pages/Blog/Blog3';
import Blog2 from './pages/Blog/Blog2';
import Blog4 from './pages/Blog/Blog4';
import Blog5 from './pages/Blog/Blog5';
import Blog6 from './pages/Blog/Blog6';
import ApplyModal from './pages/components/ApplyModal';
function App() {
 
  return (

    <>
      <Router >
      <ScrollToTop />
        <Routes>
<Route path ='/apply' element={<ApplyModal/>}/>
          <Route path='/services/managed-service' element={<Managed/>}/>
          <Route path='/services/web-developement/saas' element={<Saas/>}/>
          <Route path='/services/web-developement/api-developement' element={<Api/>}/>
          <Route path='/services/web-developement/admin-panel' element={<Admin/>}/>
          <Route path='/services/web-developement/software-developement' element={<SD/>}/>

        <Route path='/services/salesforce/salesforce-consulting' element={<SalesCons/>}/>
        <Route path='/services/salesforce/salesforce-customization' element={<SalesCust/>}/>
        <Route path='/services/salesforce/salesforce-app-exchange' element={<SalesExc/>}/>
        <Route path='/services/salesforce/salesforce-implementation' element={<SalesImp/>}/>
        <Route path='/services/salesforce/salesforce-integration' element={<SalesInt/>}/>
        <Route path='/services/salesforce/salesforce-it-support' element={<SalesIt/>}/>
        <Route path='/services/salesforce/salesforce-migration' element={<SalesMig/>}/>



        <Route path='/technologies' element={<Technology/>}/>

          <Route path='/itsolution' element={<Itsolution/>}/>
          <Route path='/itservices' element={<ItService/>}/>
          <Route path='/client' element={<Client/>}/>
          <Route path='/test' element={<Testimonial/>}/>
          <Route path='/cons' element={<Consultant/>}/>
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/" element={<Home />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/career" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />\

          <Route path="/blog" element={<Blog />} />
          <Route path='/blog1' element={<Blog1/>}/>
          <Route path='/blog2' element={<Blog2/>}/>
          <Route path='/blog3' element={<Blog3/>}/>
          <Route path='/blog4' element={<Blog4/>}/>
          <Route path='/blog5' element={<Blog5/>}/>
          <Route path='/blog6' element={<Blog6/>}/>

          <Route path="/faq" element={<Faq />} />3
          <Route path="/services/salesforce" element={<Salesforce />} />
          <Route path="/services/digital-marketing" element={<Digital />} />
          <Route path="/services/digital-marketing/seo" element={<Seo />} />
          <Route path="/services/digital-marketing/social-media" element={<SocialMedia />} />
          <Route path="/services/digital-marketing/content-marketing" element={<ContentM />} />
          {/* <Route path="/digitalMarketing/marketResearch" element={<MarketResearch />} /> */}
          {/* <Route path="/digitalMarketing/contentWriting" element={<ContentW />} /> */}
          <Route path="/services/digital-marketing/ppc" element={<Ppc />} />

          <Route path="/services/block-chain" element={<BlockChain />} />
          <Route path="/services/devops" element={<Deveops />} />
          <Route path="/services/mobile-app-developement" element={<MobileApp />} />
          <Route path="/services/web-developement" element={<WebApp />} />
          <Route path="/services/cloud-migration" element={<Cloud />} />
          <Route path="/case-study" element={<CaseStudies />} />
          <Route path="/case-study/dmc" element={<DMC />} />
          <Route path="/case-study/cargosprint" element={<CargoSprint />} />
          <Route path="/case-study/continuum" element={<Continuum />} />
          <Route path="/case-study/nexum" element={<Nexum />} />
          <Route path="/case-study/abudhabi" element={<AbuDhabi />} />
        </Routes>
        {/* </ScrollToTop> */}
      </Router>
    </>
  );
}

export default App;
