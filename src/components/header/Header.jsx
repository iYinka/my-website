import React from "react";
import "./header.css";
import CTA from "./CTA";
import SocialIcons from "../socialicons/SocialIcons";
import BigName from "./big_name";
import GooeyEffect from "./gooey_effect";

export default function Header() {
    return (
        <header id="home">
            <div className="container header__container">
                <h5 className="text-light">Hello! I am </h5>
                <div className="imported-effects">
                    <BigName />
                    <GooeyEffect />
                </div>
                <div className="imported-effects-2">
                    <BigName />
                </div>
                <CTA />
                <SocialIcons position="header__socialicons" />

                <a href="#contact" className="scroll__down">
                    Scroll Down
                </a>
            </div>
        </header>
    );
}
