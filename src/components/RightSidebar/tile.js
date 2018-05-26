import React from "react";
import { css } from "emotion";
import lorem from "lorem-ipsum";
import faker from "faker";
import Avatar from "../avatar";

const getFromConfig = () => ({
  count: 1,
  units: "sentences",
  sentenceLowerBound: 2,
  sentenceUpperBound: 3,
});

const tileStyles = css({
  display: "flex",
  alignItems: "center",
  margin: 4,
  "& > *": {
    margin: 4,
  },
});

const Tile = () => (
  <div className={tileStyles}>
    <Avatar />
    <section>
      <div>{faker.name.firstName()}</div>
      <div className={css({ fontSize: 10 })}>{lorem(getFromConfig())}</div>
    </section>
  </div>
);

export default Tile;
