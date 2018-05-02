import React, { Component } from "react";
import "./App.css";
import Box from "./Box";

class App extends Component {
  render() {
    return (
      <div>
        <header className="blue">
          <Box icon black />
        </header>
        <main />
      </div>
    );
  }
}

export default App;
