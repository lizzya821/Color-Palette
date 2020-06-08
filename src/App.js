import React from "react";
import logo from "./mintbean.png";
import ColorSelector from "./ColorSelector";

const headerStyle = {
  fontFamily: "sans-serif",
  fontSize: "50px",
  textAlign: "center",
  margin: "6rem 0",
};

function App() {
  return (
    <div>
      <h1 style={headerStyle}>Color Scheme Selector</h1>
      <ColorSelector />
    </div>
  );
}

export default App;
