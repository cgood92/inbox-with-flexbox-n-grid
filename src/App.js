import React, { Component } from "react";
import { css } from "emotion";
import Header from "./components/Header";
import Main from "./components/Main";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import mq from "./util/mq";

const appStyles = css({
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
  minHeight: "100vh",
  "& > header": {
    gridArea: "header",
    position: "sticky",
    top: 0,
  },
  "& > aside:first-of-type": {
    gridArea: "sidebarLeft",
  },
  "& > aside:last-of-type": {
    gridArea: "sidebarRight",
  },
  "& > main": {
    gridArea: "main",
  },
  "& > *": {
    border: "1px solid gray",
  },
});

class App extends Component {
  state = {
    showLeft: true,
    showRight: true,
  };
  toggle = dir => () => {
    this.setState({
      [`show${dir}`]: !this.state[`show${dir}`],
    });
  };
  render() {
    const { showLeft, showRight } = this.state;
    return (
      <div className={appStyles}>
        <Header toggle={this.toggle} />
        <LeftSidebar hidden={!showLeft} />
        <Main />
        <RightSidebar hidden={!showRight} />
      </div>
    );
  }
}

export default App;
