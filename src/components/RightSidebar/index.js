import React from "react";
import Tile from "./Tile";

const TILES = 30;

const RightSidebar = props => (
  <aside {...props}>
    {new Array(TILES).fill(0).map((e, i) => <Tile key={i} />)}
  </aside>
);

export default RightSidebar;
