import Bomb from "./Cells/Bomb";
import Empty from "./Cells/Empty";
import Number from "./Cells/Number";

export default function Cell({ cell }) {
  if (cell === "X") {
    return <Bomb></Bomb>;
  }

  if (cell === 0) {
    return <Empty></Empty>;
  }

  return <Number number={cell}></Number>;
}
