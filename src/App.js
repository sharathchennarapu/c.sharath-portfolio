
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbarmain from "./components/Navbar";
import Portfolioworks from "./components/Portfolioworks";
import Skills from "./components/Skills";



function App() {
  return (
  <>
 <header>

<Navbarmain/>
 </header>
 
 
  <Routes>
    
    <Route path="/" element={ <Home/>}/>
    <Route path="/services" element={ <Expertise/>}/>
    <Route path="/skills" element={  <Skills/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/portfolioworks" element={  <Portfolioworks/>}/>
    <Route path="/contact" element={<Contact/>}/>
  </Routes>
<Footer>
<Footer/>
</Footer>
  </>
  );
}

export default App;
