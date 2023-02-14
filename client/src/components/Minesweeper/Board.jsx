import Header from "./Header";
import Field from "./Field";
import { useState } from "react";
import { generateMinefield } from "./generateMinefield";

export default function Board() {
  const [minefield, setMinefield] = useState(generateMinefield());
  return (
    <div
      className="bg-empty-cell-color border-8 flex flex-col gap-y-4 p-4 select-none"
      style={{ borderStyle: "outset" }}
    >
      <Header></Header>
      <Field minefield={minefield} width={9} height={9}></Field>
    </div>
  );
}
