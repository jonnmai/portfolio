/* eslint-disable react/prop-types */
import styles from "../ListItem/ListItem.module.scss"

export const ListItem = (props) => {
    return (
        <li className={styles.aboutItem}>
            <img className={styles.icon} src={props.img} alt={props.img} />

            <div className={styles.itemContent}>
                <h3 className={styles.title}>{props.title}</h3>
                <p className={styles.description}>{props.children}</p>
            </div>
        </li>       
    );
};
