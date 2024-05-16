import projects from "../../data/projects.json";


import styles from "../Projects/Projects.module.scss";
import { Card } from "./Card";

export const Projects = () => {
    return (
        <section id="projects" className={styles.container}>
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                {projects.map((project, id) => {
                    return (
                        <Card key={id} project={project}/>
                    );
                })}
            </div>
        </section>
    );
};
