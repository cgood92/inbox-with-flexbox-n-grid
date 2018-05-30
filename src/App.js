import React, { Component } from "react";
import { css } from "emotion";
import Header from "./components/Header";
import Main from "./components/Main";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";

const appStyles = css({
  display: "grid",
  gridTemplateColumns: "200px 1fr 200px",
  gridTemplateRows: "auto 1fr",
  gridTemplateAreas: `
    "header header header"
    "sidebarLeft main sidebarRight"
  `,
  minHeight: "100vh",
  "& > header": {
    gridArea: "header",
    position: "sticky",
    top: 0,
  },
  "& > *": {
    border: "1px solid gray",
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
