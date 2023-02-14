import Cell from "./Cell";

export default function Field({ minefield, width, height }) {
  return (
    <div
      className="bg-empty-cell-color border-8 grid grid-cols-9 grid-rows-9"
      style={{ borderStyle: "inset" }}
    >
      {minefield.map((cell) => {
        return <Cell cell={cell}></Cell>;
      })}
    </div>
  );
}
