import React, { Component } from "react";
import { css } from "emotion";
import mq from "./util/mq";
import Header from "./components/Header";
import Main from "./components/Main";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";

const appStyles = css({
  minHeight: "100vh",
  display: "grid",
  gridTemplateColumns: "100%",
  gridTemplateRows: "auto 1fr",
  gridTemplateAreas: `
    "header"
    "main"
    "sidebarLeft"
    "sidebarRight"
  `,
  ...mq.medium({
    gridTemplateColumns: "200px 1fr 200px",
    gridTemplateRows: "auto 1fr",
    gridTemplateAreas: `
    "header header header"
    "sidebarLeft main sidebarRight"
  `,
  }),
  "& > header": {
    gridArea: "header",
  },
  "& > aside:first-of-type": {
    gridArea: "sidebarLeft",
  },
  "& > main": {
    gridArea: "main",
  },
  "& > aside:last-of-type": {
    gridArea: "sidebarRight",
  },
  "& > *": {
    border: "1px solid gray",
  },
  "& > aside": {
    // overflow: "auto",
  },
});

class App extends Component {
  render() {
    return (
      <div className={appStyles}>
        <Header />
        <LeftSidebar />
        <Main />
        <RightSidebar />
      </div>
    );
  }
}

export default App;
