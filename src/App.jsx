// import './App.css';
import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import SocialIcons from "./components/socialicons/SocialIcons";
import { Logo } from "./components/logo";

export const RippleBackground = () => {
    return (
        <div class="ripple-background">
            <div class="circle xxlarge shade1"></div>
            <div class="circle xlarge shade2"></div>
            <div class="circle large shade3"></div>
            <div class="circle mediun shade4"></div>
            <div class="circle small shade5"></div>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <Logo />
            <Header />
            <Nav />
            <About />
            <Experience />
            {/* <Services /> */}
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
};

export default App


 {
     /* <a href="#" className='footer__logo'>IamYinka</a> */
 }
 //  <ul className="permalinks">
 //      <li>
 //          <a href="#" class="link">
 //              Home
 //          </a>
 //      </li>
 //      <li>
 //          <a href="#about" class="link">
 //              About
 //          </a>
 //      </li>
 //      <li>
 //          <a href="#experience" class="link">
 //              Experience
 //          </a>
 //      </li>
 {
     /* <li><a href="#services">Serviços</a></li> */
 }
 {
     /* <li>
         <a href="#portfolio" class="link">
             Portfolio
         </a>
     </li>
     <li>
         <a href="#testimonials" class="link">
             Testimonials
         </a>
     </li>
     <li>
         <a href="#contact" class="link">
             Contact
         </a>
     </li>
     <li>
         <a href="# " className="scroll">
             Scroll Up
         </a>
     </li>
 </ul>; */
 }