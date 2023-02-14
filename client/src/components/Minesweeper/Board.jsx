import Header from "./Header";
import Field from "./Field";
import { useState } from "react";
import { generateMinefield } from "./generateMinefield";

export default function Board() {
  const [minefield, setMinefield] = useState(generateMinefield());
  const [guessesRemaining, setGuessesRemaining] = useState(10);
  const [timer, setTimer] = useState(0);
  return (
    <div
      className="bg-empty-cell-color border-8 flex flex-col gap-y-4 p-4 select-none"
      style={{ borderStyle: "outset" }}
    >
      <Header
        leftCounter={guessesRemaining}
        rightCounter={timer}
        clickRestart={() => setMinefield(generateMinefield())}
      ></Header>
      <Field minefield={minefield} width={9} height={9}></Field>
    </div>
  );
}
