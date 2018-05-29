import React, { Fragment } from "react";
import { css } from "emotion";
import DayHeader from "./day-header";
import Email from "../Email";

const SECTIONS = 3;
const EMAILS = 10;
const dates = ["Today", "Yesterday", "Last Week"];

const mainStyles = css({
  padding: 30,
  // https://css-tricks.com/flexbox-truncated-text/
  minWidth: 0,
});

const Main = () => (
  <main className={mainStyles}>
    {new Array(SECTIONS).fill(0).map((e, i) => (
      <Fragment key={i}>
        <DayHeader date={dates[i]} />
        {new Array(EMAILS).fill(0).map((e, ii) => <Email key={`${i}${ii}`} />)}
      </Fragment>
    ))}
  </main>
);

export default Main;
