import { getImgUrl } from "../../utils";

import styles from "../Contact/Contact.module.scss";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>

            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImgUrl("contact/emailIcon.png")} alt="Email Icon" />
                    <a href="mailto:jonm@live.fr">jonm@live.fr</a>
                </li>
                <li className={styles.link}>
                    <img src={getImgUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon" />
                    <a target="_blank" href="https://www.linkedin.com/in/jonm-web/">LinkedIn</a>
                </li>
                <li className={styles.link}>
                    <img src={getImgUrl("contact/githubIcon.png")} alt="Github Icon" />
                    <a target="_blank" href="https://github.com/jonnmai">Github</a>
                </li>
            </ul>
        </footer>
    );
};
