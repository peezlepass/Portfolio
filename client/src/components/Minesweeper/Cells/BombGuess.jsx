export default function BombGuess({ red }) {
  let background = "bg-empty-cell-color";
  if (red) {
    background = "bg-red-flag";
  }
  return (
    <div
      className={`w-20 h-20 ${background} border-8 text-6xl flex items-center justify-center`}
      style={{ borderStyle: "outset" }}
    >
      🚩
    </div>
  );
}
