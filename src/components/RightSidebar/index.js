import React from "react";
import { css } from "emotion";
import Box from "../Box";
import Tile from "./tile";

const rightStyles = css({});

const RightSidebar = () => (
  <aside className={rightStyles}>
    {new Array(30).fill(0).map((e, i) => <Tile key={i} />)}
  </aside>
);

export default RightSidebar;
