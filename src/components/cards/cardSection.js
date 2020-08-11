import React from "react";
// using css module here
import styles from "./card.module.css";

import Card from "./cardComponent";

const CardSection = () => {
  return (
    <section className={styles.card_section}>
      <Card imageName="card_img-1.png" />
      <Card imageName="card_img-2.png" />
      <Card imageName="card_img-3.png" />
    </section>
  );
};

export default CardSection;
