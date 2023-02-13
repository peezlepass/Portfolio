import Counter from "./Counter";
import Restart from "./Restart";

export default function Header() {
  return (
    <div
      className="bg-empty-cell-color border-8 flex p-4 items-center justify-between"
      style={{ borderStyle: "inset" }}
    >
      <Counter number={111}></Counter>
      <Restart mood="smile"></Restart>
      <Counter number={111}></Counter>
    </div>
  );
}
