import BombGuess from "./Cells/BombGuess";
import Unknown from "./Cells/Unknown";
import Bomb from "./Cells/Bomb";
import Empty from "./Cells/Empty";
import Number from "./Cells/Number";

export default function Cell({ cell, dispatch, index }) {
  if (cell === "X") {
    return <Bomb></Bomb>;
  }

  if (cell === "XR") {
    return <Bomb red={true}></Bomb>;
  }

  if (cell === 0) {
    return <Empty></Empty>;
  }

  if (cell === "U") {
    return <Unknown index={index} dispatch={dispatch}></Unknown>;
  }

  if (cell === "G") {
    return <BombGuess index={index} dispatch={dispatch}></BombGuess>;
  }

  return <Number number={cell}></Number>;
}
