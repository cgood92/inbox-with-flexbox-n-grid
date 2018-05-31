import React from "react";
import { css } from "emotion";
import faker from "faker";
import Avatar from "../avatar";
import { getLorem } from "../../util/common";

const tileStyles = css({
  display: "flex",
  alignItems: "center",
  margin: 4,
  "& > *": {
    margin: 4,
  },
});

const small = css({
  fontSize: 10,
});

const Tile = () => (
  <div className={tileStyles}>
    <Avatar />
    <section>
      <div>{faker.name.firstName()}</div>
      <div className={small}>{getLorem(2, 3)}</div>
    </section>
  </div>
);

export default Tile;
