import React from "react";
import { css } from "emotion";
import Box from "../Box";

const leftStyles = css({
  "& > *": {
    display: "flex",
    alignItems: "center",
  },
});

const LeftSidebar = () => (
  <aside className={leftStyles}>
    <Box tile>
      <Box icon black />
      Inbox
    </Box>
    <Box tile>
      <Box icon black />
      Snoozed
    </Box>
    <Box tile>
      <Box icon black />
      Done
    </Box>
    <hr />
    <Box tile>
      <Box icon black />
      Drafts
    </Box>
    <Box tile>
      <Box icon black />
      Sent
    </Box>
    <Box tile>
      <Box icon black />
      Reminders
    </Box>
    <Box tile>
      <Box icon black />
      Trash
    </Box>
    <Box tile>
      <Box icon black />
      Spam
    </Box>
    <Box tile>
      <Box icon black />
      Contacts
    </Box>
    <hr />
  </aside>
);

export default LeftSidebar;
