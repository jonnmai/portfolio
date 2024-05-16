import { ListItem } from "../ListItem/ListItem"

import { getImgUrl } from "../../utils"
import styles from "../About/About.module.scss"

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>À propos</h2>

        <div className={styles.content}>
            <img className={styles.myImg} src={getImgUrl("myself/myImg.png")} alt="Photo de Jonathan Mai" />
            <ul className={styles.aboutItems}>
                <ListItem title="Professional Introduction" img={getImgUrl("about/serverIcon.png")}>
                As a passionate Web Developer, I specialize in creating dynamic and high-performance web applications. My expertise lies in MERN technologies (MongoDB, Express.js, React, Node.js) and PHP MySQL,
                with foundational knowledge in C++. I have built a strong theoretical foundation through a HND in Digital Systems, Computer Science, and Networks. And Practical skills with a Web Developer professional certification at OpenClassrooms.
                 Although I lack professional experience, I am eager to apply my skills, continue learning, and evolve in the field of web development.
                </ListItem>
                <ListItem title="Passions and Interests" img={getImgUrl("about/cursorIcon.png")}>
                During my training at OpenClassrooms, I completed several practical projects, ranging from creating responsive websites to interactive web applications. These projects have allowed me to apply my knowledge and develop skills in project management,
                 problem-solving, and teamwork. My goal is to find an apprenticeship for September 2024 or secure a full-time position (CDI/CDD) to gain my first professional experiences,
                contribute to innovative projects, and further enhance my technical skills.
                </ListItem>
                <ListItem title="Titre" img={getImgUrl("about/uiIcon.png")}>
                Outside of web development, I am passionate about motorcycling, video games, and bodybuilding. These hobbies help me maintain a healthy work-life balance while cultivating discipline and determination. 
                I also have a keen interest in new technologies and love learning new things, which keeps me updated with the latest trends and innovations in web development.
                </ListItem>
            </ul>
        </div>
    </section>
  )
}
