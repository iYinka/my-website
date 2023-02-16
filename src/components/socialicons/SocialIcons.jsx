import React from "react";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import facebook from "react-useanimations/lib/facebook";
import linkedin from "react-useanimations/lib/linkedin";
import twitter from "react-useanimations/lib/twitter";

const SocialIcons = (props) => {
    return (
        <div className={props.position}>
            <a
                href="https://github.com/iYinka"
                target="_blank"
                rel="noopener noreferrer"
            >
                <UseAnimations
                    animation={github}
                    size={40}
                    strokeColor="#171515"
                />
            </a>

            <a
                href="https://web.facebook.com/OlayinkaV"
                target="_blank"
                rel="noopener noreferrer"
            >
                <UseAnimations
                    animation={facebook}
                    size={40}
                    strokeColor="#3b5998"
                />
            </a>
            <a
                href="https://www.linkedin.com/in/olayinka-victor-owolabi-76467871/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <UseAnimations
                    animation={linkedin}
                    size={40}
                    strokeColor="#0072b1"
                />
            </a>
            <a
                href="https://twitter.com/yinka_iam"
                target="_blank"
                rel="noopener noreferrer"
            >
                <UseAnimations
                    animation={twitter}
                    size={40}
                    strokeColor="#1DA1F2
"
                />
            </a>
        </div>
    );
};

export default SocialIcons;
