import React from "react";
import "./card.scss";
import { AiFillGithub } from "react-icons/ai";
import { GoGlobe } from "react-icons/go";
import { TiInfoLarge } from "react-icons/ti";

const PortfolioCard = (props) => {
    return (
        <>
            <div class="wrap" key={props.key}>
                <div class="card">
                    <div class="card-liner">
                        <figure>
                            <img src={props.image} alt="" />{" "}
                        </figure>
                        <div class="card--social">
                            <ul>
                                <li class="github">
                                    <a
                                        href={props.codeLink}
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        <i>
                                            <AiFillGithub />
                                        </i>
                                    </a>
                                </li>
                                <li class="site">
                                    <a
                                        href={props.projectLink}
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        <i>
                                            <GoGlobe />
                                        </i>
                                    </a>
                                </li>
                                <li class="info">
                                    <i>
                                        <TiInfoLarge size={18} />
                                        <span class="tooltiptext">
                                            {/* <span class="pronounce">
                                                {props.tooltip}
                                            </span> */}
                                            <span class="text">
                                                <b>{props.tooltip_name}</b>,{" "}
                                                {
                                                    props.tooltip_small_description
                                                }
                                            </span>
                                        </span>
                                    </i>
                                </li>
                            </ul>
                        </div>

                        <div class="card--title">
                            <h3>{props.title}</h3>
                            <p>{props.small_desc}</p>
                        </div>
                        <div class="card--desc">
                            <hr />
                            <p>{props.description}</p>
                        </div>
                        <div class="card--btn">
                            <a
                                href={props.projectLink}
                                target="_blank"
                                rel="noopener"
                            >
                                <span class="moreinfo">
                                    <i class="fa fa-info-circle"></i> More Info
                                </span>
                                <span class="fullprof">
                                    View Full Profile{" "}
                                    {/* <span class="tooltiptext">
                                        {props.tooltip}
                                    </span> */}
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortfolioCard;
