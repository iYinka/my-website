import React, { useEffect, useState } from "react";
import styles from "./Logo.module.css";

export const Logo = () => {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <>
            {handleShow && (
                <div className={`${styles.logo} ${show && styles.nav__trans}`}>
                    <svg viewBox="0 0 960 300">
                        <symbol id="s-text">
                            <text text-anchor="middle" x="50%" y="80%">
                                iYinka.
                            </text>
                            <text text-anchor="middle" x="52%" y="80%">
                                iYinka.
                            </text>
                        </symbol>

                        <g class="g-ants">
                            <use
                                href="#s-text"
                                className={styles.text__copy}
                            ></use>
                            <use
                                href="#s-text"
                                className={styles.text__copy}
                            ></use>
                            <use
                                href="#s-text"
                                className={styles.text__copy}
                            ></use>
                            <use
                                href="#s-text"
                                className={styles.text__copy}
                            ></use>
                            <use
                                href="#s-text"
                                className={styles.text__copy}
                            ></use>
                        </g>
                    </svg>
                </div>
            )}
        </>
    );
};
