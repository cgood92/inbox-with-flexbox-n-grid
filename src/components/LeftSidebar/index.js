import React, { Fragment } from "react";
import { css } from "emotion";
import Icon from "@material-ui/core/Icon";
import Box from "../Box";

const leftStyles = css({
  "& > *": {
    display: "flex",
    alignItems: "center",
  },
});

const LeftSidebar = () => (
  <aside className={leftStyles}>
    <Box tile noBorder>
      <Icon className={css({ color: "#29B6F6" })}>inbox</Icon>Inbox
    </Box>
    <Box tile noBorder>
      <Icon className={css({ color: "#FFB74D" })}>access_time</Icon>Snoozed
    </Box>
    <Box tile noBorder>
      <Icon className={css({ color: "#4CAF50" })}>done</Icon>Done
    </Box>
    <hr />
    <Box tile noBorder>
      <Icon>drafts</Icon>Drafts
    </Box>
    <Box tile noBorder>
      <Icon>send</Icon>Sent
    </Box>
    <Box tile noBorder>
      <Icon>star</Icon>Reminders
    </Box>
    <Box tile noBorder>
      <Icon>delete</Icon>Trash
    </Box>
    <Box tile noBorder>
      <Icon>warning</Icon>Spam
    </Box>
    <Box tile noBorder>
      <Icon>contacts</Icon>Contacts
    </Box>
    <hr />
  </aside>
);

export default LeftSidebar;
