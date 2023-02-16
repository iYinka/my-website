import React from "react";
import "./experience.css";
import SkillsCard from "./skills card/_skillsCard";

const Experience = () => {
    return (
        <section id="experience">
            <h5 className="text-light">Skills</h5>
            <h2 className="text-light">Project Experience</h2>
            <div className="container experience__container">
                <SkillsCard />
            </div>
        </section>
    );
};

export default Experience;
