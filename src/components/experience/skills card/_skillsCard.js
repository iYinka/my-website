// import React, { useEffect, useState } from "react";
// import "./skillsCard.css";
// import { urlFor, client } from "../../../client";

// const SkillsCard = (props) => {
//     const [skillsData, setSkillsData] = useState([]);

//     useEffect(() => {
//         const query = '*[_type == "skills"]';

//         client.fetch(query).then((data) => setSkillsData(data));
//     }, []);

//     return (
//         <>
//             {skillsData.map((x) => (
//                 <div class="skill-card">
//                     <header class="skill-card__header">
//                         <img
//                             class="skill-card__icon"
//                             src={x.image}
//                             alt="Img Logo"
//                         />
//                     </header>
//                     <section class="skill-card__body">
//                         <h2 class="skill-card__title">{x.name}</h2>
//                         <span class="skill-card__duration">{x.desc}</span>
//                         <ul class="skill-card__knowledge">
//                             {x.tags.map((m, i) => (
//                                 <li key={i}> {m}</li>
//                             ))}
//                             ;
//                         </ul>
//                     </section>
//                 </div>
//             ))}
//         </>
//     );
// };

// export default SkillsCard;
