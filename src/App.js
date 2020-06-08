import React from "react";
import logo from "./mintbean.png";
import ColorSelector from "./ColorSelector";

const headerStyle = {
  fontFamily: "sans-serif",
  fontSize: "50px",
  textAlign: "center",
  margin: "6rem 0",
  fontWeight: "bold",
};

function App() {
  return (
    <div>
      <h1 style={headerStyle}>Color Scheme Generator</h1>
      <h6 style={{ textAlign: "center" }}>
        Enter a color name, hex color, RGB or RBGA color to generate a color
        scheme. You can also choose the color scheme you want to use. Click the
        random color scheme generator button if you don't have a color in mind!
      </h6>
      <br></br>
      <ColorSelector />
    </div>
  );
}

export default App;
