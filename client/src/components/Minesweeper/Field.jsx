import Cell from "./Cell";

export default function Field({ userField, width, height, dispatch }) {
  return (
    <div
      className="bg-empty-cell-color border-8 grid grid-cols-9 grid-rows-9"
      style={{ borderStyle: "inset" }}
    >
      {userField.map((cell, index) => {
        return (
          <Cell
            key={index}
            index={index}
            dispatch={dispatch}
            cell={cell}
          ></Cell>
        );
      })}
    </div>
  );
}
