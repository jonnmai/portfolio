import skills from "../../data/skills.json";
import styles from "../Slider/Slider.module.scss";

import { getImgUrl } from "../../utils";
import { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export const Slider = () => {
    const [sliderWidth, setSliderWidth] = useState(0);
    const slider = useRef();
    const controls = useAnimation();
    const duplicatedSlides = [...skills, ...skills];

    useEffect(() => {
        setSliderWidth(slider.current.scrollWidth / 2);
        
        // Start the infinite scroll animation
        controls.start({
            x: -sliderWidth -27.5,
            transition: {
                ease: 'easeInOut',
                duration: 16,
                repeat: Infinity,
                repeatType: 'loop',
                onRepeat: () => {
                    controls.set({ x: 0 });
                }
            }
        });
    }, [sliderWidth, controls]);

    return (
        <section className={styles.skillsContainer} id="experience">
            <h2 className={styles.title}>Skills</h2>
            <motion.div ref={slider} className={styles.slider}>
                <motion.div
                    animate={controls}
                    className={styles.innerSlider}
                >
                    {duplicatedSlides.map((skill, index) => (
                        <motion.div key={index} className={styles.items}>
                            <div className={styles.item}>
                                <img
                                    src={getImgUrl(skill.imgSrc)}
                                    alt={skill.title}
                                />
                            </div>
                            <p>{skill.title}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};
