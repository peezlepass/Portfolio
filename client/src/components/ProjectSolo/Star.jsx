import React from "react";

const sizeColorMap = {
  big: "400",
  medium: "600",
  small: "700",
};

export default function Star({ size = "big", x, y, color }) {
  const colorClass = `${color}-${sizeColorMap[size]}`;
  return (
    <span
      className={`four-pointed-star after:transition-all before:transition-all transition-all duration-500 after:duration-500 before:duration-500 blur-xs ${size} group-hover:before:bg-${colorClass} group-hover:after:bg-${colorClass} group-hover:blur-none`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
      }}
    ></span>
  );
}
