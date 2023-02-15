import Header from "./Header";
import Field from "./Field";
import { useReducer } from "react";
import { generateMinefield, generateUserField } from "./minesweeper";
import minesweeperReducer from "./reducer";

export default function Board() {
  const initialState = {
    minefield: generateMinefield(),
    userField: generateUserField(),
    guessesRemaining: 10,
    timer: 0,
  };
  const [state, dispatch] = useReducer(minesweeperReducer, initialState);
  return (
    <div
      className="bg-empty-cell-color border-8 flex flex-col gap-y-4 p-4 select-none"
      style={{ borderStyle: "outset" }}
    >
      <Header
        leftCounter={state.guessesRemaining}
        rightCounter={state.timer}
        dispatch={dispatch}
      ></Header>
      <Field
        userField={state.userField}
        dispatch={dispatch}
        width={9}
        height={9}
      ></Field>
    </div>
  );
}
