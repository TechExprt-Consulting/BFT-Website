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
import Nav from './pages/components/Nav';
import Blog3 from './pages/Blog/Blog3';
import Blog2 from './pages/Blog/Blog2';
import Blog4 from './pages/Blog/Blog4';
import Blog5 from './pages/Blog/Blog5';
import Blog6 from './pages/Blog/Blog6';
function App() {
 
  return (

    <>
      <Router >
      <ScrollToTop />
        <Routes>

    <Route path ='/nav' element={<Nav/>}/>

          <Route path='/managedService' element={<Managed/>}/>
          <Route path='/saas' element={<Saas/>}/>
          <Route path='/api' element={<Api/>}/>
          <Route path='/adminPanel' element={<Admin/>}/>
          <Route path='/softwareDevelopement' element={<SD/>}/>

        <Route path='/salesforceConsulting' element={<SalesCons/>}/>
        <Route path='/salesforceCustomization' element={<SalesCust/>}/>
        <Route path='/salesforceAppExchange' element={<SalesExc/>}/>
        <Route path='/salesforceImplementation' element={<SalesImp/>}/>
        <Route path='/salesforceIntegration' element={<SalesInt/>}/>
        <Route path='/salesforceItSupport' element={<SalesIt/>}/>
        <Route path='/salesforceMigration' element={<SalesMig/>}/>



        <Route path='/tech' element={<Technology/>}/>

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

          <Route path="/faq" element={<Faq />} />
          <Route path="/salesforce" element={<Salesforce />} />
          <Route path="/digital" element={<Digital />} />
          <Route path="/seo" element={<Seo />} />
          <Route path="/socialMedia" element={<SocialMedia />} />
          <Route path="/contentMarketing" element={<ContentM />} />
          <Route path="/marketResearch" element={<MarketResearch />} />
          <Route path="/contentWriting" element={<ContentW />} />
          <Route path="/ppc" element={<Ppc />} />

          <Route path="/blockChain" element={<BlockChain />} />
          <Route path="/deveops" element={<Deveops />} />
          <Route path="/mobileApp" element={<MobileApp />} />
          <Route path="/webApp" element={<WebApp />} />
          <Route path="/cloud" element={<Cloud />} />
          <Route path="/case" element={<CaseStudies />} />
          <Route path="/dmc" element={<DMC />} />
          <Route path="/cargosprint" element={<CargoSprint />} />
          <Route path="/continuum" element={<Continuum />} />
          <Route path="/nexum" element={<Nexum />} />
          <Route path="/abuDhabi" element={<AbuDhabi />} />
        </Routes>
        {/* </ScrollToTop> */}
      </Router>
    </>
  );
}

export default App;
