import { ListItem } from "../ListItem/ListItem";

import { getImgUrl } from "../../utils";
import styles from "../About/About.module.scss";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>

            <div className={styles.content}>
                <img
                    className={styles.myImg}
                    src={getImgUrl("myself/myImg.png")}
                    alt="Photo de Jonathan Mai"
                />
                <ul className={styles.aboutItems}>
                    <ListItem
                        title="Professional Introduction"
                        img={getImgUrl("about/serverIcon.png")}
                    >
                        <br />
                        <ul>
                            <li>MERN Stack / C++ / PHP / SQL</li>
                            <li>
                                HND in Computer sciences, Web dev certification
                            </li>
                            <li>Continuously learning</li>
                        </ul>{" "}
                        <br />
                        Passionate about creating dynamic web applications, I
                        combine solid education with practical skills and am
                        keen to evolve in web development.
                    </ListItem>
                    <ListItem
                        title="Projects and Goals"
                        img={getImgUrl("about/cursorIcon.png")}
                    >
                        <br />
                        <ul>
                            <li>Responsive WebApps</li>
                            <li>Interactive WebApps</li>
                            <li>Project Management</li>
                        </ul>
                        <br />I aim to find an apprenticeship for September 2024
                        or secure a full-time position to gain professional
                        experience and enhance my technical skills.
                    </ListItem>
                    <ListItem
                        title="Passions and Interests"
                        img={getImgUrl("about/uiIcon.png")}
                    >
                        <br />
                        <ul>
                            <li>Motorcycling</li>
                            <li>Video Games</li>
                            <li>Bodybuilding</li>
                        </ul>{" "}
                        <br />
                        These hobbies help me maintain a healthy work-life
                        balance while cultivating discipline and determination.
                        I also have a keen interest in new technologies and love
                        learning new things.
                    </ListItem>
                </ul>
            </div>
        </section>
    );
};
