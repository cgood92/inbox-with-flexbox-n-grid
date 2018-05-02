import React, { Component } from "react";
import { css } from "emotion";
import classnames from "classnames";
import "./App.css";
import Box from "./Box";
import mq from "./util/mq";

const headerStyles = css({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
});

console.log(
  mq.medium({
    color: "blue",
  }),
);

const searchContainerStyles = css({
  flex: "1",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "100%",
  order: 100,
  ...mq.medium({
    minWidth: "auto",
    order: 0,
  }),
});

const searchStyles = css({
  maxWidth: 800,
  display: "flex",
  alignItems: "center",
});

class App extends Component {
  render() {
    return (
      <div>
        <header className={classnames("blue", headerStyles)}>
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
