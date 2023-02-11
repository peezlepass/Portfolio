export default function userReducer(prevState, { type, payload }) {
  switch (type) {
    case "REGISTER":
      return {
        ...prevState,
        user: payload,
      };
    case "LOGIN":
      return {
        ...prevState,
        user: payload,
      };
    case "LOGOUT":
      return {
        ...prevState,
        user: null,
      };
    default:
      return prevState;
  }
}
