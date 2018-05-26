import React from "react";
import { css } from "emotion";
import classnames from "classnames";
import Box from "../Box";
import mq from "../../util/mq";

const headerStyles = css({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gridArea: "header",
  zIndex: 100,
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

const Header = () => (
  <header className={classnames("blue", headerStyles)}>
    <Box icon black />
    <Box icon black>
      Inbox
    </Box>
    <Box height={60} className={searchContainerStyles} noBorder>
      <Box black width="100%" className={searchStyles} height={50}>
        <Box icon black className={css({ marginRight: 20 })} />
        Search
      </Box>
      <Box icon black />
    </Box>
    <Box icon black className={css({ marginLeft: "auto" })} />
    <Box icon black />
    <Box icon black />
    <Box icon black />
  </header>
);

export default Header;
