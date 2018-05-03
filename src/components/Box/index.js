import React from "react";
import classnames from "classnames";
import "./Box.css";

const sizeMap = {
  icon: {
    width: 40,
    height: 40,
  },
  tile: {
    width: "100%",
    height: 40,
  },
};

const Box = ({
  height,
  width,
  black,
  gray,
  thick,
  noBorder,
  icon,
  tile,
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
    thick && "thick",
  ]
    // Pull out falses
    .filter(s => s)
    .join(" ");
  const size = {
    ...sizeMap[[icon && "icon", tile && "tile"].find(s => s)],
    ...(width && { width }),
    ...(height && { height }),
  };
  return (
    <div className={classnames(styles, className)} {...props} style={size} />
  );
};

export default Box;
