import { useState } from "react";

export default function Restart({ mood }) {
  let text = "";
  if (mood === "smile") {
    text = "🙂";
  } else if (mood === "surprise") {
    text = "😮";
  } else if (mood === "dead") {
    text = "😵";
  }

  let [pressed, setPressed] = useState(false);
  return (
    <div
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      className="w-40 h-40 bg-empty-cell-color border-8 ring-4 ring-restart-border text-9xl flex items-center justify-center"
      style={{ borderStyle: pressed ? "inset" : "outset" }}
    >
      {text}
    </div>
  );
}
