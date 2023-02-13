import { useContext } from "react";
import { Link } from "react-router-dom";
import { globalContext } from "./context/globalContext";
import { useNavigate } from "react-router-dom";

export default function Layout({ children }) {
  const { dispatch, state } = useContext(globalContext);
  const navigate = useNavigate();
  const onClickLogout = async (event) => {
    await fetch("http://localhost:3001/logout", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    });
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };
  return (
    <main>
      <header>
        <nav className="flex justify-center gap-x-5 pt-6 text-3xl pb-6 font-pacifico">
          <Link to="/">Home</Link>
          <Link to="/minesweeper">Minesweeper</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/todo">Todo</Link>
          <Link to="/project-solo">Project Solo</Link>
          {state.user ? (
            <button type="button" onClick={onClickLogout}>
              Logout
            </button>
          ) : (
            <>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </>
          )}
        </nav>
      </header>
      {/* <div className="max-w-3xl mx-auto">{children}</div> */}
      {children}
      <footer>
        <nav className="flex justify-center gap-x-5 pt-6 text-lg pb-6">
          <a href="https://www.linkedin.com/in/ellina-shcherbaeva/">LinkedIn</a>
          <a href="https://github.com/peezlepass">GitHub</a>
          <a href="/">CV</a>
        </nav>
      </footer>
    </main>
  );
}
