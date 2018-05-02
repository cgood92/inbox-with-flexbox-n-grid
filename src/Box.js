import React from "react";
import "./Box.css";

const sizeMap = {
  icon: {
    width: 40,
    height: 40
  }
};

const Box = ({ height, width, black, gray, thick, icon, ...props }) => {
  const styles = [
    "box",
    // Default border color if not specified
    !black && !gray && "gray-outline",
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
  return <div className={styles} {...props} style={size} />;
};

Box.defaultProps = {
  icon: true
};

export default Box;
