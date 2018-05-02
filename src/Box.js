import React from "react";
import { css } from "emotion";
import classnames from "classnames";
import "./Box.css";

const sizeMap = {
  icon: {
    width: 40,
    height: 40
  }
};

const Box = ({
  height,
  width,
  black,
  gray,
  thick,
  noBorder,
  icon,
  className,
  ...props
}) => {
  const styles = [
    "box",
    // Default border color if not specified
    !black && !gray && !noBorder && "gray-outline",
    // Put on outlines if wanted
    black && "black-outline",
    gray && "gray-outline",
    thick && "thick"
  ]
    // Pull out falses
    .filter(s => s)
    .join(" ");
  const size = {
    ...sizeMap[[icon && "icon"].find(s => s)],
    ...(width && { width }),
    ...(height && { height })
  };
  return (
    <div className={classnames(styles, className)} {...props} style={size} />
  );
};

Box.defaultProps = {
  icon: true
};

export default Box;
