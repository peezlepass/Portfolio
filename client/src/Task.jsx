import React from "react";
import Checkbox from "./Checkbox";

export default function Task() {
  return (
    <div>
      <Checkbox />
      <span>Do the dishes</span>
      <button type="button">X</button>
    </div>
  );
}
