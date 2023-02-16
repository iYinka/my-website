import React from "react";
import "./header.css";
import CTA from "./CTA";
import Victor from "../../assets/victor2.JPG";
import Victor1 from "../../assets/victor1.JPG";
import SocialIcons from "../socialicons/SocialIcons";
import BigName from "./big_name";
import GooeyEffect from "./gooey_effect";

export default function Header() {
    return (
        <header>
            <div className="container header__container">
                <h5 className="text-light">Hello! I am </h5>
                <div className="imported-effects">
                    <BigName />
                    <GooeyEffect />
                </div>
                <CTA />
                <SocialIcons position="header__socialicons" />
                {/* <div className="me">
                    <div className="content">
                      <div className="back">
                          <img src={Victor} alt="Olayinka Victor O." />
                      </div>
                      <div className="front">
                          <img src={Victor1} alt="Olayinka Victor" />
                      </div>
                  </div>
                </div> */}
                <a href="#contact" className="scroll__down">
                    Scroll Down
                </a>
            </div>
        </header>
    );
}
