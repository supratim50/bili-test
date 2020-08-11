import React from "react";
import styles from "./card.module.css";

const Card = ({ imageName }) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.card_img}
        src={require(`../../images/${imageName}`)}
        alt="Card Image"
      />
    </div>
  );
};

export default Card;
