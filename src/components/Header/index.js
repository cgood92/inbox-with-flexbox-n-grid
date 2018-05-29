import React from "react";
import { css } from "emotion";
import classnames from "classnames";
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
  display: "flex",
  alignItems: "center",
  background: "rgba(255,255,255,.25)",
  color: "white !important",
  maxWidth: 800,
});

const Header = () => (
  <header className={classnames(headerStyles)}>
    <Icon>menu</Icon>
    <span>Inbox</span>
    <Box height={60} className={searchContainerStyles} noBorder>
      <Box width="100%" className={searchStyles} height={50} noBorder>
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
    <Icon>grid_on</Icon>
    <Icon>notifications</Icon>
    <Avatar />
  </header>
);

export default Header;
