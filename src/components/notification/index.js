import React from "react";
import styles from "./styles/Notification.module.css";
import Victor from "../../assets/victor.jpeg";

const NotifyMe = () => {
    return (
        <>
            {/* <div className={styles.body}></div> */}
            <div className={styles.chat}>
                <div className={styles.profile}>
                    <img src={Victor} alt="" />
                </div>
                <div className={styles.message}>
                    Hey there!  Thanks for reaching out. I have received your
                    message and will respond shortly.
                </div>
                <div className={styles.user}>Olayinka Victor</div>
            </div>
        </>
    );
};

export default NotifyMe;
