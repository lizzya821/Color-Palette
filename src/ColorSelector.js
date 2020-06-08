import React, { useState } from "react";
import ColorArea from "./ColorArea";

var tinycolor = require("tinycolor2");

const ColorSelector = () => {
  const [color, setColor] = useState({
    color: "",
    scheme: "analagous",
  });
  const [colors, setColors] = useState([]);
  const handleChange = (evt) => {
    setColor({ ...color, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    switch (color.scheme) {
      case "analogous":
        setColors(tinycolor(color.color).analogous());
        break;
      case "monochromatic":
        setColors(tinycolor(color.color).monochromatic());
        break;
      case "splitcomplement":
        setColors(tinycolor(color.color).splitcomplement());
        break;
      case "triad":
        setColors(tinycolor(color.color).triad());
        break;
      case "tetrad":
        setColors(tinycolor(color.color).tetrad());
        break;
      case "complement":
        setColors(tinycolor(color.color).complement());
        break;
      default:
        setColors(tinycolor(color.color).analogous());
    }
  };
  const handleClick = () => {
    let randomColor = tinycolor.random();
    switch (color.scheme) {
      case "analogous":
        setColors(tinycolor(randomColor).analogous());
        break;
      case "monochromatic":
        setColors(tinycolor(randomColor).monochromatic());
        break;
      case "splitcomplement":
        setColors(tinycolor(randomColor).splitcomplement());
        break;
      case "triad":
        setColors(tinycolor(randomColor).triad());
        break;
      case "tetrad":
        setColors(tinycolor(randomColor).tetrad());
        break;
      case "complement":
        setColors([tinycolor(randomColor).complement(), randomColor]);
        break;
      default:
        setColors(tinycolor(randomColor).analogous());
    }
  };
  return (
    <div>
      <div className="row mx-1">
        <button
          type="button"
          className="btn btn-secondary mx-auto"
          onClick={handleClick}
        >
          Generate Random Color Scheme
        </button>
        <br></br>
      </div>
      <div>
        <form onSubmit={handleSubmit} onChange={handleChange}>
          <div className="form-check mx-3 form-check-inline">
            <div className="mx-2">
              <input
                className="form-check-input"
                type="radio"
                name="scheme"
                id="analagous"
                value="analogous"
              />
              <label htmlFor="radio">Analagous</label>
            </div>
            <div className="mx-2">
              <input
                className="form-check-input"
                type="radio"
                name="scheme"
                value="monochromatic"
              />
              <label htmlFor="radio">Monochromatic</label>
            </div>
            <div className="mx-2">
              <input
                className="form-check-input"
                type="radio"
                name="scheme"
                value="splitcomplement"
              />
              <label htmlFor="radio">Split Complement</label>
            </div>
            <div className="mx-2">
              <input
                className="form-check-input"
                type="radio"
                name="scheme"
                value="triad"
              />
              <label htmlFor="radio">Triad</label>
            </div>
            <div className="mx-2">
              <input
                className="form-check-input"
                type="radio"
                name="scheme"
                value="tetrad"
              />
              <label htmlFor="radio">Tetrad</label>
            </div>
            <div className="mx-2">
              <input
                className="form-check-input"
                type="radio"
                name="scheme"
                value="complement"
              />
              <label htmlFor="radio">Complement</label>
            </div>
          </div>
          <div className="row mx-3">
            <label htmlFor="input">Enter Your Base Color:</label>
            <input type="text" name="color" value={color.color} required />
            <button type="submit" className=" mx-3 btn btn-primary">
              Generate Color Scheme
            </button>
          </div>
        </form>
      </div>
      <ColorArea colors={colors} />
    </div>
  );
};

export default ColorSelector;
