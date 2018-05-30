import React, { Component } from "react";
import { css } from "emotion";
import Header from "./components/Header";
import Main from "./components/Main";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";

const appStyles = css({});

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
