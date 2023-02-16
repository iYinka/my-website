import React from "react";
import styles from "./GooeyEffect.module.css";

const GooeyEffect = () => {
    return (
        <div>
            <div className={styles.circle__container}>
                <div className={`${styles.circle} ${styles.circle1}`}></div>
                <div className={`${styles.circle} ${styles.circle2}`}></div>
                <div className={`${styles.circle} ${styles.circle3}`}></div>
                <div className={`${styles.circle} ${styles.big}`}></div>
                <div className={`${styles.circle} ${styles.circle4}`}></div>
                <div className={`${styles.circle} ${styles.circle5}`}></div>
                <div className={`${styles.circle} ${styles.circle6}`}></div>
                <div className={`${styles.circle} ${styles.circle7}`}></div>
            </div>
        </div>
    );
};

export default GooeyEffect;
