import React from "react";
import { css } from "emotion";
import Avatar from "../avatar";
import Box from "../Box";
import { getLorem } from "../../util/common";

const emailStyles = css({
  backgroundColor: "white",
  margin: "0 auto",
  padding: 8,
  display: "flex",
  alignItems: "center",
  "& > .icon": {
    flex: "0 0 auto",
  },
  "& > .from": {
    flex: "0 0 250px",
    marginLeft: 16,
  },
  "& > .preview": {
    flex: "0 2 auto",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
});

const Email = () => (
  <Box className={emailStyles} tile black height="auto">
    <Avatar />
    <span className="from">{getLorem(2, 3)}</span>
    <span className="preview">{getLorem(7, 22)}</span>
  </Box>
);

export default Email;
