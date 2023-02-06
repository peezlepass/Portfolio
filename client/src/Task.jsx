import React from "react";
import Checkbox from "./Checkbox";

export default function Task() {
  return (
    <div className="flex max-w-lg gap-x-4">
      <Checkbox />
      <span className="grow">Do the dishes</span>
      <button type="button">X</button>
    </div>
  );
}
