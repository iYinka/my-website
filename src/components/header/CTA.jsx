import React from 'react'
import UseAnimations from "react-useanimations";
import download from "react-useanimations/lib/download";
import olayinka from "../../assets/olayinkavictor_resume.pdf";
import { FcDocument } from "react-icons/fc";

const CTA = () => {
    return (
        <div className="cta">
            <a
                class="tooltip"
                href={olayinka}
                download="olayinkavictor_resume.pdf"
            >
                <span class="tooltiptext">
                    <b>
                        <FcDocument />
                    </b>{" "}
                    My Résumé
                </span>
                <UseAnimations
                    animation={download}
                    size={40}
                    strokeColor="#16a085"
                />
            </a>
            <a href="#contact" className="btn btn-primary">
                Say Hello
            </a>
        </div>
    );
};

export default CTA
