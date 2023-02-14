import Counter from "./Counter";
import Restart from "./Restart";

export default function Header({ leftCounter, rightCounter, dispatch }) {
  return (
    <div
      className="bg-empty-cell-color border-8 flex p-4 items-center justify-between"
      style={{ borderStyle: "inset" }}
    >
      <Counter number={leftCounter}></Counter>
      <Restart dispatch={dispatch} mood="smile"></Restart>
      <Counter number={rightCounter}></Counter>
    </div>
  );
}
