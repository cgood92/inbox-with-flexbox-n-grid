import React from "react";
import { css } from "emotion";
import Icon from "@material-ui/core/Icon";
import TextField from "@material-ui/core/TextField";
import Avatar from "../avatar";
import Switch from "@material-ui/core/Switch";
import Box from "../Box";
import mq from "../../util/mq";

const headerStyles = css({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gridArea: "header",
  zIndex: 100,
  backgroundColor: "#4285f4",
  padding: "0 16px 0 8px",
  color: "white",
});

const searchContainerStyles = css({
  flex: "1",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "100%",
  order: 100,
  ...mq.medium({
    minWidth: "auto",
    order: 0,
  }),
});

const searchStyles = css({
  maxWidth: 800,
  display: "flex",
  alignItems: "center",
});

const Header = ({ toggle }) => (
  <header className={headerStyles}>
    <Icon onClick={toggle("Left")}>menu</Icon>
    <span>Inbox</span>
    <Box height={60} className={searchContainerStyles} noBorder>
      <Box black width="100%" className={searchStyles} height={50}>
        <Icon className={css({ marginRight: 20 })}>search</Icon>
        <TextField
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Search"
          fullWidth
          margin="normal"
        />
      </Box>
      <Switch checked color="primary" />
    </Box>
    <Icon className={css({ marginLeft: "auto" })}>chat</Icon>
    <Icon onClick={toggle("Right")}>grid_on</Icon>
    <Icon>notifications</Icon>
    <Avatar />
  </header>
);

export default Header;
