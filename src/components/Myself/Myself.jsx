import { getImgUrl } from "../../utils"

import styles from "../Myself/Myself.module.scss"

export const Myself = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi! I{"'"}m Jonathan</h1>
            <p className={styles.description}>
                I{"'"}m a Junior Developer,
                I share my projects here. <br /> 
                Contact me under for any question
            </p>
            <a className={styles.contactBtn} href="mailto:jonm@live.fr">Contact me !</a>
        </div>
        
        <img className={styles.mySelfImg} src={getImgUrl("myself/myselfAbout.png")} alt="Photo de Jonathan Mai avec des icônes MERN" />

        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}
