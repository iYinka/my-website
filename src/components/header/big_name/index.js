import React from "react";
import styles from "./BigName.module.css";
import SubName from "./SubName";
const BigName = () => {
    return (
        <div>
            <div className={styles.box}>
                <div className={styles.title}>
                    <span className={styles.block}></span>
                    <h1>
                        Victor Olayinka<span></span>
                    </h1>
                </div>

                <div className={styles.role}>
                    <div className={styles.block}></div>
                    <p>
                        <SubName />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BigName;
