import React from "react";
import { css } from "emotion";
import Box from "../Box";

const rightStyles = css({});

const RightSidebar = () => (
  <aside className={rightStyles}>
    {new Array(30).fill(0).map((e, i) => <Box key={i} tile />)}
  </aside>
);

export default RightSidebar;
