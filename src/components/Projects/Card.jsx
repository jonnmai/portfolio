/* eslint-disable react/prop-types */
import styles from "../Projects/Card.module.scss";

import { getImgUrl } from "../../utils";

export const Card = (props) => {
    const project = props.project;
    return (
        <div className={styles.container}>
            <img 
                src={getImgUrl(project.imageSrc)}
                alt={`Image of ${project.title}`}
                className={styles.image}
            />
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <ul className={styles.skills}>
                {project.skills.map((skill, id) => {
                    return <li className={styles.skill} key={id}>{skill}</li>;
                })}
            </ul>
            <div className={styles.links}>
                <a target="_blank" className={styles.link} href={project.demo}>Demo</a>
                <a target="_blank" className={styles.link} href={project.source}>Source</a>
            </div>
        </div>
    );
};
