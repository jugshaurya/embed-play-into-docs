import React from "react";

// importing playground and show side by side
// side by side to avoid routing(for mimicing routing!)

import Avatar from "../../content/Avatar";
import Card from "../../content/Card";

const Drawer = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "space-between",
        padding: "20px",
        border: "3px solid black",
        flexWrap: "wrap",
      }}
    >
      <hr />
      <h3>I am a Drawer </h3>
      <div style={{ width: "80vw", border: "3px solid black", margin: "20px" }}>
        <Avatar />
      </div>
      <div style={{ width: "80vw", border: "3px solid black", margin: "20px" }}>
        <Card />
      </div>
      <hr />
    </div>
  );
};

export default Drawer;
