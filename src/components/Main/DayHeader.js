import React from "react";
import { css } from "emotion";
import Icon from "@material-ui/core/Icon";
import mq from "../../util/mq";

const header = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "8px 16px",
  position: "sticky",
  top: 102,
  zIndex: 10,
  backgroundColor: "white",
  ...mq.medium({
    top: 62,
  }),
});

const DayHeader = ({ date }) => (
  <div className={header}>
    <span>{date}</span>
    <Icon>done_all</Icon>
  </div>
);

export default DayHeader;
