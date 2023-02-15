import Header from "./Header";
import Field from "./Field";
import { useReducer, useEffect } from "react";
import { generateMinefield, generateUserField } from "./minesweeper";
import minesweeperReducer from "./reducer";

export default function Board() {
  const initialState = {
    minefield: generateMinefield(),
    userField: generateUserField(),
    guessesRemaining: 10,
    timer: 0,
    gameStatus: "ready",
  };
  const [state, dispatch] = useReducer(minesweeperReducer, initialState);
  let mood = "";
  if (state.gameStatus === "ready") {
    mood = "smile";
  } else if (state.gameStatus === "won") {
    mood = "cool";
  } else if (state.gameStatus === "running") {
    mood = "smile";
  } else if (state.gameStatus === "over") {
    mood = "dead";
  }

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "INCREMENT_TIMER" });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className="bg-empty-cell-color border-8 flex flex-col gap-y-4 p-4 select-none"
      style={{ borderStyle: "outset" }}
    >
      <Header
        leftCounter={state.guessesRemaining}
        rightCounter={state.timer}
        dispatch={dispatch}
        mood={mood}
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
