import Unknown from "./Cells/Unknown";

export default function Field({ width, height }) {
  const cells = Array.from({ length: width * height });
  return (
    <div
      className="bg-empty-cell-color border-8 grid grid-cols-9 grid-rows-9"
      style={{ borderStyle: "inset" }}
    >
      {cells.map((cell) => {
        return <Unknown></Unknown>;
      })}
    </div>
  );
}
