import React from "react";
import { css } from "emotion";
import Box from "../Box";

const rightStyles = css({});

const RightSidebar = () => (
  <aside className={rightStyles}>
    <div className={css({ position: "sticky", top: 0 })}>
      {new Array(30).fill(0).map((e, i) => <Box key={i} tile />)}
    </div>
  </aside>
);

export default RightSidebar;
