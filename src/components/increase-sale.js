import React from "react";

// using inline css here

const IncreaseSale = ({ imageName }) => {
  return (
    <section>
      <img
        style={{ maxWidth: "100%", paddingTop: 150 }}
        src={require(`../images/${imageName}`)}
        alt="Image"
      />
    </section>
  );
};

export default IncreaseSale;
