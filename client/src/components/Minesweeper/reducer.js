import {
  findReveals,
  generateMinefield,
  generateUserField,
} from "./minesweeper";

export default function minesweeperReducer(prevState, { type, payload }) {
  switch (type) {
    case "REVEAL_CELL":
      if (prevState.gameStatus === "over") {
        return prevState;
      }

      if (prevState.minefield[payload] === "X") {
        return {
          ...prevState,
          userField: prevState.userField.map((cell, index) => {
            if (prevState.minefield[index] === "X") {
              return "X";
            } else {
              return cell;
            }
          }),
          gameStatus: "over",
        };
      }

      const reveals = findReveals(
        payload,
        prevState.minefield,
        prevState.userField
      );
      return {
        ...prevState,
        gameStatus: "running",
        userField: prevState.userField.map((cell, index) => {
          if (reveals.includes(index)) {
            return prevState.minefield[index];
          } else {
            return cell;
          }
        }),
      };

    case "MARK_POTENTIAL_BOMB":
      if (prevState.gameStatus === "over") {
        return prevState;
      }
      if (prevState.guessesRemaining === 0) {
        return prevState;
      }
      return {
        ...prevState,
        userField: prevState.userField.map((cell, index) => {
          if (index === payload) {
            return "G";
          } else {
            return cell;
          }
        }),
        guessesRemaining: prevState.guessesRemaining - 1,
      };

    case "UNMARK_POTENTIAL_BOMB":
      if (prevState.gameStatus === "over") {
        return prevState;
      }
      return {
        ...prevState,
        userField: prevState.userField.map((cell, index) => {
          if (index === payload) {
            return "U";
          } else {
            return cell;
          }
        }),
        guessesRemaining: prevState.guessesRemaining + 1,
      };

    case "RESTART":
      return {
        ...prevState,
        userField: generateUserField(),
        minefield: generateMinefield(),
        guessesRemaining: 10,
        timer: 0,
        gameStatus: "ready",
      };

    case "INCREMENT_TIMER":
      if (prevState.gameStatus === "running") {
        return {
          ...prevState,
          timer: Math.min(999, prevState.timer + 1),
        };
      } else {
        return prevState;
      }

    default:
      return prevState;
  }
}
