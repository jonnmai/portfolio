import skills from "../../data/skills.json";
import styles from "../Slider/Slider.module.scss";

import { getImgUrl } from "../../utils";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Slider = () => {
    const [sliderWidth, setSliderWidth] = useState(0);
    const slider = useRef();

    useEffect(() => {
        setSliderWidth(slider.current.scrollWidth - slider.current.offsetWidth);
    }, []);

    return (
        <section className={styles.skillsContainer} id="experience">
            <h2 className={styles.title}>Skills</h2>
            <motion.div ref={slider} className={styles.slider}>
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -sliderWidth }}
                    className={styles.innerSlider}
                >
                    {skills.map((skill, index) => {
                        return (
                            <motion.div key={index} className={styles.items}>
                                <div className={styles.item}>
                                    <img
                                        src={getImgUrl(skill.imgSrc)}
                                        alt={skill.title}
                                    />
                                </div>
                                <p>{skill.title}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </section>
    );
};
