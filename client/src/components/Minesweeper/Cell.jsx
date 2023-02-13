import BombGuess from "./Cells/BombGuess";
import Unknown from "./Cells/Unknown";
import Bomb from "./Cells/Bomb";
import Empty from "./Cells/Empty";
import Number from "./Cells/Number";

export default function Cell({ type, props }) {
  if (type === "unknown") {
    return <Unknown></Unknown>;
  } else if (type === "bomb") {
    return <Bomb {...props}></Bomb>;
  } else if (type === "bombGuess") {
    return <BombGuess {...props}></BombGuess>;
  } else if (type === "empty") {
    return <Empty></Empty>;
  } else if (type === "number") {
    return <Number {...props}></Number>;
  }
}
