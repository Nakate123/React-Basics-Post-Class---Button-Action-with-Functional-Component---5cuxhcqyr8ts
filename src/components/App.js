import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const Action = () => {
    return (
      <p>
        "Hello, I've learnt to use the full-stack evaluation tool. This makes me
        so happy"
      </p>
    );
  };

  return (
    <div id="main">
      <button onClick={Action}></button>
    </div>
  );
}

export default App;
