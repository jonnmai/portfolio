import { useState } from "react";

import styles from "../Navbar/Navbar.module.scss";
import {getImgUrl} from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">Jonathan Mai</a>
        <div className={styles.menu}>
            <img 
                className={styles.menuBtn} 
                src={
                    menuOpen
                        ? getImgUrl("nav/crossIcon.png") 
                        : getImgUrl("nav/hamburgerIcon.png")
                    } 
                alt="menu button"
                onClick={() => setMenuOpen(!menuOpen)} />

            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={() => setMenuOpen(!menuOpen)}>
                    
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Studies/Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}
