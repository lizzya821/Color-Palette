import React from "react";
import ColorBox from "./ColorBox";

const ColorArea = (props) => {
  console.log(props.colors);
  return (
    <div className="row mx-3 mt-5">
      {Array.isArray(props.colors) ? (
        props.colors.map((color) => (
          <ColorBox color={color.toHexString()} key={color} />
        ))
      ) : (
        <ColorBox color={props.colors.toHexString()} key={props.colors} />
      )}
    </div>
  );
};

export default ColorArea;
