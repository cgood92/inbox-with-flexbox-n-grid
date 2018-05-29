import React from "react";
import { css } from "emotion";
import Icon from "@material-ui/core/Icon";
import Box from "../Box";

const leftStyles = css({
  "& > *": {
    display: "flex",
    alignItems: "center",
  },
});

const blue = css({ color: "#29B6F6" });
const orange = css({ color: "#FFB74D" });
const green = css({ color: "#4CAF50" });

const LeftSidebar = () => (
  <aside className={leftStyles}>
    <Box tile noBorder>
      <Icon className={blue}>inbox</Icon>Inbox
    </Box>
    <Box tile noBorder>
      <Icon className={orange}>access_time</Icon>Snoozed
    </Box>
    <Box tile noBorder>
      <Icon className={green}>done</Icon>Done
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
