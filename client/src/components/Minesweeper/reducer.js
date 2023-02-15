import {
  generateMinefield,
  generateUserField,
  findReveals,
} from "./minesweeper";

export default function minesweeperReducer(prevState, { type, payload }) {
  switch (type) {
    case "REVEAL_CELL":
      const reveals = findReveals(
        payload,
        prevState.minefield,
        prevState.userField
      );
      return {
        ...prevState,
        userField: prevState.userField.map((cell, index) => {
          if (reveals.includes(index)) {
            return prevState.minefield[index];
          } else {
            return cell;
          }
        }),
      };

    case "MARK_POTENTIAL_BOMB":
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
      };

    default:
      return prevState;
  }
}
