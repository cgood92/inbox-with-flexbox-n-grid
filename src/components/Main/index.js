import React, { Fragment } from "react";
import { css } from "emotion";
import Email from "../Email";
import Box from "../Box";
import mq from "../../util/mq";

const mainStyles = css({
  padding: 30,
  // https://css-tricks.com/flexbox-truncated-text/
  minWidth: 0,
});

const header = css({
  ...mq.medium({
    top: 62,
  }),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "8px 16px",
  position: "sticky",
  top: 102,
  backgroundColor: "white",
});

const dates = ["Today", "Yesterday", "Last Week"];

const MainSidebar = () => (
  <main className={mainStyles}>
    {new Array(3).fill(0).map((e, i) => (
      <Fragment>
        <div className={header}>
          <span>{dates[i]}</span>
          <Box icon />
        </div>
        {new Array(7).fill(0).map((e, ii) => <Email key={`${i}${ii}`} />)}
      </Fragment>
    ))}
  </main>
);

export default MainSidebar;
