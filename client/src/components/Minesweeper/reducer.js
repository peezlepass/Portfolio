export default function minesweeperReducer(prevState, { type, payload }) {
  switch (type) {
    case "REVEAL_CELL":
      return {
        ...prevState,
        userField: prevState.userField.map((cell, index) => {
          if (index === payload) {
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

    default:
      return prevState;
  }
}
