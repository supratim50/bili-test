import React from "react";

const YourAccount = ({ imageName }) => {
  return (
    <section style={{ paddingTop: 250, paddingLeft: 50 }}>
      <img
        style={{ maxWidth: "60%" }}
        src={require(`../images/${imageName}`)}
        alt="Image"
      />
    </section>
  );
};

export default YourAccount;
