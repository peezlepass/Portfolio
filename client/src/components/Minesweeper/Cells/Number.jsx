export default function Number({ number }) {
  let color = "";
  if (number === 1) {
    color = "text-number-cell-one";
  } else if (number === 2) {
    color = "text-number-cell-two";
  } else if (number === 3) {
    color = "text-number-cell-three";
  } else if (number === 4) {
    color = "text-number-cell-four";
  } else if (number === 5) {
    color = "text-number-cell-five";
  } else if (number === 6) {
    color = "text-number-cell-six";
  } else if (number === 7) {
    color = "text-number-cell-seven";
  } else if (number === 8) {
    color = "text-number-cell-eight";
  }
  return (
    <div
      className={`w-14 h-14 bg-empty-cell-color border-t-4 border-l-4 border-empty-cell-border font-mono text-7xl text-center ${color}`}
    >
      {" "}
      {number}
    </div>
  );
}
