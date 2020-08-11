import React from "react";
import styles from "styled-components";

const Section = styles.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const YourAccount = ({ imageName }) => {
  return (
    <Section style={{ paddingTop: 250 }}>
      <img
        style={{ maxWidth: "100%" }}
        src={require(`../images/${imageName}`)}
        alt="Image"
      />
    </Section>
  );
};

export default YourAccount;
