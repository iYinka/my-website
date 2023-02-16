import React, { useEffect, useState } from "react";
import { urlFor, client } from "../../client";
import "./experience.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
import SkillsCard from "./skills card/skillsCard";

const Experience = () => {
    const [skillsData, setSkillsData] = useState([]);

    useEffect(() => {
        const query = '*[_type == "skills"]';

        client.fetch(query).then((data) => setSkillsData(data));
    }, []);

    return (
        <section id="experience">
            <h5 className="text-light">Skills</h5>
            <h2 className="text-light">Project Experience</h2>
            <div className="container experience__container">
                {skillsData.map(
                    ({
                        _id,
                        name,
                        desc,
                        bgColor,
                        icon,
                        imgUrl,
                        imageUrl,
                        tags,
                    }) => {
                        return (
                            <SkillsCard
                                key={_id}
                                image={urlFor(imgUrl)}
                                title={name}
                                desc={desc}
                                tags={tags}
                            />
                        );
                    }
                )}
            </div>
        </section>
    );
};

export default Experience;
