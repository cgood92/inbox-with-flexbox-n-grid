import React, { Component } from "react";
import { css } from "emotion";
import "./App.css";
import Box from "./Box";

const searchContainerStyles = css({
  flex: "1",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

const searchStyles = css({
  maxWidth: 800,
  display: "flex",
  alignItems: "center"
});

class App extends Component {
  render() {
    return (
      <div>
        <header className="blue">
          <Box icon black />
          <Box icon black>
            Inbox
          </Box>
          <Box height={50} className={searchContainerStyles} noBorder>
            <Box black width="100%" className={searchStyles}>
              <Box icon black className={css({ marginRight: 20 })} />
              Search
            </Box>
            <Box icon black />
          </Box>
          <Box icon black className={css({ marginLeft: "auto" })} />
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
