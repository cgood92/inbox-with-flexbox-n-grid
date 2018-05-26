import React, { Fragment } from "react";
import { css } from "emotion";
import Box from "../Box";

const leftStyles = css({});

const LeftSidebar = () => (
  <aside className={leftStyles}>
    <Box tile>Inbox</Box>
    <Box tile>Snoozed</Box>
    <Box tile>Done</Box>
    <hr />
    {new Array(3).fill(0).map((e, i) => (
      <Fragment>
        {new Array(5).fill(0).map((ee, ii) => <Box key={`${i}${ii}`} tile />)}
        <hr />
      </Fragment>
    ))}
  </aside>
);

export default LeftSidebar;
