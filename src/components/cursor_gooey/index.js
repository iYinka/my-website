import { useEffect, useState } from "react";
import styles from "./CursorGooey.module.css";
import { motion } from "framer-motion";

const Cursor = ({ scaling }) => {
    const [largecircle, setlargecircle] = useState({ x: 0, y: 0 });
    const [smallcircle, setsmallcircle] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mousemove = (e) => {
            setlargecircle({ x: e.clientX, y: e.clientY });
            setsmallcircle({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", mousemove);

        return () => {
            window.removeEventListener("mousemove", mousemove);
        };
    }, []);

    return (
        <div>
            <motion.div
                animate={{
                    x: largecircle.x - 16,
                    y: largecircle.y - 16,
                    transition: { type: "spring", mass: 3 },
                }}
                className={styles.large_circle}
                style={{ scale: scaling ? 0.1 : 1 }}
            ></motion.div>
            <motion.div
                animate={{
                    x: smallcircle.x - 2,
                    y: smallcircle.y - 2,
                    transition: { type: "spring", mass: 2 },
                }}
                className={styles.small_circle}
            ></motion.div>
        </div>
    );
};

export default Cursor;
