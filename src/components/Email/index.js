import React from "react";
import { css } from "emotion";
import lorem from "lorem-ipsum";
import Box from "../Box";

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

const getFromConfig = () => ({
  count: 1,
  units: "sentences",
  sentenceLowerBound: 2,
  sentenceUpperBound: 3,
});

const getPreviewConfig = () => ({
  count: 1,
  units: "sentences",
  sentenceLowerBound: 7,
  sentenceUpperBound: 22,
});

const Email = () => (
  <Box className={emailStyles} tile black height="auto">
    <Box icon className="icon" />
    <span className="from">{lorem(getFromConfig())}</span>
    <span className="preview">{lorem(getPreviewConfig())}</span>
  </Box>
);

export default Email;
