import { useState } from "react";

export default function Restart({ mood, onClick }) {
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
      onClick={onClick}
      className="w-20 h-20 bg-empty-cell-color border-8 ring-4 ring-restart-border text-6xl flex items-center justify-center"
      style={{ borderStyle: pressed ? "inset" : "outset" }}
    >
      {text}
    </div>
  );
}
