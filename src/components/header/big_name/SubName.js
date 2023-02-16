import React, { useEffect, useState } from "react";
import styles from "./BigName.module.css";
import { urlFor, client } from "../../../client";

const SubName = () => {
    const [listSkills, setListSkills] = useState([]);

    useEffect(() => {
        const query = '*[_type == "listOfSkills"]';

        client.fetch(query).then((data) => setListSkills(data));
    }, []);
    console.log(listSkills, "listOFSkills");

    return (
        <div className={styles.content}>
            <div className={styles.content__container}>
                <p className={styles.content__container__text}>Practices</p>

                <ul className={styles.content__container__list}>
                    {listSkills.map((m) =>
                        m.tags.map((x) => (
                            <li
                                className={
                                    styles.content__container__list__item
                                }
                            >
                                {x}
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
};

export default SubName;
