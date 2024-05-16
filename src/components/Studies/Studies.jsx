import { Slider } from "../Slider/Slider";

import history from "../../data/history.json";
import { getImgUrl } from "../../utils";
import styles from "../Studies/Studies.module.scss";

export const Studies = () => {
    return (
        <>
            <Slider />
            <section className={styles.container}>
                <h2 className={styles.title}>Studies</h2>
                <div className={styles.content}>
                    <ul className={styles.history}>
                        {history.map((historyItem, id) => {
                            return (
                                <li key={id} className={styles.historyItem}>
                                    <img
                                        src={getImgUrl(historyItem.imageSrc)}
                                        alt={historyItem.organisation + " logo"}
                                    />
                                    <div className={styles.historyItemDetails}>
                                        <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                        <p>{`${historyItem.startDate}- ${historyItem.endDate}`}</p>
                                        <ul>
                                            {historyItem.experiences.map(
                                                (experience, id) => {
                                                    return (
                                                        <li key={id}>{experience}</li>
                                                    )
                                                }
                                            )}
                                        </ul>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>
        </>
    );
};
