export default function userReducer(prevState, { type, payload }) {
  switch (type) {
    case "REGISTER":
      localStorage.setItem("portfolio.user", JSON.stringify(payload));
      return {
        ...prevState,
        user: payload,
      };
    case "LOGIN":
      localStorage.setItem("portfolio.user", JSON.stringify(payload));
      return {
        ...prevState,
        user: payload,
      };
    case "LOGOUT":
      localStorage.removeItem("portfolio.user");
      return {
        ...prevState,
        user: null,
      };
    default:
      return prevState;
  }
}
