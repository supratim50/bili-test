import React from "react";
import styles from "styled-components";

// using styled components
const Image = styles.img`
    max-width: 100%;
`;

const Header = ({ imageName }) => {
  return (
    <section>
      <Image src={require(`../images/${imageName}`)} alt="Image" />
    </section>
  );
};

export default Header;
