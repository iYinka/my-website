import React from "react";
import "./skillsCard.css";

const SkillsCard = (props) => {
    return (
        <>
            <div class="skill-card" key={props.key}>
                <header class="skill-card__header">
                    <img
                        class="skill-card__icon"
                        src={props.image}
                        alt="Img Logo"
                    />
                </header>
                <section class="skill-card__body">
                    <h2 class="skill-card__title">{props.title}</h2>
                    <span class="skill-card__duration">{props.desc}</span>
                    <ul class="skill-card__knowledge">
                        {props.tags.map((m, i) => (
                            <li key={i}> {m}</li>
                        ))}
                    </ul>
                </section>
            </div>
        </>
    );
};

export default SkillsCard;
