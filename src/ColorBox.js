import React from "react";
const ColorBox = (props) => {
  return (
    <div
      style={{
        backgroundColor: props.color,
        width: "125px",
        height: "125px",
        border: "1px solid #000",
        margin: "3px",
      }}
    >
      <h4 style={{ color: "white" }}>{props.color}</h4>
    </div>
  );
};

export default ColorBox;
