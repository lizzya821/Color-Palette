import React, { useState } from "react";

var tinycolor = require("tinycolor2");

const ColorSelector = () => {
  const [color, setColor] = useState("");
  const handleChange = (evt) => {
    setColor(evt.target.value);
  };

  const handleSubmit = (evt) => {
    console.log("hello");
    evt.preventDefault();
    console.log(color);
    console.log(tinycolor(color));
  };
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div>
      <button type="button" onClick={handleClick}>
        Generate Random Color Scheme
      </button>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <label htmlFor="input">Enter Your Base Color:</label>
        <input type="text" value={color} required />
        <button type="submit">Generate Color Scheme</button>
      </form>
    </div>
  );
};

export default ColorSelector;
