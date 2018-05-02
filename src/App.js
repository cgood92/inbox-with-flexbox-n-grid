import React, { Component } from "react";
import "./App.css";
import Box from "./Box";

class App extends Component {
  render() {
    return (
      <div>
        <header className="blue">
          <Box icon black />
          <Box icon black>
            Inbox
          </Box>
          <Box icon black width="60%">
            Search
          </Box>
          <Box icon black />
          <Box icon black />
          <Box icon black />
          <Box icon black />
          <Box icon black />
        </header>
        <main />
      </div>
    );
  }
}

export default App;
