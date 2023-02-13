import Bomb from "./Cells/Bomb";
import BombGuess from "./Cells/BombGuess";
import Empty from "./Cells/Empty";
import Number from "./Cells/Number";
import Unknown from "./Cells/Unknown";
import Board from "./Board";
import Cell from "./Cell";
import Counter from "./Counter";
import Field from "./Field";
import Header from "./Header";
import Restart from "./Restart";

export default function MinesweeperPage() {
  return (
    <div className="flex flex-col gap-y-8 items-center">
      <Board></Board>
      <Header></Header>
      <Restart mood="smile"></Restart>
      <Restart mood="surprise"></Restart>
      <Restart mood="dead"></Restart>
      <Counter number={320}></Counter>
      <Field></Field>
      <Cell></Cell>
      <Bomb></Bomb>
      <Bomb red={true}></Bomb>
      <BombGuess></BombGuess>
      <BombGuess red={true}></BombGuess>
      <Empty></Empty>
      <Number number={1}></Number>
      <Number number={2}></Number>
      <Number number={3}></Number>
      <Number number={4}></Number>
      <Number number={5}></Number>
      <Number number={6}></Number>
      <Number number={7}></Number>
      <Number number={8}></Number>
      <Unknown></Unknown>
    </div>
  );
}
