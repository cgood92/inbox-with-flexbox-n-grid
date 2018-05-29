import React from "react";
import classnames from "classnames";
import { css } from "emotion";
import faker from "faker";

import Avatar from "@material-ui/core/Avatar";
import Icon from "@material-ui/core/Icon";

const colors = [
  // Red
  "#EF9A9A",
  // Blue
  "#BBDEFB",
  // Cyan
  "#B2EBF2",
  // Teal
  "#E0F2F1",
  // Yellow
  "#F9FBE7",
  // Orange
  "#FFE0B2",
  // Bluegrey
  "#CFD8DC",
];

const gray = css({ color: "#7b7b7b" });

export default () => {
  const color = colors[faker.random.number(colors.length - 1)];
  return (
    <Avatar className={classnames("icon", css({ backgroundColor: color }))}>
      <Icon className={gray}>account_circle</Icon>
    </Avatar>
  );
};
