import React, { useEffect, useState } from 'react'
import "./about.css";
import {GiNinjaHead} from 'react-icons/gi'
import {GoOrganization} from 'react-icons/go'
import { GrCloudSoftware } from "react-icons/gr";
import { client } from "../../client";
import { motion } from "framer-motion";

// const imageAnimate = {
//       offscreen:{x:100, opacity:0},
//       onscreen:{
//       x:0,
//       opacity:1,
//       rotate:[0,10,0],
//       transition: {type:"spring",
//       bounce:0.4,
//       duration:1}
//     }
// };

const textAnimate = {
    // offscreen:{y:100, opacity:0},
    // onscreen:{y:0,
    // opacity:1,
    // transition: {type:"spring",
    // bounce:0.4,
    // duration:1}
    //  }
};

const cardVariants = {
    // offscreen: {
    //   y: 300
    // },
    // onscreen: {
    //   y: 50,
    //   rotate: -10,
    //   transition: {
    //     type: "spring",
    //     bounce: 0.4,
    //     duration: 0.8
    //   }
    // }
};

function Card({ icon, h5, small, id }) {
    return (
        <motion.div
            className="card"
            id={id}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ staggerChildren: 0.5 }}
        >
            <article className="about__card">
                <motion.div className="image-container" variants={cardVariants}>
                    {icon}
                </motion.div>
                <motion.h5 variants={textAnimate}>{h5}</motion.h5>
                <motion.small variants={textAnimate}>{small}</motion.small>
            </article>
        </motion.div>
    );
}
const About = () => {
    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        const query = '*[_type == "abouts"]';

        client.fetch(query).then((data) => setAbouts(data));
    }, []);

    const cardItems = [
        {
            icon: <GiNinjaHead className="about__icon" />,
            h5: "Experience",
            small: "Exponential increase in valuable expertise and development.",
        },
        {
            icon: <GrCloudSoftware className="about__icon" />,
            h5: "Agile Software",
            small: "Early and continuous delivery of valuable software",
        },
        {
            icon: <GoOrganization className="about__icon" />,
            h5: "Customers",
            small: "Corporates and Individuals",
        },
    ];

    return (
        <section id="about">
            <h5 className="text-light">What I do?</h5>
            {abouts.map((x) => (
                <h2 className="text-light">{x.whatido}</h2>
            ))}

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        {/* <img src={Victor} alt="Olayinka Victor Owolabi" /> */}
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        {cardItems.map((item) => (
                            <Card
                                icon={item.icon}
                                h5={item.h5}
                                small={item.small}
                            />
                        ))}
                    </div>
                    {abouts.map((x) => (
                        <p className="description">{x.description}</p>
                    ))}
                    <a href="#contact" className="btn btn-primary">
                        Know more?
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About