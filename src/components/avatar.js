import React from "react";
import classnames from "classnames";
import { css } from "emotion";
import faker from "faker";

import Avatar from "@material-ui/core/Avatar";
import Icon from "@material-ui/core/Icon";

// Red, blue, cyan, teal, yellow, orange, bluegrey
const colors = [
  "#EF9A9A",
  "#BBDEFB",
  "#B2EBF2",
  "#E0F2F1",
  "#F9FBE7",
  "#FFE0B2",
  "#CFD8DC",
];

export default () => (
  <Avatar
    className={classnames(
      "icon",
      css({ backgroundColor: colors[faker.random.number(colors.length - 1)] }),
    )}
  >
    <Icon className={css({ color: "#7b7b7b" })}>account_circle</Icon>
  </Avatar>
);
