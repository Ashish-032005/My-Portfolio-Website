// import React from "react";
// import { getImageUrl } from "../../utils";
// import styles from "./About.module.css";
// export const About = () => {
//   return (
//     <section className={styles.container} id="about">
//       <h2 className={styles.title}>About</h2>
//       <div className={styles.content}>
//         <img className={styles.aboutImage}
//           src={getImageUrl("about/file.png")}
//           alt="me sitting with a laptop"
//         />
//         <ul className={styles.aboutItems}>
//           <li className={styles.aboutItem}>
//             <img src={getImageUrl("about/cursorIcon.png")} alt="" />
//             <div className={styles.aboutItemText}>
//               <h3>Frontend Developer</h3>
//               <p>
//                 I'm a frontend developer with experience in building resposive
//                 and optimised site
//               </p>
//             </div>
//           </li>
//           <li className={styles.aboutItem}>
//             <img src={getImageUrl("about/serverIcon.png")} alt="" />
//             <div className={styles.aboutItemText}>
//               <h3>Backend Developer</h3>
//               <p>
//                 I've experience developing fast and optimised backend systems
//                 and API
//               </p>
//             </div>
//           </li>
//           <li className={styles.aboutItem}>
//             <img src={getImageUrl("about/uiIcon.png")} alt="" />
//             <div className={styles.aboutItemText}>
//               <h3>UI Designer</h3>
//               <p>
//                 I've designed multple landing pages and have created design
//                 systems as well
//               </p>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </section>
//   );
// };


import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getImageUrl("about/file.png")}
          alt="me sitting with a laptop"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img className={styles.imgsvg} src={getImageUrl("about/university.png")} alt="student icon" />
            <div className={styles.aboutItemText}>
              <h3>B.Tech Student</h3>
              <p>
                Currently pursuing my B.Tech in Computer Science from Delhi Technological University.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img className={styles.imgsvg} src={getImageUrl("about/devlop.png")} alt="web developer icon" />
            <div className={styles.aboutItemText}>
              <h3>Web Developer</h3>
              <p>
                Primarily a Web Developer exploring different domains and enjoying college life.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img className={styles.imgsvg} src={getImageUrl("about/connect.png")} alt="connect icon" />
            <div className={styles.aboutItemText}>
              <h3>Connect with Me</h3>
              <p>
                Feel free to connect with me using my social links given at the end of this page.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
