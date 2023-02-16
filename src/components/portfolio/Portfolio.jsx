import React, { useEffect, useState } from "react";
import { urlFor, client } from "../../client";
import PortfolioCard from "./Card/portfolioCard.js";
import "./portfolio.css";

const Portfolio = () => {
    const [portfolioData, setPortfolioData] = useState([]);

    useEffect(() => {
        const query = '*[_type == "works"]';

        client.fetch(query).then((data) => setPortfolioData(data));
    }, []);

    return (
        <section id="portfolio">
            <h5 className="text-light">Recent Works</h5>
            <h2 className="text-light">Portfolio</h2>
            <div className="container portfolio__container">
                {portfolioData.map(
                    ({
                        _id,
                        imgUrl,
                        title,
                        small_desc,
                        description,
                        codeLink,
                        projectLink,
                        tags,
                        tooltip_name,
                        tooltip_small_description,
                    }) => {
                        return (
                            <PortfolioCard
                                key={_id}
                                image={urlFor(imgUrl)}
                                codeLink={codeLink}
                                projectLink={projectLink}
                                title={title}
                                description={description}
                                tooltip={description}
                                tooltip_name={tooltip_name}
                                tooltip_small_description={
                                    tooltip_small_description
                                }
                            />
                        );
                    }
                )}
            </div>
        </section>
    );
};

export default Portfolio;

{
    /* <article key={_id} className="portfolio__item">
    <div className="portfolio__item-image">
        <img src={urlFor(imgUrl)} className="image" alt={title} />
    </div>
    <h3>{title}</h3>
    <h6>{tags}</h6>
    <div className="portfolio__item-cta">
        <a
            href={codeLink}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
        >
            Github
        </a>
        <a
            href={projectLink}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
        >
            Site
        </a>
    </div>
</article>; */
}
